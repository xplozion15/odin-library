let landingPageButtons = document.querySelectorAll(".landing-page-btn");
let landingSection = document.querySelector(".landing-section");
let body = document.querySelector("body");
let popUp = document.querySelector("#pop-up");
let navbar = document.querySelector(".navbar");
let closePopUpButton = document.querySelector("#close-pop-up-button");
let popUpSubmitButton = document.querySelector("#pop-up-submit-button");
let arrayIndexNo = 0;

let bookishLogo = document.querySelector("#bookish-logo");






bookishLogo.addEventListener("click",()=>{
    window.location.reload()
});










const myLibrary = [];





function createNewBook(title, author, noOfPages, noOfStars, isBookRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.noOfStars = noOfStars;
    this.isBookRead = isBookRead;

};



function addBookToLibrary() {
    // do stuff here

    let newObject = new createNewBook(title.value, author.value, pages.value, stars.value, read.value);
    myLibrary.push(newObject);


    let bookContainer = document.createElement("div");
    bookContainer.style.cssText = "width:80vw;margin:auto;";

    body.appendChild(bookContainer);


    myLibrary.forEach(book => {
        bookContainer.innerHTML = "";
        let createBookDiv = document.createElement("div");
        createBookDiv.classList.add("book-div");

        // arrayIndexNo = createBookDiv.dataset.indexNumber - 1;
        arrayIndexNo = myLibrary.length-1;
        
        createBookDiv.setAttribute("data-index-number", `${arrayIndexNo}`);



        let bookTitle = document.createElement('p');
        bookTitle.classList.add("book-title");
        let bookAuthor = document.createElement('p');
        let bookPages = document.createElement('p');
        let bookStars = document.createElement('p');

        let bookIsRead = document.createElement('button');
        bookIsRead.classList.add("book-isread-button");

        let deleteBook = document.createElement("button");
        deleteBook.classList.add("delete-book")

        let createButtonDiv = document.createElement("div");
        createButtonDiv.classList.add("button-div");





        bookContainer.appendChild(createBookDiv);

        createBookDiv.appendChild(bookTitle);
        createBookDiv.appendChild(bookAuthor);
        createBookDiv.appendChild(bookPages);
        createBookDiv.appendChild(bookStars);
        createBookDiv.appendChild(createButtonDiv);
        createButtonDiv.appendChild(bookIsRead);
        createButtonDiv.appendChild(deleteBook);



        bookTitle.textContent = title.value;
        bookAuthor.textContent = `by - ${author.value}`;
        bookPages.textContent = `${pages.value} Pages`;
        bookStars.textContent = `${stars.value}⭐`;
        bookIsRead.textContent = `READ`;
        deleteBook.textContent = "DELETE";

        bookTitle.style.cssText = "font-weight:800; font-size:25px;text-transform:uppercase;";



        deleteBook.addEventListener("click", () => {
            createBookDiv.remove();
            arrayIndexNo = Number(createBookDiv.dataset.indexNumber);
            // myLibrary.splice(arrayIndexNo, 1);
            myLibrary[arrayIndexNo] = null;
            



        })

      
        
        bookIsRead.addEventListener("click", () => {
            
            let parentContainer = bookIsRead.parentElement;
            let grandParentContainer = parentContainer.parentElement;
           

            if(myLibrary[grandParentContainer.dataset.indexNumber].isBookRead === "on"){

       
            myLibrary[grandParentContainer.dataset.indexNumber].isBookRead = "off";  
            bookIsRead.textContent = "NOT READ";  
            bookIsRead.style.backgroundColor = "blue";
            bookIsRead.style.border = "2px solid blue";  
        }
        else if (myLibrary[grandParentContainer.dataset.indexNumber].isBookRead === "off") {
            myLibrary[grandParentContainer.dataset.indexNumber].isBookRead = "on";
            bookIsRead.textContent = "READ";
            bookIsRead.style.backgroundColor = "green";
            bookIsRead.style.border = "2px solid green";         

        }
            
        })

     
    });


}










function removeLandingPageElements() {
    landingSection.remove();

}


function blurBodyOpacity() {
    landingSection.style.opacity = 0.1;
    navbar.style.opacity = 0.1;


}

function dontBlurBodyOpacity() {
    landingSection.style.opacity = 1;
    navbar.style.opacity = 1;


}

function displayPopUp() {
    popUp.style.cssText = "visibility: visible; background-color: white; color:black";
    navbar.style.opacity = 0.3;

}






landingPageButtons.forEach(button => {
    button.addEventListener("click", () => {
        blurBodyOpacity();
        displayPopUp();

    });
})


closePopUpButton.addEventListener("click", () => {
    popUp.style.visibility = "hidden";
    landingSection.style.opacity = 1;
    navbar.style.opacity = 1;
})



popUpSubmitButton.addEventListener("click", () => {

   
    removeLandingPageElements()


    dontBlurBodyOpacity();

    popUp.style.visibility = "hidden";

    addBookToLibrary();
    // event.preventDefault();


})



