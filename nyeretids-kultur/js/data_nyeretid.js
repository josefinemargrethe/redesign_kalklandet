let data;


document.addEventListener("DOMContentLoaded", start);


function start() {
    async function getJson() {

        let url = "http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/museums_information/355";
        let jsonData = await fetch(url);
        data = await jsonData.json();
        showData();
    }


    function showData() {



        //        TEXT


        document.querySelector(".datainsert1").innerHTML = data.textbox1;






        console.log("showing data");


    }

    getJson();
}
