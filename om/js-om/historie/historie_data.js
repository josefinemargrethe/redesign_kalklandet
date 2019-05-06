let information1 = [];
let dest1 = document.querySelector("#historie_info");
let filter1 = "14";






document.addEventListener("DOMContentLoaded", start);

function start() {



    async function getJson() {




        let jsonData = await fetch("http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/om_os?per_page=100");
        informationer = await jsonData.json();
        showInformationer();

    }


    function showInformationer() {
        dest1innerHTML = "";

        console.log("test");

        informationer.forEach(information1 => {
            if (information1.id == filter1) {


                let template =
                    `



                        <h1>${information1.overskrift}</h1>
                        <p>${information1.tekst}</p>


<br>
<br>

                 `;
                dest1.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    getJson();
}
