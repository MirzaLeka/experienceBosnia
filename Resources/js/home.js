const excursionsCardImages = [
    '../Resources/img/arrangements/M2.jpg',
    '../Resources/img/arrangements/T3.jpg',
    '../Resources/img/arrangements/B2.jpg'
];

const excursionsDescription = [
    'Jednodnevne aranžmanske rute sa obilascima gradova u BiH, kulturno-historijskih znamenitosti i nacionalna kulinarika',
    'Jednodnevni ili višesatni izleti u okolini Sarajeva, planine, etnosela, spomenici prirode, znamenitosti',
    'Jednodnevni aranžmanski izleti u BiH sa aktivnim sadržajima, rafting, splavarenje, biciklizam, adrenalinski sportovi'
]

const excursionsPaths = [
    '/arrangements',
    '/trips',
    '/sports'
];


let excursionsCards = '';
for(let i = 0; i < excursionsCardImages.length; i++) {
excursionsCards+= `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 excursionsCard" onclick="window.location.href='${excursionsPaths[i]}'"> <br>
<img src="${excursionsCardImages[i]}" class="img-responsive excursionsCardImage" alt="Image"> <br>
<p class="excursionsDescription" style="font-size: 16px">${excursionsDescription[i]}</p>
</div>`;

}

$("#excursionsList").append(excursionsCards);


/* Transportation Cards */

const transportCardImages = [
    'https://www.autotrader.co.uk/images/at3/sell/landing-pages/hero-car.png',
    'https://www.autotrader.co.uk/images/at3/sell/landing-pages/hero-car.png',
    'https://www.autotrader.co.uk/images/at3/sell/landing-pages/hero-car.png',
    'https://www.autotrader.co.uk/images/at3/sell/landing-pages/hero-car.png',
    'https://www.autotrader.co.uk/images/at3/sell/landing-pages/hero-car.png',
    'https://www.autotrader.co.uk/images/at3/sell/landing-pages/hero-car.png'
]; 

const transportCardDescription = [
    'Vozila u ponudi',
    'Prevoz na more',
    'Iznajmljivanje vozila',
    'Prevoz na festivale u regionu',
    'Gastoenološki događaji u regionu',
    'Prevoz grupa do 28 u BiH i šire'
];

let transportCards = '';

for (let i = 0; i < transportCardImages.length; i++) {
    transportCards += `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 transportCard">
    <div class="col-lg-5">
     <img src="${transportCardImages[i]}" class="img-responsive transportCardImage" alt="Image">
    </div>
    <div class="col-lg-7">
      <p style="font-size: 16px" class='transportCardDescription'>${transportCardDescription[i]}</p>
    </div>
     </div>`;

}

$("#transportList").append(transportCards);