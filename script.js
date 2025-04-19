// >> declare variables for the html elements
let formElement = document.getElementById("form");
const formVisible = document.getElementById("form-heading");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const pagesInput = document.getElementById("pages-input");
const readInput = document.getElementById("read-input");
const notReadInput = document.getElementById("not-read-input");
const submitButton = document.getElementById("submit-button");
const section = document.getElementById("section");
let sliderButtons = document.querySelectorAll("slider-btn")
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

// >> declare variables for book display
let card;
let displayTitle;
let displayAuthor;
let displayPages;
let displayRead;
let displayId;
const myLibrary = [];
let removeButton;
// let readStatus;

// >> declare styles
const styles = {
    fontSize: "1rem",
    padding: "0.2rem 0.5rem 0.2rem 0rem",
    margin : "auto",
    color: "rgb(222, 226, 217)",

}
const btnStyles = {
    backgroundColor : "rgb(207, 203, 203)",
    borderRadius : "0.6rem",
    border : "1px solid rgb(226, 223, 223)",
    padding : "0.3rem 0.3rem 0.3rem 1.5rem",
    width : "30%",
    color : "rgb(58, 57, 57)",    
    fontSize: "1rem",
    margin : "auto",
    padding: "auto",
    boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.622)"
}

let color1 = "linear-gradient(to bottom right,rgb(97, 103, 15), rgb(108, 110, 41))";

let color2 = "linear-gradient(to bottom right,rgb(133, 49, 53), rgb(179, 86, 90))";

const cardStyles = {
    listStyle: "none",
    color: "rgb(255, 255, 255)",
    display: "grid",
    gridTemplateRows: "10rem 2rem 2rem 2rem 2rem 2rem",
    // padding: "0.001px",
    borderRadius: "8px",
    backgroundImage: color1,
    // "linear-gradient(to bottom right,rgb(88, 91, 48), rgb(134, 135, 97))",
    boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.622)",
    minHeight: "24rem",
    minWidth: "16rem",
    width: "100%",
    margin: "20px"
}

const titleStyles = {
    fontSize: "2.7rem",
    alignItems: "center",
    gridRow: "1 / 2",
    padding: "3rem 1.8rem 1rem 1.8rem",
    color: "rgb(0, 0, 0)",
    margin: "auto"
}

formVisible.addEventListener("click", function(e) {
    
    submitButton.style.visibility = "visible";
    formElement.style.visibility = "visible";
})

function Book(title, author, pages, read, bookId) {
    this.title = title;
    this.author = author;
    this.pages = pages + " pages";
    this.read = read;
    this.bookId = crypto.randomUUID();
    return;
}

// function addBookToLibrary(title, author, pages, read, bookId) {
//     if (titleInput == null || titleInput == "") {
//         alert("Please enter the book title.");
//         return;
//     } else {
        // title.textContent = titleInput.value;
        // author.textContent = authorInput.value;
        // pages.textContent = pagesInput.value;
        // read.textContent = readInput.checked;
        // bookId = crypto.randomUUID();

        // titleInput.value = "";
        // authorInput.value = "";
        // pagesInput.value = "";
        // readInput.value = "";
    // }
    // let book = new Book(title, author, pages, read, bookId);
//     book = "";
//     return;
// };



submitButton.addEventListener("click", e => {
    e.preventDefault();
    
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked;
    const bookId = crypto.randomUUID();
    
    if(!title) {
        alert ("Please enter the book title.");
        formElement.reset();
        formElement.style.visibility = "hidden";
        submitButton.style.visibility = "hidden";
        return;
    }
    
    const newBook = new Book(title, author, pages, read, bookId)
    myLibrary.push(newBook);
    
    bookCards(myLibrary);
    
    alert("The form can not be submitted.");
    formElement.reset();
    formElement.style.visibility = "hidden";
    submitButton.style.visibility = "hidden";


});

// >> manually create books and add to library array
let book1 = new Book('The Hobbit', 'J. R. R. Tolkien', '295', 'not read');
let book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '281', 'read');
let book3 = new Book('The Count of Monte Cristo', 'Alexandre Dumas', '1312', 'not read');
let book4 = new Book('Great Expectations', 'Charles Dickens', '544', 'read');
let book5 = new Book('Crime and Punishment', 'Fyodor Dostoevsky', '320', 'not read');
let book6 = new Book(`One Flew Over the Cuckoo's Nest`, 'Ken Kesey', '527 pages', 'not read');
let book7 = new Book('Moby-Dick', 'Herman Melville', '635', 'not read');
let book8 = new Book('Catch-22', 'Joseph Heller', '453', 'not read');
let book9 = new Book('Frankenstein', 'Mary Shelley', '280', 'read');
let book10 = new Book('Macbeth', 'Mary Shakespeare', '200', 'not read');

myLibrary.push(book1, book2, book3, book4, book5, book6, book7, book8, book9, book10);

console.log(myLibrary);

let n = 0;
// let k = 0;

// nextBtn.addEventListener("click", event => {
    // k += 1;

    // for (j = 0; j < myLibrary.length; j++) {
        
        // displayTitle.textContent = (myLibrary[k].title);
        // displayAuthor.textContent = (myLibrary[k].author);
        // displayPages.textContent = (myLibrary[k].pages);
        // displayRead.textContent = (myLibrary[k].read);
        // displayId.textContent = (myLibrary[k].bookId);
        // console.log(k);
        
//     }
// });




function bookCards(myLibrary) {
    section.innerHTML = "";

    for (i = 0; i < myLibrary.length; i++) {
        const book  = myLibrary[i];
        
        card = document.createElement("ul");
                displayTitle = document.createElement("li");
        
                displayAuthor = document.createElement("li");
                displayPages = document.createElement("li");
                displayId = document.createElement("li");
                displayRead = document.createElement("button");
                removeButton = document.createElement("button");
                displayRead.className = "readBtn";
        
        
                Object.assign(card.style, cardStyles)
                Object.assign(displayTitle.style, titleStyles)
                Object.assign(displayAuthor.style, styles)
                Object.assign(displayPages.style, styles)
                Object.assign(displayRead.style, btnStyles)
                Object.assign(displayId.style, styles)
                Object.assign(removeButton.style, btnStyles)
                displayAuthor.style.fontSize = "1.5rem";
        
                section.appendChild(card);
        

        card.appendChild(displayTitle);
        card.appendChild(displayAuthor);
        card.appendChild(displayPages);
        card.appendChild(displayId);
        card.appendChild(displayRead);
        card.appendChild(removeButton);
        

        displayTitle.textContent = book.title;
        displayAuthor.textContent = book.author;
        displayPages.textContent = book.pages;
        displayRead.textContent = book.read;
        displayId.textContent = "Id : " + (book.bookId);
        removeButton.textContent = "remove";
        removeButton.dataset.index = i;

        removeButton.addEventListener("click", removeBookFromLibrary);
    }
    
}

function removeBookFromLibrary(e) {
    const indexToRemoveBook = e.target.dataset.index;
    myLibrary.splice(indexToRemoveBook, 1);
    bookCards(myLibrary);
}

// console.log(displayTitleG.textContent);

bookCards(myLibrary);

// let remBk = "Yes";


// removeBook.forEach(item => {
    
//     item.addEventListener('click', event=> {
//         let remBk = prompt("Do you want to delete this book?", "Yes");
        
//         if (remBk == null || remBk == "") {
//             alert("You have cancelled this request.");
//         } else {
//             alert("It will be deleted by a new function to be created");
//         }
        
//     })
    
// });

// displayRead.addEventListener('click', event=> {
//     read.style.color = "brown";
//     return;
// })



