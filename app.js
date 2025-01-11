// dom elements
let landingPageButtons = document.querySelectorAll(".landing-page-btn");
let landingSection = document.querySelector(".landing-section");
let body = document.querySelector("body");
let popUp = document.querySelector("#pop-up");
let navbar = document.querySelector(".navbar");
let closePopUpButton = document.querySelector("#close-pop-up-button");
let popUpSubmitButton = document.querySelector("#pop-up-submit-button");
let bookishLogo = document.querySelector("#bookish-logo");
let form = document.querySelector("#form");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const starsInput = document.querySelector("#stars");
const readInput = document.querySelector("#read");
const submitButton = document.querySelector("#pop-up-submit-button");

// variable that store or track values
const myLibrary = [];
let arrayIndexNo = 0;

// event listeners
bookishLogo.addEventListener("click", () => {
  window.location.reload();
});

landingPageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayPopUp();
  });
});

closePopUpButton.addEventListener("click", () => {
  popUp.style.visibility = "hidden";
});

titleInput.addEventListener("input", () => {
  titleInput.setCustomValidity("");
  if (titleInput.checkValidity()) {
    return;
  }

  if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity(":) Please enter a title.");
  } else if (titleInput.validity.tooShort) {
    titleInput.setCustomValidity("pls pls enter  3 or more characters");
  } else if (titleInput.validity.tooLong) {
    titleInput.setCustomValidity("pls pls enter less than 25 characters");
  }
});

authorInput.addEventListener("input", () => {
  authorInput.setCustomValidity("");

  if (authorInput.checkValidity()) {
    return;
  }

  if (authorInput.validity.tooShort) {
    authorInput.setCustomValidity("pls pls enter  3 or more characters");
  } else if (authorInput.validity.tooLong) {
    authorInput.setCustomValidity("pls pls enter less than 25 characters");
  }
});

pagesInput.addEventListener("input", () => {
  pagesInput.setCustomValidity("");
  if (pagesInput.checkValidity()) {
    return;
  }

  if (pagesInput.validity.rangeUnderflow) {
    pagesInput.setCustomValidity("pls pls enter a bigger number than 0");
  } else if (pagesInput.validity.rangeOverflow) {
    pagesInput.setCustomValidity("pls pls enter a smaller number than 10000");
  }
});

starsInput.addEventListener("input", () => {
  starsInput.setCustomValidity("");
  if (starsInput.checkValidity()) {
    return;
  }

  if (starsInput.validity.rangeUnderflow) {
    starsInput.setCustomValidity("pls pls enter a bigger number than 0");
  } else if (starsInput.validity.rangeOverflow) {
    starsInput.setCustomValidity("pls pls enter a smaller number than 5");
  }
});

form.addEventListener("submit", (event) => {
  // Prevent default form submission
  event.preventDefault();
  removeLandingPageElements();
  popUp.style.visibility = "hidden";
  addBookToLibrary();
});

// class for creating book

class CreateNewBook {
  constructor(title, author, noOfPages, noOfStars, isBookRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.noOfStars = noOfStars;
    this.isBookRead = isBookRead;
  }
}

function addBookToLibrary() {
  let newObject = new CreateNewBook(
    title.value,
    author.value,
    pages.value,
    stars.value,
    read.checked ? "on" : "off"
  );
  myLibrary.push(newObject);

  let bookContainer = document.createElement("div");
  bookContainer.style.cssText = "width:80vw;margin:auto;";

  body.appendChild(bookContainer);

  myLibrary.forEach((book) => {
    bookContainer.innerHTML = "";
    let createBookDiv = document.createElement("div");
    createBookDiv.classList.add("book-div");

    arrayIndexNo = myLibrary.length - 1;

    createBookDiv.setAttribute("data-index-number", `${arrayIndexNo}`);

    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookPages = document.createElement("p");
    let bookStars = document.createElement("p");
    let bookIsRead = document.createElement("button");
    let deleteBook = document.createElement("button");
    let createButtonDiv = document.createElement("div");

    bookTitle.classList.add("book-title");
    bookIsRead.classList.add("book-isread-button");
    deleteBook.classList.add("delete-book");
    createButtonDiv.classList.add("button-div");

    bookContainer.appendChild(createBookDiv);
    createBookDiv.append(
      bookTitle,
      bookAuthor,
      bookPages,
      bookStars,
      createButtonDiv
    );
    createButtonDiv.append(bookIsRead, deleteBook);

    bookTitle.textContent = title.value;
    bookAuthor.textContent = `by - ${author.value}`;
    bookPages.textContent = `${pages.value} Pages`;
    bookStars.textContent = `${stars.value}⭐`;

    bookIsRead.textContent = read.checked ? "READ" : "NOT READ";
    bookIsRead.style.backgroundColor = read.checked ? "green" : "blue";
    bookIsRead.style.border = read.checked
      ? "2px solid green"
      : "2px solid blue";

    deleteBook.textContent = "DELETE";

    deleteBook.addEventListener("click", () => {
      createBookDiv.remove();
      arrayIndexNo = Number(createBookDiv.dataset.indexNumber);
      myLibrary[arrayIndexNo] = null;
    });

    bookIsRead.addEventListener("click", () => {
      let parentContainer = bookIsRead.parentElement;
      let grandParentContainer = parentContainer.parentElement;

      if (
        myLibrary[grandParentContainer.dataset.indexNumber].isBookRead === "on"
      ) {
        myLibrary[grandParentContainer.dataset.indexNumber].isBookRead = "off";
        bookIsRead.textContent = "NOT READ";
        bookIsRead.style.backgroundColor = "blue";
        bookIsRead.style.border = "2px solid blue";
      } else if (
        myLibrary[grandParentContainer.dataset.indexNumber].isBookRead === "off"
      ) {
        myLibrary[grandParentContainer.dataset.indexNumber].isBookRead = "on";
        bookIsRead.textContent = "READ";
        bookIsRead.style.backgroundColor = "green";
        bookIsRead.style.border = "2px solid green";
      }
    });
  });
}

function removeLandingPageElements() {
  landingSection.remove();
}

function displayPopUp() {
  popUp.style.cssText =
    "visibility: visible; background-color: white; color:black";
}
