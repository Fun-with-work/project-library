// >> declare variables for the html elements
let formElement = document.getElementById("form");
const addBookBtn = document.getElementById("form-heading");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const pagesInput = document.getElementById("pages-input");
const readInput = document.getElementById("read-input");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const hideButton = document.getElementById("hide-button");
const searchTitle = document.getElementById("search");
const searchButton = document.getElementById("search-button");
const displayResult = document.getElementById("display-result");
const section = document.getElementById("section");
let sliderButtons = document.querySelectorAll("slider-btn")
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

const myLibraryBooks = [];

let color1 = "linear-gradient(to bottom right,rgb(97, 103, 15), rgb(108, 110, 41))";

let color2 = "linear-gradient(to bottom right,rgb(133, 49, 53), rgb(179, 86, 90))";

let color3 = "linear-gradient(to bottom right,rgb(33, 105, 124), rgb(61, 136, 157))";

let color4 = "linear-gradient(to bottom right,rgb(187, 144, 5), rgb(201, 156, 6))";

const colorArray = [];
colorArray.push(color1, color2, color3, color4);
let currentColorIndex = 0;

function getNewColor() {
    if (currentColorIndex >= colorArray.length) {
        currentColorIndex = 0;
        const color = colorArray[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1);
        return color;

    } else {
        const color = colorArray[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1);
        return color;
    }
}

// >> declare styles
const bookElementStyles = {
    fontSize: "1rem",
    padding: "0.2rem 0.5rem 0.2rem 0rem",
    margin: "auto",
    color: "rgb(222, 226, 217)",
}

const btnStyles = {
    backgroundColor: "rgb(207, 203, 203)",
    borderRadius: "0.6rem",
    border: "1px solid rgb(226, 223, 223)",
    padding: "0.3rem 0.3rem 0.3rem 1.5rem",
    width: "30%",
    color: "rgb(58, 57, 57)",
    fontSize: "1rem",
    margin: "auto",
    padding: "auto",
    boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.622)"
}

const titleStyles = {
    fontSize: "2.7rem",
    alignItems: "center",
    gridRow: "1 / 2",
    padding: "3rem 1.8rem 1rem 1.8rem",
    color: "rgb(0, 0, 0)",
    margin: "auto"
}

addBookBtn.addEventListener("click", function (e) {
    submitButton.style.visibility = "visible";
    resetButton.style.visibility = "visible";
    hideButton.style.visibility = "visible";
    formElement.style.visibility = "visible";
})

function Book(title, author, pages, read, bookId) {
    this.title = title.toUpperCase();
    this.author = author;
    this.pages = pages + " pages";
    this.read = read;
    this.bookId = crypto.randomUUID();
    return;
}

resetButton.addEventListener("click", e => {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = "";
})

hideButton.addEventListener("click", e => {
    formElement.reset();
    formElement.style.visibility = "hidden";
    submitButton.style.visibility = "hidden";
    resetButton.style.visibility = "hidden";
    hideButton.style.visibility = "hidden";
    return;    
})

submitButton.addEventListener("click", e => {
    e.preventDefault();

    const title = titleInput.value.toUpperCase();
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked;
    const bookId = crypto.randomUUID();

    if (!title) {
        alert("Please enter the book title.");
        formElement.reset();
        formElement.style.visibility = "hidden";
        submitButton.style.visibility = "hidden";
        resetButton.style.visibility = "hidden";
        hideButton.style.visibility = "hidden";
        return;
    }

    const newBook = new Book(title, author, pages, read, bookId)
    myLibraryBooks.push(newBook);

    updateSlider(myLibraryBooks);

    alert("The form can not be submitted.");
    formElement.reset();
    formElement.style.visibility = "hidden";
    submitButton.style.visibility = "hidden";
    resetButton.style.visibility = "hidden";
    hideButton.style.visibility = "hidden";
});

searchButton.addEventListener("click", function (e) {
    displayResult.innerHTML = "";

    let searchTitleUpperCase = searchTitle.value.toUpperCase();

    searchTitle.value = "";
    const findBook = myLibraryBooks.find(item => item.title === searchTitleUpperCase);

    if (findBook) {
        const bookDetails = Object.entries(findBook);
        bookDetails.forEach(([key, value]) => {
            const detailElement = document.createElement("p");
            detailElement.textContent = `${key}: ${value}`;
            displayResult.appendChild(detailElement);
            detailElement.style.padding = "0.6rem";
        });
        displayResult.style.visibility = "visible";

    } else {
        displayResult.textContent = " Book not found";
        displayResult.style.visibility = "visible";
    }
})

