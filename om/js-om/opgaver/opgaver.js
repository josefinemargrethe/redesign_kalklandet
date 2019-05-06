let information3m = [];
let dest3m = document.querySelector(".collection_info_m");
let filter3m = "34";
let information3 = [];
let dest3 = document.querySelector("#collection_info");
let filter3 = "34";

let information4m = [];
let dest4m = document.querySelector(".expression_info_m");
let filter4m = "35";
let information4 = [];
let dest4 = document.querySelector("#expression_info");
let filter4 = "35";

let information6m = [];
let dest6m = document.querySelector(".klint_info_m");
let filter6m = "38";
let information6 = [];
let dest6 = document.querySelector("#klint_info");
let filter6 = "38";

let information1m = [];
let dest1m = document.querySelector(".mission_info_m");
let filter1m = "28";
let information1 = [];
let dest1 = document.querySelector("#mission_info");
let filter1 = "28";

let information2m = [];
let dest2m = document.querySelector(".plan_info_m");
let filter2m = "30";
let information2 = [];
let dest2 = document.querySelector("#plan_info");
let filter2 = "30";

let information5m = [];
let dest5m = document.querySelector(".teamwork_info_m");
let filter5m = "36";
let information5 = [];
let dest5 = document.querySelector("#teamwork_info");
let filter5 = "36";






document.addEventListener("DOMContentLoaded", start);

function start() {



    async function getJson() {




        let jsonData = await fetch("http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/om_os?per_page=100");
        informationer = await jsonData.json();
        showInformationer();
        showInformationer1();
        showInformationer2();
        showInformationer3();
        showInformationer4();
        showInformationer5();
        showInformationer6();
        showInformationer7();
        showInformationer8();
        showInformationer9();
        showInformationer10();
        showInformationer11();

    }


    function showInformationer() {
        dest3minnerHTML = "";

        console.log("test");

        informationer.forEach(information3m => {
            if (information3m.id == filter3m) {


                let template =
                    `



                        <h4>${information3m.overskrift}</h4>
                        <p>${information3m.tekst}</p>


<br>
<br>

                 `;
                dest3m.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer1() {
        dest3innerHTML = "";

        console.log("test");

        informationer.forEach(information3 => {
            if (information3.id == filter3) {


                let template =
                    `



                        <h4>${information3.overskrift}</h4>
                        <p>${information3.tekst}</p>


<br>
<br>

                 `;
                dest3.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer2() {
        dest4minnerHTML = "";

        console.log("test");

        informationer.forEach(information4m => {
            if (information4m.id == filter4m) {


                let template =
                    `



                        <h4>${information4m.overskrift}</h4>
                        <p>${information4m.tekst}</p>


<br>
<br>

                 `;
                dest4m.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer3() {
        dest4innerHTML = "";

        console.log("test");

        informationer.forEach(information4 => {
            if (information4.id == filter4) {


                let template =
                    `



                        <h4>${information4.overskrift}</h4>
                        <p>${information4.tekst}</p>


<br>
<br>

                 `;
                dest4.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer4() {
        dest6minnerHTML = "";

        console.log("test");

        informationer.forEach(information6m => {
            if (information6m.id == filter6m) {


                let template =
                    `



                        <h4>${information6m.overskrift}</h4>
                        <p>${information6m.tekst}</p>


<br>
<br>

                 `;
                dest6m.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer5() {
        dest6innerHTML = "";

        console.log("test");

        informationer.forEach(information6 => {
            if (information6.id == filter6) {


                let template =
                    `



                        <h4>${information6.overskrift}</h4>
                        <p>${information6.tekst}</p>


<br>
<br>

                 `;
                dest6.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer6() {
        dest1minnerHTML = "";

        console.log("test");

        informationer.forEach(information1m => {
            if (information1m.id == filter1m) {


                let template =
                    `



                        <h4>${information1m.overskrift}</h4>
                        <p>${information1m.tekst}</p>


<br>
<br>

                 `;
                dest1m.insertAdjacentHTML("beforeend", template);





            }




        })
    }


    function showInformationer7() {
        dest1innerHTML = "";

        console.log("test");

        informationer.forEach(information1 => {
            if (information1.id == filter1) {


                let template =
                    `



                        <h4>${information1.overskrift}</h4>
                        <p>${information1.tekst}</p>


<br>
<br>

                 `;
                dest1.insertAdjacentHTML("beforeend", template);





            }




        })
    }


    function showInformationer8() {
        dest2minnerHTML = "";

        console.log("test");

        informationer.forEach(information2m => {
            if (information2m.id == filter2m) {


                let template =
                    `



                        <h4>${information2m.overskrift}</h4>
                        <p>${information2m.tekst}</p>


<br>
<br>

                 `;
                dest2m.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer9() {
        dest2innerHTML = "";

        console.log("test");

        informationer.forEach(information2 => {
            if (information2.id == filter2) {


                let template =
                    `



                        <h4>${information2.overskrift}</h4>
                        <p>${information2.tekst}</p>


<br>
<br>

                 `;
                dest2.insertAdjacentHTML("beforeend", template);





            }




        })
    }


    function showInformationer10() {
        dest5minnerHTML = "";

        console.log("test");

        informationer.forEach(information5m => {
            if (information5m.id == filter5m) {


                let template =
                    `



                        <h4>${information5m.overskrift}</h4>
                        <p>${information5m.tekst}</p>


<br>
<br>

                 `;
                dest5m.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer11() {
        dest5innerHTML = "";

        console.log("test");

        informationer.forEach(information5 => {
            if (information5.id == filter5) {


                let template =
                    `



                        <h4>${information5.overskrift}</h4>
                        <p>${information5.tekst}</p>


<br>
<br>

                 `;
                dest5.insertAdjacentHTML("beforeend", template);





            }




        })
    }


    getJson();
}
