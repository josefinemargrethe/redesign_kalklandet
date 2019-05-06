//let acc = document.getElementsByClassName("accordion");
//let i;
//let lastOpenAcc;
//
//
//for (i = 0; i < acc.length; i++) {
//    acc[i].addEventListener("click", function () {
//        this.classList.toggle("active");
//
//
//        var panel = this.nextElementSibling;
//        if (lastOpenAcc != undefined) {
//
//            console.log("er det den samme", panel == lastOpenAcc)
//
//            lastOpenAcc.style.maxHeight = null;
//
//        }
//
//        lastOpenAcc = panel;
//        if (panel.style.maxHeight) {
//            panel.style.maxHeight = null;
//        } else {
//            panel.style.maxHeight = panel.scrollHeight + "px";
//        }
//
//
//    });
//}


let lastOpen = "";
let itsAlreadyOpenFlag = false;
document.querySelectorAll(".accordion").forEach(each => {

    each.addEventListener("click", function () {
        //        console.log("hej", this);

        document.querySelectorAll(".accordion").forEach(eachAcc => {
            let eachPanel = eachAcc.nextElementSibling;
            //            console.log(eachPanel);
            eachPanel.style.maxHeight = null;





        })

        if (lastOpen == this) {

            lastOpen = "";

        } else {

            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
            lastOpen = this;
        }









    })

});
