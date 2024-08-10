let landingPageButtons = document.querySelectorAll(".landing-page-btn");
let landingSection = document.querySelector(".landing-section");
let body = document.querySelector("body");
let popUp = document.querySelector("#pop-up");
let navbar = document.querySelector(".navbar");
let closePopUpButton = document.querySelector("#close-pop-up-button");
let popUpSubmitButton = document.querySelector("#pop-up-submit-button");
// let bookContainer;


const myLibrary = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        noOfPages: 281,
        noOfStars: 5,
        isBookRead: true
    },
    {
        title: "1984",
        author: "George Orwell",
        noOfPages: 328,
        noOfStars: 4,
        isBookRead: false
    },]



function createNewBook(title, author, noOfPages,noOfStars,isBookRead) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.noOfStars = noOfStars;
    this.isBookRead = isBookRead;
   
};


function addBookToLibrary() {
    // do stuff here
    myLibrary.forEach(book => {
        
        
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
    button.addEventListener("click", ()=>{
        blurBodyOpacity();
        displayPopUp();

    });
})


closePopUpButton.addEventListener("click", ()=> {
    popUp.style.visibility = "hidden";
    landingSection.style.opacity = 1;
    navbar.style.opacity = 1;
})



popUpSubmitButton.addEventListener("click", ()=> {
    event.preventDefault();
    removeLandingPageElements()
    addBookToLibrary();
    popUp.style.visibility = "hidden";
    dontBlurBodyOpacity();

    let bookContainer = document.createElement("div");
    bookContainer.style.cssText = "width:80vw; height:80vh; border:2px solid black; background-color:skyblue; margin:auto;";
    
    body.appendChild(bookContainer); 
    


    
})



