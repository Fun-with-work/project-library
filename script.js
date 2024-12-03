const form = document.getElementById("form");
const title = document.getElementById ("title");
const author = document.getElementById ("author");
const pages = document.getElementById ("pages");
const read = document.getElementById ("book-read");
const submitButton = document.getElementById("submit-button");
const bookDisplay = document.getElementsByClassName("book-display");

let id;

let displayTitle = document.getElementsByClassName("display-title");
let displayAuthor = document.getElementsByClassName("display-author");
let displayPages = document.getElementsByClassName("display-pages");
let displayRead = document.getElementsByClassName("display-read");

const displayOne = document.getElementsByClassName("One");
const displayTwo = document.getElementsByClassName("two");
const displayThree = document.getElementsByClassName("three");
const displayFour = document.getElementsByClassName("four");
const displayFive = document.getElementsByClassName("five");



const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new Book ('The Hobbit', "J. R. R. Tolkien", '295 pages', 'not read yet');

const book2 = new Book ('To Kill a Mockingbird', 'Harper Lee', '281','not read yet');

const book3 = new Book ('The Count of Monte Cristo', 'Alexandre Dumas', '1312 pages', 'not read yet');

const book4 = new Book ('Great Expectations', 'Charles Dickens', '544 pages', 'not read yet');

const book5 = new Book ('Crime and Punishment', 'Fyodor Dostoevsky', '527 pages', 'not read yet');


myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);

console.log(myLibrary);


displayTitle[0].textContent = (myLibrary[0].title);
displayAuthor[0].textContent = (myLibrary[0].author);
displayPages[0].textContent = (myLibrary[0].pages);

displayTitle[1].textContent = (myLibrary[1].title);
displayAuthor[1].textContent = (myLibrary[1].author);
displayPages[1].textContent = (myLibrary[1].pages);

displayTitle[2].textContent = (myLibrary[2].title);
displayAuthor[2].textContent = (myLibrary[2].author);
displayPages[2].textContent = (myLibrary[2].pages);

displayTitle[3].textContent = (myLibrary[3].title);
displayAuthor[3].textContent = (myLibrary[3].author);
displayPages[3].textContent = (myLibrary[3].pages);

displayTitle[4].textContent = (myLibrary[4].title);
displayAuthor[4].textContent = (myLibrary[4].author);
displayPages[4].textContent = (myLibrary[4].pages);

// console.log(displayTitle[0].textContent);


function addBookToLibrary() {
    
    
}


// function validateForm () {
//     if (author.value == "" || author.value == null) {
//         console.log("Author's name must be filled out");
//         return false;
//     }
// }



// submitButton.addEventListener ("click", event => {
//     if (title == null || title == "") {
//         alert("please enter a Title!");
//     }
//     else if (author == null || title == "") {
//         alert("please enter the name of the Author!!");
//     }

//     else {
//         addBookToLibrary();
//     }
// })









// console.log (book1.info());