$(document).ready(() => {


const pageImages = [
    '',
    '../Resources/img/arrangements/M1.jpg',
    '../Resources/img/arrangements/M2.jpg',
    '../Resources/img/arrangements/M3.jpg',
    '../Resources/img/arrangements/M4.jpg',
    '../Resources/img/arrangements/J1.jpg',
    '../Resources/img/arrangements/J2.jpg',
    '../Resources/img/arrangements/J3.jpg',
    '../Resources/img/arrangements/J4.jpg',
    '../Resources/img/arrangements/B1.jpg',
    '../Resources/img/arrangements/B2.jpg',
    '../Resources/img/arrangements/B3.jpg',
    '../Resources/img/arrangements/B4.jpg',
    '../Resources/img/arrangements/V1.jpg',
    '../Resources/img/arrangements/V2.jpg',
    '../Resources/img/arrangements/V3.jpg',
    '../Resources/img/arrangements/V4.jpg',
    '../Resources/img/arrangements/T1.jpg',
    '../Resources/img/arrangements/T2.jpg',
    '../Resources/img/arrangements/T3.jpg',
    '../Resources/img/arrangements/T4.jpg',
    '../Resources/img/arrangements/N1.jpg',
    '../Resources/img/arrangements/N2.jpg',
    '../Resources/img/arrangements/N3.jpg',
    '../Resources/img/arrangements/N4.jpg',
    '../Resources/img/arrangements/G1.jpg',
    '../Resources/img/arrangements/G2.png',
    '../Resources/img/arrangements/G3.jpg',
    '../Resources/img/arrangements/G4.jpg',
    '../Resources/img/arrangements/BL1.jpg',
    '../Resources/img/arrangements/BL2.jpg',
    '../Resources/img/arrangements/BL3.jpg',
    '../Resources/img/arrangements/BL4.jpg'
];

// Arrangements routes

const arrangementsTitles = [
    'Mostar-Počitelj-Konjic',
    'Jajce-Travnik',
    'Bihać-Ostrožac-Una',
    'Višegrad-Srebrenica',
    'Tuzla-Srebrenik-Bijambare',
    'Neum-Stolac-Kravice',
    'Goražde-foča-Tjentište',
    'Banja Luka-Doboj-Tešanj'
];

// Adding Arrangements

let arrangements = '';
j = 0;

for (let i = 0; i < arrangementsTitles.length; i++) {
    arrangements += `<div class="extendDiv">  <h2 class="excursionTitle">${arrangementsTitles[i]}</h2> <br> `

for (; j < pageImages.length; j++) {

if (j == 0) {
    continue;
}

arrangements+=`
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <img src="${pageImages[j]}" class="img-responsive arrangementsImg" alt="Image"/>
            </div>  `;

if (j %4 == 0) {
    break;
}

}
++j;

arrangements+= `<button style="width: 100%;" class="btn btn-success extendBtn">SHOW MORE</button>  </div>`;
}

$("#arrangementsList").append(arrangements);


// $(".extendBtn").click(() => {
//     $(this).(".extendDiv").css({
//         background: "green"
//     });
// });


});