let myLibrary = [];

//-----------------Basic constructor---------------------
const Books = (title, author, pages, read) => {
  const info = () => {
    return `${title}, by ${author}, ${pages} pages, ${
      read ? "read" : "not read"
    }`;
  };

  const toggleReadBook = () => {
    read = !read;
  };

  return { title, author, pages, read, info, toggleReadBook };
};

function addBookToLibrary(book) {
  //adding a book to the library
  myLibrary.push(book);
}
//-------------Toggling the hide and show button on "Add New Form"---------------------
function toggleBookForm() {
  document.querySelector("#newBookForm").classList.toggle("box");
}

function renderBookFormHandler() {
  const newBookFormButton = document.querySelector("#newBookFormButton");
  newBookFormButton.onclick = () => toggleBookForm();
}

//------------Toggling the Read or Not read button----------------------------
function readBook(element) {
  let readbook = element.parentNode; // kind of a mystery of what parentNode is..
  myLibrary[readbook.dataset.libraryIndex].toggleReadBook(); //no idea what dataset.libraryIndex is for....
  console.log("toggle book"); // consoles the button class read-book with i've read this book, so it's the button eleeent we got from the query selector

  renderBookList(); //re render the list so we can see the change!
}
function readBookHandlers() {
  let toggle = document.querySelectorAll(".read-book");
  toggle.forEach(element => {
    //for each element, we try to select those
    element.onclick = () => readBook(element); //click function on the function of element we call
  });
}

//-----------Delete handlers-------------
function deleteBook(element) {
  let deletebook = element.parentNode;
  delete myLibrary[deletebook.dataset.libraryIndex];
  console.log("deleted book");
  renderBookList();
}

function deleteBookHandler() {
  let dtoggle = document.querySelectorAll(".delete-book");
  dtoggle.forEach(element => {
    element.onclick = () => deleteBook(element);
  });
}
//------------------Onsubmit handlers---------------
function addNewBook() {}
//------------------init and event handlers---------------------
function init() {
  renderBookList();
}
function addEventHandlers() {
  renderBookFormHandler();
  readBookHandlers();
  deleteBookHandler();
}

//------------------Render List-------------------------
function renderBookList() {
  let bookList = document.getElementById("booklist");

  bookList.innerHTML = myLibrary
    .map((book, index) => {
      return (
        '<div class="book-card" data-library-index="' +
        index +
        '"><div class="book-info">' +
        book.info() +
        '</div><button class="read-book">' +
        "Reading Toggler" +
        '</button><button class="delete-book">Remove book from my library</button></div>'
      );
    })
    .join("");
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
