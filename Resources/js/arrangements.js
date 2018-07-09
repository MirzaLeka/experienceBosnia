const pageImages = [
    '',
    '../Resources/img/M 1.jpg',
    '../Resources/img/M 2.jpg',
    '../Resources/img/M 3.jpg',
    '../Resources/img/M 4.jpg',
    '../Resources/img/J 1.jpg',
    '../Resources/img/J 2.jpg',
    '../Resources/img/J 3.jpg',
    '../Resources/img/J 4.jpg',
    '../Resources/img/B 1.jpg',
    '../Resources/img/B 2.jpg',
    '../Resources/img/B 3.jpg',
    '../Resources/img/B 4.jpg',
    '../Resources/img/V 1.jpg',
    '../Resources/img/V 2.jpg',
    '../Resources/img/V 3.jpg',
    '../Resources/img/V 4.jpg',
    '../Resources/img/T 1.jpg',
    '../Resources/img/T 2.jpg',
    '../Resources/img/T 3.jpg',
    '../Resources/img/T 4.jpg',
    '../Resources/img/N 1.jpg',
    '../Resources/img/N 2.jpg',
    '../Resources/img/N 3.jpg',
    '../Resources/img/N 4.jpg',
    '../Resources/img/G 1.jpg',
    '../Resources/img/G 2.png',
    '../Resources/img/G 3.jpg',
    '../Resources/img/G 4.jpg',
    '../Resources/img/BL 1.jpg',
    '../Resources/img/BL 2.jpg',
    '../Resources/img/BL 3.jpg',
    '../Resources/img/BL 4.jpg'
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
    arrangements += `<h2 class="arrangementsTitle">${arrangementsTitles[i]}</h2> <br> `

for (; j < pageImages.length; j++) {

if (j == 0) {
    continue;
}

arrangements+=`
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <img src="${pageImages[j]}" class="img-responsive arrangementsImg" alt="Image"/>
            </div> `;

if (j %4 == 0) {
    break;
}

}
++j;

arrangements+= `<button style="width: 100%;" class="btn btn-success arrangementsBtn">SHOW MORE</button> `;
}

$("#arrangementsList").append(arrangements);

