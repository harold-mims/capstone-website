document.getElementById("navbutton").addEventListener("click",function(e){var a=document.getElementById("nav-menu-responsive");a.className==="header-nav"?a.className+=" nav-menu":a.className="header-nav"});var t=document.getElementsByClassName("modal-thumbnail");for(var n=0;n<t.length;n++)t[n].addEventListener("click",function(){s(this.nextElementSibling.nextElementSibling)},!0);let l=document.querySelectorAll(".modal-image");document.addEventListener("click",function(e){if(console.log("click event on document"),console.log(e.target),!e.target.closest(".modal-image")&&!e.target.closest(".modal-thumbnail"))for(var a=0;a<l.length;a++)console.log("Clicked outside of the image"),l[a].parentElement.className.includes("modal-displayed")&&(l[a].parentElement.className=l[a].parentElement.className.replace("modal-displayed",""))});function s(e){e.className.includes("modal-displayed")?e.className=e.className.replace("modal-displayed",""):e.className+=" modal-displayed"}