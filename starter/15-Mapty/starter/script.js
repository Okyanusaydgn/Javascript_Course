'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.type = 'cycling';
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 5.2, 95, 523);
// console.log(run1, cycling1);

/////////////////////////////////////////////////
// APPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  #markers = new Map();

  constructor() {
    // Get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    containerWorkouts.addEventListener('click', this._onListClick.bind(this));
    document
      .querySelector('.toolbar')
      ?.addEventListener('click', this._onToolbar.bind(this));
    this._setFormFieldsForType(inputType.value);
    this._updateToolbarVisibility();
    this._ensureToastRoot();
  }

  _ensureToastRoot() {
    if (!document.querySelector('.toasts')) {
      const root = document.createElement('div');
      root.className = 'toasts';
      root.setAttribute('aria-live', 'polite');
      root.setAttribute('aria-atomic', true);
      document.body.appendChild(root);
    }
  }

  _showToast(message, type = 'info', timeout) {
    const root = document.querySelector('.toasts');
    if (!root) return;

    const autoTimeout =
      timeout ?? (type === 'success' ? 4000 : type === 'error' ? 5000 : 2500);

    const el = document.createElement('div');
    el.className = `toast toast--${type}`;
    el.role = type === 'error' ? 'alert' : 'status';

    el.innerHTML = `
    <span class="toast__message">${message}</span>
    <button class="toast__close" aria-label="Close">&times;</button>
    <span class="toast__progress"></span>
  `;

    el.style.setProperty('--toast-duration', `${autoTimeout}ms`);

    root.appendChild(el);
    requestAnimationFrame(() => el.classList.add('toast--in'));

    const close = () => {
      el.classList.remove('toast--in');
      el.addEventListener('transitionend', () => el.remove(), { once: true });
    };

    const timer = setTimeout(close, autoTimeout);

    el.querySelector('.toast__close').addEventListener('click', () => {
      clearTimeout(timer);
      close();
    });
  }

  _updateToolbarVisibility() {
    const clearBtn = document.querySelector('.btn --clear'.replace(' ', ''));
    if (!clearBtn) return;
    clearBtn.hidden = this.#workouts.length === 0;
  }

  _setFormFieldsForType(type) {
    const rowCad = inputCadence.closest('.form__row');
    const rowElv = inputElevation.closest('.form__row');
    if (type === 'running') {
      rowCad.classList.remove('form__row--hidden');
      rowElv.classList.add('form__row--hidden');
    } else {
      rowElv.classList.remove('form__row--hidden');
      rowCad.classList.add('form__row--hidden');
    }
  }

  _onToolbar(e) {
    const btn = e.target.closest('.btn--clear');
    if (!btn) return;
    if (!confirm('Delete all workouts?')) return;

    // Remove markers
    this.#markers.forEach(m => m.remove());
    this.#markers.clear();

    // Remove list elements
    document.querySelectorAll('.workout').forEach(li => li.remove());

    // clean to the state
    this.#workouts = [];

    // Persist
    this._setLocalStorage();
    this._updateToolbarVisibility();
    this._showToast('All workouts deleted 🧹', 'success');
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () =>
        this._showToast('Could not get your position', 'error')
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
    // console.log(map);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const editingId = form.dataset.editing; // <-- edit mod bayrağı/id
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;

    // ====== EDIT AKIŞI ======
    if (editingId) {
      // Hedef kaydı bul
      const idx = this.#workouts.findIndex(w => w.id === editingId);
      if (idx === -1) return;

      const old = this.#workouts[idx];
      let updated;

      if (type === 'running') {
        const cadence = +inputCadence.value;
        if (
          !validInputs(distance, duration, cadence) ||
          !allPositive(distance, duration, cadence)
        )
          return this._showToast(
            'Inputs have to be positive numbers!',
            'error'
          );

        // Konumu koruyoruz (edit’te yeri aynı kalsın)
        updated = new Running(old.coords, distance, duration, cadence);
      }

      if (type === 'cycling') {
        const elevation = +inputElevation.value;
        if (
          !validInputs(distance, duration, elevation) ||
          !allPositive(distance, duration)
        )
          return this._showToast(
            'Inputs have to be positive numbers!',
            'error'
          );

        updated = new Cycling(old.coords, distance, duration, elevation);
      }

      // Meta bilgilerini koru
      updated.id = old.id;
      updated.date = new Date(old.date);
      updated.clicks = old.clicks ?? 0;

      // STATE: dizide değiştir
      this.#workouts[idx] = updated;

      // DOM: eski kartı kaldır, yenisini çiz
      document.querySelector(`.workout[data-id="${updated.id}"]`)?.remove();
      this._renderWorkout(updated);

      // MARKER: eskisini kaldır, yenisini oluştur
      this.#markers.get(updated.id)?.remove();
      this.#markers.delete(updated.id);
      if (this.#map) this._renderWorkoutMarker(updated);

      // FORM: moddan çık + gizle/temizle
      delete form.dataset.editing;
      this._hideForm();

      // PERSIST
      this._setLocalStorage();

      this._showToast('Workout updated ✨', 'success');

      return; // edit tamam
    }

    // ====== YENİ OLUŞTURMA AKIŞI (eski kodun) ======
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return this._showToast('Inputs have to be positive numbers!', 'error');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return this._showToast('Inputs have to be positive numbers!', 'error');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + Clear input fields
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();

    this._showToast('Workout added ✅', 'success');

    // Hide delete button
    this._updateToolbarVisibility();
  }

  _renderWorkoutMarker(workout) {
    const marker = L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();

    this.#markers.set(workout.id, marker);
  }
  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">
      ${workout.description}
      <button class="btn btn--edit" data-id="${
        workout.id
      }" type="button">Edit</button>
      <button class="btn btn--del"  data-id="${
        workout.id
      }" type="button">Delete</button>
      </h2>


      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>

      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
  `;

    if (workout.type === 'running')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    `;

    if (workout.type === 'cycling')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    `;

    html += `</li>`;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    if (e.target.closest('.btn')) return;

    const workoutEl = e.target.closest('.workout');
    // console.log(workoutEl);

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    console.log(workout);

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // using the public interface
    // workout.click();
  }

  _onListClick(e) {
    const delBtn = e.target.closest('.btn--del');
    const editBtn = e.target.closest('.btn--edit');

    if (delBtn) {
      const id = delBtn.dataset.id;
      this._deleteWorkout(id);
      return;
    }

    if (editBtn) {
      const id = editBtn.dataset.id;
      this._startEdit(id);
      return;
    }
  }

  _startEdit(id) {
    const w = this.#workouts.find(x => x.id === id);
    if (!w) return;

    inputType.value = w.type;
    this._setFormFieldsForType(w.type);

    inputDistance.value = w.distance;
    inputDuration.value = w.duration;
    inputCadence.value = w.cadence ?? '';
    inputElevation.value = w.elevationGain ?? '';

    form.dataset.editing = id;

    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    // console.log(data);

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
    this._updateToolbarVisibility();
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }

  _deleteWorkout(id) {
    // 1) state’ten çıkar
    const idx = this.#workouts.findIndex(w => w.id === id);
    if (idx === -1) return;

    // 2) marker varsa kaldır
    this.#markers.get(id)?.remove();
    this.#markers.delete(id);

    // 3) DOM’dan kaldır
    document.querySelector(`.workout[data-id="${id}"]`)?.remove();

    // 4) diziden çıkar + kalıcı hale getir
    this.#workouts.splice(idx, 1);
    this._setLocalStorage();
    this._updateToolbarVisibility();
    this._showToast('Workout deleted 🗑️', 'success');
  }
}

const app = new App();
