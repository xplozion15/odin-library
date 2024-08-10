let landingPageButtons = document.querySelectorAll(".landing-page-btn");
let landingSection = document.querySelector(".landing-section");
let body = document.querySelector("body");
let popUp = document.querySelector("#pop-up");
let navbar = document.querySelector(".navbar");
let closePopUpButton = document.querySelector("#close-pop-up-button");





function blurBodyOpacity() {
    landingSection.style.opacity = 0.1;
    navbar.style.opacity = 0.1;
    
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