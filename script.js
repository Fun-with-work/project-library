const form = document.getElementById("form");
const title = document.getElementById ("title");
const author = document.getElementById ("author");
const pages = document.getElementById ("pages");
const bookRead = document.getElementById ("book-read");


const myLibrary = [];

function Book(title, author, pages, read, like) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return(this.title +" by " + this.author + ", " + this.pages + ", " + this.read +", " + this.like + ".")
    }
}

const book1 = new Book ('The Hobbit', "J. R. R. Tolkien", '295 pages', 'not read yet', 'no rating');

// function addBookToLibrary() {

// }




// console.log (book1.info());