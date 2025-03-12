const form = document.getElementById("form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("book-read");
const submitButton = document.getElementById("submit-button");

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

myLibrary.push(book1, book2, book3, book4, book5);
console.log(myLibrary);

//  oooooooo fix below this oooooooo

function bookCards(myLibrary) {
    for (j = 1; j <= myLibrary.length; j++) {
        bookCard = document.createElement("div");
        displayTitle = document.createElement("p");
        displayAuthor = document.createElement("p");
        displayPages = document.createElement("p");
        displayRead = document.createElement("p");      
        
        bookCard.style.color = "rgb(112, 29, 29)";
        bookCard.style.display = "grid";
        bookCard.style.gridTemplateRows = "6rem 2rem 2rem 2rem";
        bookCard.style.padding = "20px";
        bookCard.style.backgroundColor = "rgb(127, 105, 93, 0.844)";
        bookCard.style.height = "18rem";
        bookCard.style.width = "10rem";
        bookCard.style.boxShadow = "5px 5px 20px rgba(0, 0, 0, 0.622)";
        bookCard.style.height = "100%";
        
        displayTitle.style.fontSize = "1.6rem";
        displayTitle.style.alignItems = "center";
        displayTitle.style.gridRow = "1 / 2";
        displayTitle.style.padding = "1rem";
        
        const styles = {
            fontSize: "1.3rem",
            padding: "1rem 0 1rem 0",
            color: "rgb(28, 27, 27)"
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

    }
    return;
}

// function bookPageDisplay(displayTitle, displayAuthor, displayPages, displayRead) {
//     for (let i = 0; i <= myLibrary.length; i++) {
//     } return;
// }

bookCards(myLibrary);

// bookPageDisplay(displayTitle, displayAuthor, displayPages, displayRead);

