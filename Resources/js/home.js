const excursionsCardImages = [
    '../Resources/img/M 2.jpg',
    '../Resources/img/B 2.jpg',
    '../Resources/img/T 3.jpg'
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


let cards = '';
for(let i = 0; i < excursionsCardImages.length; i++) {
cards+= `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 excursionsCard" onclick="window.location.href='${excursionsPaths[i]}'"> <br>
<img src="${excursionsCardImages[i]}" class="img-responsive excursionsCardImage" alt="Image"> <br>
<p class="excursionsDescription" style="font-size: 16px">${excursionsDescription[i]}</p>
</div>`;

}

$("#excursionsList").append(cards);