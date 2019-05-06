let info;
let acc = document.getElementsByClassName("accordion");
let i;


document.addEventListener("DOMContentLoaded", visTure);


function visTure() {



}




for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "arotate" class
        to arrows */

        //                this.lastElementChild.classList.toggle("rotate");


        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });

    console.log("readaccordion");


}
