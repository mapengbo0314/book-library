let myLibrary = [];

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  read = read ? "read" : "not read";
  return { title, author, pages, read };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Books("The Hobbit ", "J.R.R. Tolkien", 295, false);

addBookToLibrary(theHobbit);
console.log(myLibrary);

function init() {
  renderBookList();
}

function renderBookList() {
  let bookList = document.getElementById("booklist");
  bookList.innerHTML = JSON.stringify(myLibrary);
}
init();
