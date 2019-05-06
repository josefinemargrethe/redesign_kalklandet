let information4d = [];
let dest4d = document.querySelector("#museumsforening_info_d");
let filter4d = "MEDLEMSKAB";






document.addEventListener("DOMContentLoaded", start);

function start() {



    async function getJson() {




        let jsonData = await fetch("http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/om_os?per_page=100");
        informationer = await jsonData.json();
        showInformationer();

    }


    function showInformationer() {
        dest4dinnerHTML = "";

        console.log("test");

        informationer.forEach(information4d => {
            if (information4d.overskrift == filter4d) {


                let template =
                    `



                        <h4>${information4d.overskrift}</h4>
                        <p>${information4d.tekst}</p>


<br>
<br>

                 `;
                dest4d.insertAdjacentHTML("beforeend", template);





            }




        })
    }

    getJson();
}
