let footer_data;


document.addEventListener("DOMContentLoaded", start);


function start() {
    async function getJson() {

        //!!!!Opdater hjemmesiden så den passer!!!!

        let url = "http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/museums_information/237";
        let jsonData = await fetch(url);
        footer_data = await jsonData.json();
        showData();
    }


    function showData() {



        // footer_stuff

        document.querySelector(".phone").innerHTML = "+45" + " " +
            footer_data.telefon_nr;


        document.querySelector(".phone_times").innerHTML = footer_data.telefontider;

        document.querySelector(".phone_m").innerHTML = "+45" + " " +
            footer_data.telefon_nr;

        document.querySelector(".phone_times_m").innerHTML = footer_data.telefontider;

        document.querySelector("#myAnchor").href = "mailto:" + footer_data.mail;

        document.getElementById("facebookAnchor").href = footer_data.facebook;

        document.getElementById("instagramAnchor").href = footer_data.instagram;



        console.log("showing data");


    }

    getJson();
}
