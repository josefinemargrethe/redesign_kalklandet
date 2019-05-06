let information1d = [];
let dest1d = document.querySelector(".bestyrelsesmedlems_info_d");
let filter1d = "Bestyrelse";
let information1m = [];
let dest1m = document.querySelector(".bestyrelsesmedlems_info_m");
let filter1m = "Bestyrelse";

let information3d = [];
let dest3d = document.querySelector("#frivillige_info_d");
let filter3d = "Frivillig";
let information3m = [];
let dest3m = document.querySelector(".frivillige_info_m");
let filter3m = "Frivillig";

let information2d = [];
let dest2d = document.querySelector("#medarbejder_info_d");
let filter2d = "Medarbejder";
let information2m = [];
let dest2m = document.querySelector(".medarbejder_info_m");
let filter2m = "Medarbejder";






document.addEventListener("DOMContentLoaded", start);

function start() {



    async function getJson() {




        let jsonData = await fetch("http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/personale? per_page=100");
        informationer = await jsonData.json();
        showInformationer();
        showInformationer1();
        showInformationer2();
        showInformationer3();
        showInformationer4();
        showInformationer5();
    }


    function showInformationer() {
        dest1d.innerHTML = "";

        console.log("test");

        informationer.forEach(information1d => {
            if (information1d.position == filter1d) {


                let template =
                    `

                        <h4>${information1d.navn}</h4>
                        <p>${information1d.stilling}</p>

                        <p> født: ${information1d.fdselsr}</p>
                        <p>Baggrund: ${information1d.baggrund}</p>
                        <p>Medlem fra: ${information1d.medlem_fra}</p>






                        <h4>${information1d.frivillig_organisation}</h4>
                        <h4>${information1d.beskrivelse_af_organisation}</h4>

                        <h4>${information1d.telefon_nr}</h4>
                        <h4>${information1d.mail}</h4>

<br>


                        </div>
                        </div>                    `;
                dest1d.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer1() {
        dest1m.innerHTML = "";

        console.log("test");

        informationer.forEach(information1m => {
            if (information1m.position == filter1m) {


                let template =
                    `

                        <h4>${information1m.navn}</h4>
                        <p>${information1m.stilling}</p>

                        <p> født: ${information1m.fdselsr}</p>
                        <p>Baggrund: ${information1m.baggrund}</p>
                        <p>Medlem fra: ${information1m.medlem_fra}</p>






                        <h4>${information1m.frivillig_organisation}</h4>
                        <h4>${information1m.beskrivelse_af_organisation}</h4>

                        <h4>${information1m.telefon_nr}</h4>
                        <h4>${information1m.mail}</h4>

<br>


                        </div>
                        </div>                    `;
                dest1m.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer2() {
        dest3d.innerHTML = "";

        console.log("test");

        informationer.forEach(information3d => {
            if (information3d.position == filter3d) {


                let template =
                    `





                        <h4>${information3d.frivillig_organisation}</h4>
                        <p>${information3d.beskrivelse_af_organisation}</p>


<br>
<br>

                 `;
                dest3d.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer3() {
        dest3m.innerHTML = "";

        console.log("test");

        informationer.forEach(information3m => {
            if (information3m.position == filter3m) {


                let template =
                    `





                        <h4>${information3m.frivillig_organisation}</h4>
                        <p>${information3m.beskrivelse_af_organisation}</p>


<br>
<br>

                 `;
                dest3m.insertAdjacentHTML("beforeend", template);





            }




        })
    }


    function showInformationer4() {
        dest2d.innerHTML = "";

        console.log("test");

        informationer.forEach(information2d => {
            if (information2d.position == filter2d) {


                let template =
                    `

                        <h4>${information2d.navn}</h4>
                        <p>${information2d.stilling}</p>




                        <h4>${information2d.frivillig_organisation}</h4>
                        <h4>${information2d.beskrivelse_af_organisation}</h4>

                        <p>${information2d.telefon_nr}</p>
                        <a href="mail:to ${information2d.mail}">${information2d.mail}</a>

<br>
<br>

                 `;
                dest2d.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    function showInformationer5() {
        dest2m.innerHTML = "";

        console.log("test");

        informationer.forEach(information2m => {
            if (information2m.position == filter2m) {


                let template =
                    `

                        <h4>${information2m.navn}</h4>
                        <p>${information2m.stilling}</p>




                        <h4>${information2m.frivillig_organisation}</h4>
                        <h4>${information2m.beskrivelse_af_organisation}</h4>

                        <p>${information2m.telefon_nr}</p>
                        <a href="mail:to ${information2m.mail}">${information2m.mail}</a>

<br>
<br>

                 `;
                dest2m.insertAdjacentHTML("beforeend", template);





            }




        })
    }





    getJson();
}
