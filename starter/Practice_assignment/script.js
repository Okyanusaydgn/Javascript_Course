const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//////////////////////////////////////

// Assignment 1.1
[firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

//////////////////////////////////////

// Assignment 1.2
[, , thirdBook] = books;

//////////////////////////////////////

// Assignment 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

//////////////////////////////////////

// Assignment 1.4
const ratingStars = [63405, 1808];

[fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

//////////////////////////////////////

// Assignment 2.1
const { title, author, ISBN } = books[0];

//////////////////////////////////////

// Assignment 2.2
const { keywords: tags } = books[0];

//////////////////////////////////////

// Assignment 2.3
const { language, programmingLanguage = 'unknown' } = books[6];

//////////////////////////////////////

// Assignment 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);

//////////////////////////////////////

// Assignment 2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

//////////////////////////////////////

// Assignment 2.6
function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}

// Assignment 3.1
bookAuthors = { ...books[0].bookAuthor, ...books[1].author };

// Assignment 3.2
function spellWorld(word) {
  console.log(...word);
}

// Assignment 4.1
const [mainKeyword, ...rest] = books[0].keywords;

// Assignment 4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];

// Assignment 4.3
function printBookAuthorsCount(title, ...authors) {
  // console.log(`The book "${title}" has ${authors.length} authors`);
}

// Assignment 5.1
function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data available';
}

// Assignment 5.2
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`"${books[i].title}" provides online content`);
// }

// Assignment 6.1
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(
//       `"${books[i].title} provides no data about its online content"`
//     );
// }

// Assignment 7.1
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}

// Assignment 7.1
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}

// Assignment 8.1
let pageSum = 0;
for (let item of books) {
  pageSum += item.pages;
  // console.log(pageSum);
}

// Assignment 8.2
let allAuthors = [];

for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
  // console.log(allAuthors);
}

// 2. solving style

// if (typeof book.author === 'string') {
//   allAuthors.push(book.author);
// } else {
//   allAuthors.push(...book.author);
// }

// Assignment 8.3
for (const [i, el] of allAuthors.entries()) {
  // console.log(`${i + 1}. ${el}`);
}

// Teacher Solving
// for (const [index, author] of allAuthors.entries()) {
//   console.log(`${index + 1}. ${author}`);
// }

// Assignment 9.1

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {};
for (const [key, value] of bookData) {
  newBook[key] = value;
}

// console.log(newBook);

// Assignment 9.1
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

// Assignment 10.1
const getFirstKeyword = function (book) {
  return book.keywords?.[0];
};

// Practise 10.2
// const user = {
//   name: 'Merve',
//   contact: {
//     email: 'merve@example.com',
//     phone: '0532 123 4567',
//   },
// };

// console.log(user.contact.email);

// Practise 10.3
// const employee = {
//   name: 'Ali',
//   department: {
//     name: 'IT',
//     head: {
//       name: 'Mehmet',
//     },
//   },
// };

// console.log(employee.department?.head?.name ?? 'No head assigned');
// console.log(employee.salary?.amount ?? 'Salary not set');

/*
///////////////////////////////////////////
// Assignment 11.1

const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
// console.log(entries);

// Assignment 11.2
for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}

// console.log(entries);

// Assignment 11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries);
console.log(entries2);
*/

// Assignment 12.1
const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
  // console.log(allKeywords);
}

// Assignment 12.2
const uniqueKeywords = new Set(allKeywords);

// const uniqueKeywords = [...new Set(allKeywords)];
// console.log(uniqueKeywords);

// Assignment 12.3
uniqueKeywords.add('coding');
uniqueKeywords.add('science');

// const mySet = new Set(uniqueKeywords); // Turning into set

// Adding 'coding' and 'science'
// mySet.add('coding');
// mySet.add('science');

// Turning into array
// const updatedKeywords = [...mySet];
// console.log(updatedKeywords);

//////////////////////////////////////////////////////
// Another solving way
// const newWords = ['coding', 'science'];
// const mySet = new Set(uniqueKeywords);
// const updatedSet = new Set([...mySet, ...newWords]);

// Assignment 12.4
uniqueKeywords.delete('business');

// Assignment 12.5
const uniqueKeywordsArr = [...uniqueKeywords];

// Assignment 12.6
uniqueKeywords.clear();

// Assignment 13.1
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

// Assignment 13.2
bookMap.set('pages', 464);

// Assignment 13.3
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// Assignment 13.4
// console.log(bookMap.size);

// Assignment 13.5
bookMap.has('author') && console.log('The author of the book is known');
// 2. solving way
// if (bookMap.has('author')) console.log('The author is known');

// Assignment 14.1
const firstBookMap = new Map(Object.entries(books[0]));

// Assignment 14.2
for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') {
    // console.log(`${key}: ${value}`);
  }
}

// for (const [key, value] of firstBookMap) {
//   if (typeof value === 'number') console.log(key);
// }

// Assignment 15.1
console.log(
  books[0].ISBN['6'],
  books[0].ISBN['4'],
  books[0].ISBN['9'],
  books[0].ISBN['8']
);

