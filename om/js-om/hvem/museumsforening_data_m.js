let information4m = [];
let dest4m = document.querySelector(".museumsforening_info_m");
let filter4m = "MEDLEMSKAB";






document.addEventListener("DOMContentLoaded", start);

function start() {



    async function getJson() {




        let jsonData = await fetch("http://ohnonotanotherwebsite.com/kea/07-cms/kalklandet_redesign/wordpress/wp-json/wp/v2/om_os?per_page=100");
        informationer = await jsonData.json();
        showInformationer();

    }


    function showInformationer() {
        dest4minnerHTML = "";

        console.log("test");

        informationer.forEach(information4m => {
            if (information4m.overskrift == filter4m) {


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

    getJson();
}
