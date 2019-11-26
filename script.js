let myLibrary = [];


const Books = (title, author, pages, read) => {
  const info = () => {
    return `${title}, by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
  }

  const toggleReadBook = () => {
    read = !read;
  }

  return { title, author, pages, read, info, toggleReadBook }
}

function addBookToLibrary(book) { //adding a book to the library
  myLibrary.push(book);
}

function toggleBookForm() {
  document.querySelector('#newBookForm').classList.toggle('box');
}
function addEventHandlers() {
  renderBookFormHandler();
}
function renderBookFormHandler() {
  const newBookFormButton = document.querySelector('#newBookFormButton');
  newBookFormButton.onclick = () => toggleBookForm();
}



function init() {
  renderBookList();
}

function renderBookList() {
  let text = ``;
  let bookList = document.getElementById("booklist");

  bookList.innerHTML = myLibrary.map((book, index) => {
    console.log(index);
    return '<div class="book-card" data-library-index="' + index + '"><div class="book-info">' + book.info() + '</div><button class="read-book">' + (!book.read ? "I've read this book" : "I haven't read this book") + '</button><button class="delete-book">Remove book from my library</button></div>';

  }).join('');
  addEventHandlers();
}
const theHobbit = Books("The Hobbits", "J.R.R. Tolkien", 295, false);
const theHobbit1 = Books("The Hobbits1", "J.R.R. Tolkien", 295, false);
const theHobbit2 = Books("The Hobbits2", "J.R.R. Tolkien", 295, false);

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit1);
addBookToLibrary(theHobbit2);

init();









// const { title, author, pages, read } = myLibrary[0];  //This is very useful for string accessing
// let text = `${title},  ${author}, ${pages} pages, <button id= "readjs" style = "padding: 5px" onclick = "toggleRead()">${read}</button>`;
//   // Object.values(myLibrary[0]).forEach(function (k) {  //this way works as it is iterating through the object and finding the values to put for each
//   //   text += k + " "; //This gives us the ability to add all words on there but with no string manuplation 
//   // });