// Assignment 15.2
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

// console.log(quote.indexOf('chess'));

// Assignment 15.3
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// Assignment 15.4

function isContributor(author) {
  return author.lastIndexOf('(Contributor)') !== -1;
}

// Practise
// Practise 1
/*
const fruits = ['🍎 Apple', '🍌 Banana', '🍇 Grape', '🍓 Strawberry'];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit);
*/
//////////////////////////////////////////////////////////////////////////////
/*
// Practise 2
const students = ['Ali', 'Ayşe', 'Mehmet'];
const [firstStudent, , thirdStudent, fourthStudent = 'Boş'] = students;
console.log(firstStudent);    
console.log(thirdStudent);   
console.log(fourthStudent);
*/
/*
//////////////////////////////////////////////////////////////////////////////
// Practise 3 

const user = {
  name: 'Zeynep',
  age: 27,
  email: 'zeynep@example.com',
  city: 'Istanbul',
};

const {name, age, email} = user;
console.log(name);   // Zeynep
console.log(age);    // 27
console.log(email);  // zeynep@example.com
*/

//////////////////////////////////////////////////////////////////////////////
// Practise 4

const settings = {
  theme: 'dark',
  fontSize: 16,
};

const { theme: currentTheme, fontSize, language2 = 'tr' } = settings;

// console.log(currentTheme);
// console.log(fontSize);
// console.log(language2);

//////////////////////////////////////////////////////////////////////////////
// Practise 5

const europeanCountries = ['Germany', 'France', 'Spain'];
const asianCountries = ['Japan', 'China', 'India'];

copyEurope = [...europeanCountries];
worldCountries = [...copyEurope, ...asianCountries];
// console.log(worldCountries);

//////////////////////////////////////////////////////////////////////////////
// Practise 6
const person = {
  name: 'Elif',
  age: 25,
  city: 'Istanbul',
};

updatedPerson = { ...person, age: 30, city: 'Ankara' };
// console.log(updatedPerson);

//////////////////////////////////////////////////////////////////////////////
// Practise 7
const sumAll = function (...numbers) {
  total = 0;
  for (const num of numbers) {
    total += num;
  }
  console.log(total);
};

sumAll(4, 5, 6);

//////////////////////////////////////////////////////////////////////////////
// Practise 8
const numbers = [10, 20, 30, 40, 50];
const [first, second, ...others] = numbers;

//////////////////////////////////////////////////////////////////////////////
// Practise 9
const carBrands = ['Toyota', 'BMW', 'Audi', 'Mercedes'];
const [firstCar, secondCar, ...others2] = carBrands;

//////////////////////////////////////////////////////////////////////////////
// Practise 10
const user = {
  username: 'coder123',
  email: 'coder@example.com',
  password: '123456',
};

const { username, email } = user;

//////////////////////////////////////////////////////////////////////////////
// Practise 11
const veggies = ['Carrot', 'Broccoli'];
const fruits = ['Apple', 'Banana'];

const allItems = [...veggies, ...fruits];
console.log(allItems);

//////////////////////////////////////////////////////////////////////////////
// Practise 12
const employee = {
  name: 'John',
  age: 35,
  department: 'Sales',
};

const employee2 = { ...employee, age: 40 };

//////////////////////////////////////////////////////////////////////////////
// Practise 13
const isAdmin = true;
const accessLevel = 'full-access';

console.log(isAdmin && accessLevel);

//////////////////////////////////////////////////////////////////////////////
// Practise 13
const userInput = null;
console.log(userInput ?? 'z');

//////////////////////////////////////////////////////////////////////////////
// Practise 14
const a = 0;
const b = '';
const c = undefined;
const d = null;

console.log(a ?? 'default'); // 0 --> because 0 isn't a null
console.log(b ?? 'default'); // ---> beacuse empty string isn't a null
console.log(c ?? 'default'); // --> default
console.log(d ?? 'default'); // --> default

//////////////////////////////////////////////////////////////////////////////
// Practise 15
const settings2 = {
  theme: 'dark',
  fontSize: 0,
  language: undefined,
};

console.log((settings2.theme ||= 'light'));
console.log((settings2.fontSize ??= 16));
console.log((settings2.language ??= 'en'));

//////////////////////////////////////////////////////////////////////////////
// Practise 16
const languages = ['JavaScript', 'Python', 'Java', 'C++'];

for (const x of languages) {
  console.log(`Öğrenilen dil: ${x}`);
}

//////////////////////////////////////////////////////////////////////////////
// Practise 17
const product = 'Laptop';
const price = 15000;
const currency = '₺';

const item = {
  product,
  price,
  currency,
  getSummary() {
    return `${this.product} ürünün fiyatı: ${this.price}${this.currency}`;
  },
};

console.log(item.getSummary());
//////////////////////////////////////////////////////////////////////////////
// Practise 18
const user1 = {
  name: 'Emre',
  address: {
    street: 'Atatürk Cd.',
    city: 'İstanbul',
  },
};

console.log(user1.address?.zipcode ?? 'Zipcode yok');

//////////////////////////////////////////////////////////////////////////////
// Practise 19
