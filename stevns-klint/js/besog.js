    let info;


    document.addEventListener("DOMContentLoaded", hentJson);
    document.addEventListener("DOMContentLoaded", hentJson2);




    function openNav() {
        document.getElementById("myNav").style.height = "100%";
        document.getElementById("mobile_nav").classList.add("hide");

        document.querySelector('body').style.overflow = 'hidden'




    }

    function closeNav() {
        document.getElementById("myNav").style.height = "0%";
        document.getElementById("mobile_nav").classList.remove("hide");

        document.querySelector('body').style.overflow = 'scroll'

    }









    async function hentJson() {
        const url = "http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/museums_information/237";

        //ID 210 er museumsinformation for geomuseum faxe
        //ID 234 Stevnsfort
        //ID 237 Stevns Klint
        //wordpress har standard visning på 10 posts per side, det kan du ændre her foroven.

        const myJson = await fetch(url);

        info = await myJson.json();


        visInfo();
        showFooter();

    }

    async function hentJson2() {

        let url = "http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/guidet_tur_stevns";
        let jsonData = await fetch(url);
        ture = await jsonData.json();

        visTure();

        console.log("getjson2");

    }

    function visTure() {


        let stevGuide1 = ture.find(stevGuide1 => stevGuide1.id == 262);



        console.log("visTure");
        //            Guidet ture her:
        document.querySelector(".kultur").innerHTML = stevGuide1.content.rendered;

        //            Guidet ture her:
        document.querySelector(".deskultur").innerHTML = stevGuide1.content.rendered;

    }








    function visInfo() {

        //            adresse her:
        document.querySelector("#adrdiv").innerHTML = info.adresse;





        //          find vej her:
        document.querySelector(".cykel").innerHTML = info.cykel;
        document.querySelector(".bil").innerHTML = info.bil;
        document.querySelector(".dot").innerHTML = info.dot;

        //        DESKTOP  transport her:
        document.querySelector(".deskcykel").innerHTML = info.cykel;
        document.querySelector(".deskbil").innerHTML = info.bil;
        document.querySelector(".deskdot").innerHTML = info.dot;


    }


    //Transport JS


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



    //Guide JS

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



    function showFooter() {




        // footer_stuff

        document.querySelector(".phone").innerHTML = "+45" + " " +
            info.telefon_nr;

        document.querySelector(".phone_times").innerHTML = info.telefontider;

        document.getElementById("myAnchor").href = "mailto:" + info.mail;

        document.getElementById("facebookAnchor").href = info.facebook;

        document.getElementById("instagramAnchor").href = info.instagram;



        console.log("showing info");


    }