// >> manually create books and add to library array
let book1 = new Book('The Hobbit', 'J. R. R. Tolkien', '295', 'not read');
let book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '281', 'read');
let book3 = new Book('The Count of Monte Cristo', 'Alexandre Dumas', '1312', 'not read');
let book4 = new Book('Great Expectations', 'Charles Dickens', '544', 'read');
let book5 = new Book('Crime and Punishment', 'Fyodor Dostoevsky', '320', 'not read');
let book6 = new Book(`One Flew Over the Cuckoo's Nest`, 'Ken Kesey', '527 pages', 'not read');
let book7 = new Book('Moby Dick', 'Herman Melville', '635', 'not read');
let book8 = new Book('Catch 22', 'Joseph Heller', '453', 'not read');
let book9 = new Book('Frankenstein', 'Mary Shelley', '280', 'read');
let book10 = new Book('Macbeth', 'Mary Shakespeare', '200', 'not read');

myLibraryBooks.push(book1, book2, book3, book4, book5, book6, book7, book8, book9, book10);

console.log(myLibraryBooks);

let bookIndex = 0;
const booksPerPage = 4;

function updateSlider() {
    section.innerHTML = "";
    for (let i = 0; i <= booksPerPage; i++) {
        const index = (bookIndex + i) % myLibraryBooks.length;
        const book = myLibraryBooks[index];
        if (book) {
            const card = document.createElement("ul");
            const displayTitle = document.createElement("li");
            const displayAuthor = document.createElement("li");
            const displayPages = document.createElement("li");
            const displayId = document.createElement("li");
            const displayReadButton = document.createElement("button");
            const removeButton = document.createElement("button");
            displayReadButton.className = "readBtn";

            const backgroundColor = getNewColor();

            Object.assign(card.style, {
                listStyle: "none",
                color: "rgb(255, 255, 255)",
                display: "grid",
                gridTemplateRows: "10rem 2rem 2rem 2rem 2rem 2rem",
                borderRadius: "6px",
                backgroundImage: backgroundColor,
                boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.622)",
                minHeight: "24rem",
                minWidth: "16rem",
                width: "100%",
                margin: "20px"
            });

            Object.assign(displayTitle.style, titleStyles)
            Object.assign(displayAuthor.style, bookElementStyles)
            Object.assign(displayPages.style, bookElementStyles)
            Object.assign(displayReadButton.style, btnStyles)
            Object.assign(displayId.style, bookElementStyles)
            Object.assign(removeButton.style, btnStyles)
            displayAuthor.style.fontSize = "1.5rem";
            section.appendChild(card);

            card.appendChild(displayTitle);
            card.appendChild(displayAuthor);
            card.appendChild(displayPages);
            card.appendChild(displayId);
            card.appendChild(displayReadButton);
            card.appendChild(removeButton);

            displayTitle.textContent = book.title;
            displayAuthor.textContent = "by " + book.author;
            displayPages.textContent = book.pages;
            displayReadButton.textContent = book.read ? "read" : "not read";
            displayId.textContent = "Id : " + (book.bookId);
            removeButton.textContent = "remove";
            removeButton.dataset.index =index;
            displayReadButton.dataset.index = index;

            removeButton.addEventListener("click", removeBookFromLibrary);

            displayReadButton.addEventListener("click", changeReadStatus);
        }
    }
}

prevBtn.addEventListener("click", () => {
    bookIndex = (bookIndex - booksPerPage + myLibraryBooks.length) % myLibraryBooks.length;
    updateSlider();
});

nextBtn.addEventListener("click", () => {
    bookIndex = (bookIndex + booksPerPage) % myLibraryBooks.length;
    updateSlider();
});

function removeBookFromLibrary(e) {
    const indexToRemoveBook = parseInt(e.target.dataset.index);
    myLibraryBooks.splice(indexToRemoveBook, 1);
    currentColorIndex = 0;
    if (indexToRemoveBook < bookIndex && myLibraryBooks.length > 0) {
        bookIndex--;
    } else if (bookIndex >= myLibraryBooks.length) {
        bookIndex = Math.max (0, myLibraryBooks.length - booksPerPage);
    }

    updateSlider(myLibraryBooks);
}

function changeReadStatus(e) {
    const toggleReadIndex = parseInt (e.target.dataset.index);
    if (myLibraryBooks[toggleReadIndex]) {
        myLibraryBooks[toggleReadIndex].read = !myLibraryBooks[toggleReadIndex].read;
        currentColorIndex = 0;
        updateSlider(myLibraryBooks);
    }
}

updateSlider(myLibraryBooks);





