let info;



document.addEventListener("DOMContentLoaded", hentJson);
document.addEventListener("DOMContentLoaded", hentJson2);





async function hentJson() {
    const url = "http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/museums_information/210";

    //ID 210 er museumsinformation for geomuseum faxe
    //ID 234 Stevnsfort
    //ID 237 Stevns Klint
    //wordpress har standard visning på 10 posts per side, det kan du ændre her foroven.

    const myJson = await fetch(url);

    info = await myJson.json();


    visInfo();

}


async function hentJson2() {

    let url = "http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/guidet_tur_geomuseum";
    let jsonData = await fetch(url);
    ture = await jsonData.json();

    visTure();

    console.log("getjson2");

}

function visTure() {


    let geoGuide1 = ture.find(geoGuide1 => geoGuide1.id == 235);
    let geoGuide2 = ture.find(geoGuide2 => geoGuide2.id == 236);
    let geoGuide3 = ture.find(geoGuide3 => geoGuide3.id == 238);


    console.log("visTure");
    //            Guidet ture her:
    document.querySelector(".fossiljagt").innerHTML = geoGuide1.content.rendered;
    document.querySelector(".kalkrige").innerHTML = geoGuide2.content.rendered;
    document.querySelector(".prisme").innerHTML = geoGuide3.content.rendered;






    document.querySelector(".deskfossiljagt").innerHTML = geoGuide1.content.rendered;
    document.querySelector(".deskkalkrige").innerHTML = geoGuide2.content.rendered;
    document.querySelector(".deskprisme").innerHTML = geoGuide3.content.rendered;
}






//document.querySelectorAll(".accordion").forEach(each => {
//
//    each.addEventListener("click", function () {
//        console.log("hej", this.nextElementSibling);
//
//        document.querySelectorAll(".accordion").forEach(eachAcc => {
//            let eachPanel = eachAcc.nextElementSibling;
//            //            console.log(eachPanel);
//            eachPanel.style.display = "none";
//            //        this.nextElementSibling.style.display = "block";
//            this.nextElementSibling.style.maxHeight = scrollHeight + "px";
//
//
//        })
//
//
//
//    })
//
//});



function visInfo() {

    //            adresse her:
    document.querySelector("#adrdiv").innerHTML = info.adresse;



    //            åbningstider her:

    document.querySelector(".forar").innerHTML = `${info.forrssson_bningstid} - ${info.forrssson_lukketid}`;
    document.querySelector(".sommer").innerHTML = `${info.sommersson_bningstid} - ${info.sommersson_lukketid}`;
    document.querySelector(".efterar").innerHTML = `${info.efterrssson_bningstid} - ${info.efterrssson_lukketid}`;
    document.querySelector(".saerlige").innerHTML = `<b>Vinterferie:</b> ${info.vinterferie_bningstid} - ${info.vinterferie_lukketid} <br> <b>Efterårsferie:</b> ${info.efteraarsferie_bningstid} - ${info.efteraarsferie_lukketid}`;


    //          transport her:
    document.querySelector(".cykel").innerHTML = info.cykel;
    document.querySelector(".bil").innerHTML = info.bil;
    document.querySelector(".dot").innerHTML = info.dot;




    // priser:

    document.querySelector(".voksen").innerHTML = `${info.voksen}kr`;
    document.querySelector(".studpen").innerHTML = `<b>Pensionister:</b>${info.retired}kr <br> <b>Studerende:</b>${info.students}kr`;
    document.querySelector(".born").innerHTML = `${info.children}`;
    document.querySelector(".aarskort").innerHTML = `${info.yearly_price}kr`;





    //         desktop transport her:
    document.querySelector(".deskcykel").innerHTML = info.cykel;
    document.querySelector(".deskbil").innerHTML = info.bil;
    document.querySelector(".deskdot").innerHTML = info.dot;




    //  desktop priser:

    document.querySelector(".deskvoksen").innerHTML = `${info.voksen}kr`;
    document.querySelector(".deskstudpen").innerHTML = `<b>Pensionister:</b>${info.retired}kr <br> <b>Studerende:</b>${info.students}kr`;
    document.querySelector(".deskborn").innerHTML = `${info.children}`;
    document.querySelector(".deskaarskort").innerHTML = `${info.yearly_price}kr`;







}







function openOptionTransport(evt, optionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(optionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen1").click();


//PRISER JS

function openOptionPrices(evt, optionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(optionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();



//Guide   JS

function openOptionGuide(evt, optionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent3");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink3");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(optionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen3").click();
