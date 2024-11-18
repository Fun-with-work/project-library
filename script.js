const form = document.getElementById("form");



const myLibrary = [];

function Book(title, author, pages, read, like) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.like = like;
    this.info = function() {
        return(this.title +" by " + this.author + ", " + this.pages + ", " + this.read +", " + this.like + ".")
    }
}

const book1 = new Book ('The Hobbit', "J. R. R. Tolkien", '295 pages', 'not read yet', 'no rating');

// function addBookToLibrary() {

// }




// console.log (book1.info());