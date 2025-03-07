const form = document.getElementById("form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("book-read");
const submitButton = document.getElementById("submit-button");
const bookDisplay = document.getElementsByClassName("book-display");

let displayTitle = document.getElementsByClassName("display-title");
let displayAuthor = document.getElementsByClassName("display-author");
let displayPages = document.getElementsByClassName("display-pages");
let displayRead = document.getElementsByClassName("display-read");
const readStatus = document.createElement("button");

let myLibrary = [];

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    alert("The form can not be submitted.")
});

let title;
let author;
let pages;
let read;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages + " pages";
    this.read = read;
    return;
}

function addBookToLibrary(title, author, pages, read) {
    if (titleInput == null || titleInput == "") {
        alert("Please enter the book title.");
        return;
    } else {
        title.textContent = titleInput.textContent;
        author.textContent = authorInput.textContent;
        pages.textContent = pagesInput.textContent;
        read.textContent = readInput.textContent;

        titleInput.textContent = "";
        authorInput.textContent = "";
        pagesInput.textContent = "";
        readInput.textContent = "";
    }

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    book = "";
    return;
};

submitButton.addEventListener("click", event => {
    addBookToLibrary(title, author, pages, read);
});


let book1 = new Book('The Hobbit', "J. R. R. Tolkien", '295', 'read');

let book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '281', 'read');

let book3 = new Book('The Count of Monte Cristo', 'Alexandre Dumas', '1312', 'not read yet');

let book4 = new Book('Great Expectations', 'Charles Dickens', '544', 'read');

let book5 = new Book('Crime and Punishment', 'Fyodor Dostoevsky', '527 pages', 'not read yet');

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);

console.log(myLibrary);

function bookPageDisplay(displayTitle, displayAuthor, displayPages, displayRead) {
    for (i = 0; i <= myLibrary.length; i++) {
        displayTitle[i].textContent = (myLibrary[i].title);
        displayAuthor[i].textContent = (myLibrary[i].author);
        displayPages[i].textContent = (myLibrary[i].pages);
        displayRead[i].textContent = (myLibrary[i].read);
    }
}

bookPageDisplay(displayTitle, displayAuthor, displayPages, displayRead);




