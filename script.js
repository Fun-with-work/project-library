const form = document.getElementById("form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("book-read");
const submitButton = document.getElementById("submit-button");

let bookId = 0;
let title;
let author;
let pages;
let read;
let section = document.getElementById("section");
let bookCard;
let displayTitle;
let displayAuthor;
let displayPages;
let displayRead;

// const readStatus = document.createElement("button");

const myLibrary = [];

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    alert("The form can not be submitted.")
});

function Book(bookId ,title, author, pages, read) {
    
    this.bookId = bookId;
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

let book5 = new Book('Crime and Punishment', 'Fyodor Dostoevsky', '320', 'not read yet');

let book6 = new Book(`One Flew Over the Cuckoo's Nest`, 'Ken Kesey', '527 pages', 'not read yet');

let book7 = new Book('Moby-Dick', 'Herman Melville', '635', 'not read yet');

let book8 = new Book('Catch-22', 'Joseph Heller', '453', 'not read yet');

let book9 = new Book('Frankenstein', 'Mary Shelley', '280', 'read');

myLibrary.push(book1, book2, book3, book4, book5, book6, book7, book8, book9);
console.log(myLibrary);

let j = 1;

function bookCards(myLibrary) {
    for (i = 0; i <= 8; i++) {
        bookCard = document.createElement("div");
        displayTitle = document.createElement("p");
        displayAuthor = document.createElement("p");
        displayPages = document.createElement("p");
        displayRead = document.createElement("p");      
        
        bookCard.style.color = "rgb(112, 29, 29)";
        bookCard.style.display = "grid";
        bookCard.style.gridTemplateRows = "6rem 2rem 2rem 2rem";
        bookCard.style.padding = "20px";
        bookCard.style.backgroundColor = "rgba(199, 164, 124, 0.84)";
        // bookCard.style.height = "18rem";
        // bookCard.style.width = "10rem";
        bookCard.style.boxShadow = "5px 5px 20px rgba(0, 0, 0, 0.622)";

        bookCard.style.minHeight = "24rem";
        bookCard.style.minWidth = "16rem";
        bookCard.style.width = "100%";
        bookCard.style.margin = "20px";
        
        displayTitle.style.fontSize = "2rem";
        displayTitle.style.alignItems = "center";
        displayTitle.style.gridRow = "1 / 2";
        displayTitle.style.padding = "2rem";
        
        const styles = {
            fontSize: "1.5rem",
            padding: "4rem 0 1rem 1rem",
            color: "rgb(49, 49, 49)"
        }
        Object.assign(displayAuthor.style, styles)
        Object.assign(displayPages.style, styles)
        Object.assign(displayRead.style, styles)
        
        displayAuthor.style.gridRow = "2 / 3";
        displayPages.style.gridRow = "3 / 4";
        displayRead.style.gridRow = "4 / 5";

        section.appendChild(bookCard);
        bookCard.appendChild(displayTitle);
        bookCard.appendChild(displayAuthor);
        bookCard.appendChild(displayPages);
        bookCard.appendChild(displayRead);
        
        displayTitle.textContent = (myLibrary[j-1].title);
        displayAuthor.textContent = (myLibrary[j-1].author);
        displayPages.textContent = (myLibrary[j-1].pages);
        displayRead.textContent = (myLibrary[j-1].read);
        j+= 1;
    }
    return;
}

// function bookPageDisplay(displayTitle, displayAuthor, displayPages, displayRead) {
//     for (let i = 0; i <= myLibrary.length; i++) {
//     } return;
// }

bookCards(myLibrary);

// bookPageDisplay(displayTitle, displayAuthor, displayPages, displayRead);

