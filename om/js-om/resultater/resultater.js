let information1m = [];
let dest1m = document.querySelector(".fond_info_m");
let filter1m = "40";
let information1 = [];
let dest1 = document.querySelector("#fond");
let filter1 = "40";

let information2m = [];
let dest2m = document.querySelector(".prices_info_m");
let filter2m = "43";
let information2 = [];
let dest2 = document.querySelector("#prices_info");
let filter2 = "43";

let information3m = [];
let dest3m = document.querySelector(".publikationer_info_m");
let filter3m = "44";
let information3 = [];
let dest3 = document.querySelector("#publication_info");
let filter3 = "44";

let information4m = [];
let dest4m = document.querySelector(".year1_info_m");
let filter4m = "45";
let information4 = [];
let dest4 = document.querySelector("#year1_info");
let filter4 = "45";

let information5m = [];
let dest5m = document.querySelector(".year2_info_m");
let filter5m = "47";
let information6 = [];
let dest6 = document.querySelector("#year2_info");
let filter6 = "47";









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

    }


    function showInformationer() {
        dest1minnerHTML = "";

        console.log("test");

        informationer.forEach(information1m => {
            if (information1m.id == filter1m) {


                let template =
                    `



                        <h3>${information1m.overskrift}</h3> <br>
                        <p>${information1m.tekst}</p>


<br>
<br>

                 `;
                dest1m.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer1() {
        dest1innerHTML = "";

        console.log("test");

        informationer.forEach(information1 => {
            if (information1.id == filter1) {


                let template =
                    `



                        <h3>${information1.overskrift}</h3> <br>
                        <p>${information1.tekst}</p>


<br>
<br>

                 `;
                dest1.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer2() {
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

    function showInformationer3() {
        dest2innerHTML = "";

        console.log("test");

        informationer.forEach(information2 => {
            if (information2.id == filter2) {


                let template =
                    `



                        <h3>${information2.overskrift}</h3> <br>
                        <p>${information2.tekst}</p>


<br>
<br>

                 `;
                dest2.insertAdjacentHTML("beforeend", template);





            }




        })
    }


    function showInformationer4() {
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

    function showInformationer5() {
        dest3innerHTML = "";

        console.log("test");

        informationer.forEach(information3 => {
            if (information3.id == filter3) {


                let template =
                    `



                        <h3>${information3.overskrift}</h3> <br>
                        <p>${information3.tekst}</p>


<br>
<br>

                 `;
                dest3.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer6() {
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

    function showInformationer7() {
        dest4innerHTML = "";

        console.log("test");

        informationer.forEach(information4 => {
            if (information4.id == filter4) {


                let template =
                    `



                        <h3>${information4.overskrift}</h3> <br>
                        <p>${information4.tekst}</p>


<br>
<br>

                 `;
                dest4.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer8() {
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

    function showInformationer9() {
        dest6innerHTML = "";

        console.log("test");

        informationer.forEach(information6 => {
            if (information6.id == filter6) {


                let template =
                    `



                        <h3>${information6.overskrift}</h3> <br>
                        <p>${information6.tekst}</p>


<br>
<br>

                 `;
                dest6.insertAdjacentHTML("beforeend", template);





            }




        })
    }


    getJson();
}
