/*
    This Function will open and close the navigation menu when the user clicks the hamburger icon
*/

document.getElementById("navbutton").addEventListener('click', function(event) {
    var arg = document.getElementById("nav-menu-responsive");
    if (arg.className === "header-nav") {
        arg.className += " nav-menu";
    } else {
        arg.className = "header-nav";
    }
  });

/*
function toggleNavMenu() {
    var arg = document.getElementById("nav-menu-responsive");
    if (arg.className === "header-nav") {
        arg.className += " nav-menu";
    } else {
        arg.className = "header-nav";
    }
}*/

/* Loops through and adds an event handler to any of the gallery photos so that they can be displayed properly */
var elements = document.getElementsByClassName("modal-thumbnail");
for (var i = 0; i < elements.length; i++) {

    elements[i].addEventListener("click", function () {
        checkIfModalIsDisplayed(this.nextElementSibling.nextElementSibling)
    }, true);

}

/* Adds an event handler on the rest of the document in order to detect a click outside the object */
let modalImages = document.querySelectorAll(".modal-image");
document.addEventListener("click", function (event) {
    console.log("click event on document");
    console.log(event.target)
    if ((!event.target.closest(".modal-image") && !event.target.closest(".modal-thumbnail"))) {
        for (var i = 0; i < modalImages.length; i++) {
            console.log("Clicked outside of the image");
            
            if (modalImages[i].parentElement.className.includes("modal-displayed")) {
                modalImages[i].parentElement.className = modalImages[i].parentElement.className.replace("modal-displayed", "");
            }
        }
    }

});

function checkIfModalIsDisplayed(divToCheck) {
    if (divToCheck.className.includes("modal-displayed")) {
        divToCheck.className = divToCheck.className.replace("modal-displayed", "");
    } else {
        divToCheck.className += " modal-displayed";
    }
}
