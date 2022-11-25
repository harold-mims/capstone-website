/*
    This Function will open and close the navigation menu when the user clicks the hamburger icon
*/
function toggleNavMenu() {
    var arg = document.getElementById("nav-menu-responsive");
    if (arg.className === "header-nav") {
        arg.className += " nav-menu";
    } else {
        arg.className = "header-nav";
    }
}

/* Loops through and adds an event handler to any of the gallery photos so that they can be displayed properly */
var elements = document.getElementsByClassName("gallery-item-wrapper");
for (var i = 0; i < elements.length; i++) {

    elements[i].addEventListener("click", function () {
        checkIfElementIsDisplayed(this.parentElement)
        checkIfElementIsDisplayed(this)

        var children = this.children;

        for (var j = 0; j < children.length; j++) {
            checkIfElementIsDisplayed(children[j])
        }
    }, true);

}


/* Loops through and adds an event handler to any of the gallery photos so that they can be displayed properly */
var elements = document.getElementsByClassName("modal-thumbnail");
for (var i = 0; i < elements.length; i++) {

    elements[i].addEventListener("click", function () {
        checkIfModalIsDisplayed(this.nextElementSibling.nextElementSibling)
    }, true);

}

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


function checkIfElementIsDisplayed(divToCheck) {
    if (divToCheck.className.includes("displayed")) {
        divToCheck.className = divToCheck.className.replace("displayed", "");
    } else {
        divToCheck.className += " displayed";
    }
}

function checkIfModalIsDisplayed(divToCheck) {
    if (divToCheck.className.includes("modal-displayed")) {
        divToCheck.className = divToCheck.className.replace("modal-displayed", "");
    } else {
        divToCheck.className += " modal-displayed";
    }
}


/*
    This function is used so that whenever the user clicks on one of the thumbnails in the 
    photo gallery it will assign a new class to the wrapper, growing the photo and displaying
    the description
    */

function displayPhoto(photoToUpdate) {
    /*
    var arg = document.getElementsByClassName("gallery-text");
    if (arg.className === "gallery-text") {
        arg.className += " displayed";
    } else {
        arg.className = "gallery-text";
    }*/



}



