const form = document.getElementById("form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("book-read");
const submitButton = document.getElementById("submit-button");

const section = document.getElementById("section");
const sliderButtons = document.querySelectorAll("slider-btn")
const prevBtn = document.getElementsByClassName("prev");
const nextBtn = document.getElementsByClassName("next");

let title;
let author;
let pages;
let read;
const bookId = " ";

// let displayTitle;
// let displayAuthor;
// let displayPages;
// let displayRead;
// let removeBook;
// let readStatus;

let card = document.getElementsByClassName("book-display");

let card1 = document.getElementById("one");
let card2 = document.getElementById("two");
let card3 = document.getElementById("three");
let card4 = document.getElementById("four");
let card5 = document.getElementById("five");

const cardArray = [card1, card2, card3, card4, card5];

let displayTitle = document.getElementsByClassName("display-title");
let displayAuthor = document.getElementsByClassName("display-author");
let displayPages = document.getElementsByClassName("display-pages");
let displayRead = document.getElementsByClassName("display-read");

// let readStatus = document.getElementsByClassName("button");
const readStatus = document.createElement("button");
readStatus.textContent = ("read status");
const myLibrary = [];

// displayRead.addEventListener("click", function (e) {
//      if (displayRead=== "read") {
//         displayRead = "not read";
//         title.textContent = "not read";
//     } else {
//             displayRead = "read";
//             title.textContent = "read";
//      }
//      return;
// });

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    alert("The form can not be submitted.")
});

function Book(title, author, pages, read, _bookId) {
    this.title = title;
    this.author = author;
    this.pages = pages + " pages";
    this.read = read;
    this.bookId = crypto.randomUUID();
    return;
}

function addBookToLibrary(title, author, pages, read, bookId) {
    if (titleInput == null || titleInput == "") {
        alert("Please enter the book title.");
        return;
    } else {
        title.textContent = titleInput.textContent;
        author.textContent = authorInput.textContent;
        pages.textContent = pagesInput.textContent;
        read.textContent = readInput.textContent;
        bookId = crypto.randomUUID();

        titleInput.textContent = "";
        authorInput.textContent = "";
        pagesInput.textContent = "";
        readInput.textContent = "";
    }

    let book = new Book(title, author, pages, read, bookId);
    myLibrary.push(book);
    book = "";
    return;
};

submitButton.addEventListener("click", event => {
    addBookToLibrary(title, author, pages, read, bookId);
});

// manually create books
let book1 = new Book('The Hobbit', 'J. R. R. Tolkien', '295', 'read');
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

console.log(cardArray);

let i = 0;

// displayTitle = document.createElement("p");
// displayAuthor = document.createElement("p");
// displayPages = document.createElement("p");
// displayRead = document.createElement("p");

function bookCards(myLibrary) {
    for (; i < myLibrary.length; i++) {

        // card.style.listStyle = "none";
        // card.style.gridTemplateRows = "6rem 2rem 2rem";
        // card.style.padding = "0.001px";
        // card.style.borderRadius = "8px";
        // card.style.backgroundImage = "linear-gradient(to bottom right,rgb(21, 37, 3), rgb(41, 71, 6))";
        // card.style.boxShadow = "5px 5px 20px rgba(0, 0, 0, 0.622)";

        // card.style.minHeight = "24rem";
        // card.style.minWidth = "16rem";
        // card.style.width = "100%";
        // card.style.margin = "20px";

        // displayTitle.style.fontSize = "2.5rem";
        // displayTitle.style.alignItems = "center";
        // displayTitle.style.gridRow = "1 / 2";
        // displayTitle.style.padding = "2rem 2rem 0 2rem";
        // displayTitle.style.color = "rgb(222, 226, 217)";

        // const styles = {
        //     fontSize: "1.5rem",
        //     padding: "0.5rem 0 0.5rem 1rem",
        //     color: "rgb(222, 226, 217)"
        // }
        // Object.assign(displayAuthor.style, styles)
        // Object.assign(displayPages.style, styles)
        // Object.assign(displayRead.style, styles)
        // Object.assign(readStatus.style, styles)

        // displayAuthor.style.paddingTop = "2rem";
        // displayRead.style.paddingBottom = "7rem";
        // displayRead.style.border = "2px solid white";

        // section.appendChild(card);
        // cards[i].appendChild(displayAuthor);
        // cards[i].appendChild(displayPages);
        // cards[i].appendChild(displayRead);
        // cards[i].appendChild(displayTitle);
        // displayRead.appendChild(readStatus);

        // cardArray.forEach(element => {

            displayTitle.textContent = (myLibrary[i].title);
            displayAuthor.textContent = (myLibrary[i].author);
            displayPages.textContent = (myLibrary[i].pages);
            displayRead.textContent = (myLibrary[i].read);

            // j += 1;
        // });

    }
    return;
}

bookCards(myLibrary);

// displayRead.addEventListener('click', event=> {
//     read.style.color = "brown";
//     return;
// })



