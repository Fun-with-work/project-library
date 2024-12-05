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

const myLibrary = [];

let title;
let author;
let pages;
let read;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
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
};

// addBookToLibrary();



submitButton.addEventListener("click", event => {
    addBookToLibrary(title, author, pages, read);
});


const book1 = new Book('The Hobbit', "J. R. R. Tolkien", '295 pages', 'not read yet');

const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '281', 'not read yet');

const book3 = new Book('The Count of Monte Cristo', 'Alexandre Dumas', '1312 pages', 'not read yet');

const book4 = new Book('Great Expectations', 'Charles Dickens', '544 pages', 'not read yet');

const book5 = new Book('Crime and Punishment', 'Fyodor Dostoevsky', '527 pages', 'not read yet');


myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);

console.log(myLibrary);
let n = 1;

function bookPageDisplay (displayTitle, displayAuthor, displayPages) {
    while (n <6) {
        displayTitle[n].textContent = (myLibrary[n].title);
        displayAuthor[n].textContent = (myLibrary[n].author);
        displayPages[n].textContent = (myLibrary[n].pages);  
        n  += 1; 
    }
}

bookPageDisplay();



// displayTitle[0].textContent = (myLibrary[0].title);
// displayAuthor[0].textContent = (myLibrary[0].author);
// displayPages[0].textContent = (myLibrary[0].pages);

// displayTitle[1].textContent = (myLibrary[1].title);
// displayAuthor[1].textContent = (myLibrary[1].author);
// displayPages[1].textContent = (myLibrary[1].pages);

// displayTitle[2].textContent = (myLibrary[2].title);
// displayAuthor[2].textContent = (myLibrary[2].author);
// displayPages[2].textContent = (myLibrary[2].pages);

// displayTitle[3].textContent = (myLibrary[3].title);
// displayAuthor[3].textContent = (myLibrary[3].author);
// displayPages[3].textContent = (myLibrary[3].pages);

// displayTitle[4].textContent = (myLibrary[4].title);
// displayAuthor[4].textContent = (myLibrary[4].author);
// displayPages[4].textContent = (myLibrary[4].pages);
