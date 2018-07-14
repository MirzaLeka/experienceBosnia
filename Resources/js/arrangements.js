const pageImages = [
    '',
    '../Resources/img/arrangements/M 1.jpg',
    '../Resources/img/arrangements/M 2.jpg',
    '../Resources/img/arrangements/M 3.jpg',
    '../Resources/img/arrangements/M 4.jpg',
    '../Resources/img/arrangements/J 1.jpg',
    '../Resources/img/arrangements/J 2.jpg',
    '../Resources/img/arrangements/J 3.jpg',
    '../Resources/img/arrangements/J 4.jpg',
    '../Resources/img/arrangements/B 1.jpg',
    '../Resources/img/arrangements/B 2.jpg',
    '../Resources/img/arrangements/B 3.jpg',
    '../Resources/img/arrangements/B 4.jpg',
    '../Resources/img/arrangements/V 1.jpg',
    '../Resources/img/arrangements/V 2.jpg',
    '../Resources/img/arrangements/V 3.jpg',
    '../Resources/img/arrangements/V 4.jpg',
    '../Resources/img/arrangements/T 1.jpg',
    '../Resources/img/arrangements/T 2.jpg',
    '../Resources/img/arrangements/T 3.jpg',
    '../Resources/img/arrangements/T 4.jpg',
    '../Resources/img/arrangements/N 1.jpg',
    '../Resources/img/arrangements/N 2.jpg',
    '../Resources/img/arrangements/N 3.jpg',
    '../Resources/img/arrangements/N 4.jpg',
    '../Resources/img/arrangements/G 1.jpg',
    '../Resources/img/arrangements/G 2.png',
    '../Resources/img/arrangements/G 3.jpg',
    '../Resources/img/arrangements/G 4.jpg',
    '../Resources/img/arrangements/BL 1.jpg',
    '../Resources/img/arrangements/BL 2.jpg',
    '../Resources/img/arrangements/BL 3.jpg',
    '../Resources/img/arrangements/BL 4.jpg'
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
