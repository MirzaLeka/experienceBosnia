
/* Display excursion Cards */

$(window).scroll(function() {
    var hT = $(".subtitle").offset().top,
        hH = $(".subtitle").outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    
    if (wS >= (hT+hH-wH)){
        $(".excursionsCard").addClass("displayCards");
    }
 });


const excursionsCardImages = [
    '../Resources/img/M2.jpg',
    '../Resources/img/T3.jpg',
    '../Resources/img/B2.jpg'
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
    transportCards += `<li class="sidebarLi" style="top: ${i*16}%;" onclick="changeTransport(${i})">${transportCardDescription[i]}</li>`;

}

$(".sidebarUl").append(transportCards);

// 'https://www.autotrader.co.uk/images/at3/sell/landing-pages/hero-car.png'

let changeTransport = (i) =>  {

    $(".sidebarLi").css({
        background: "#333"
    });

    $(`.sidebarLi:eq(${i})`).css({
        background: "#222"
    });
    
    const transportBackgrounds = [
        "../Resources/img/transport/transport2.jpg",
         "../Resources/img/transport/transport5.jpg",
         "../Resources/img/transport/transport3.jpg",
         "../Resources/img/transport/transport4.jpg",
          "../Resources/img/transport/transport1.jpg",
           "../Resources/img/transport/transport6.png"
        ];        

    $("#transportList").css({ 
        "background": `url("${transportBackgrounds[i]}")`,
        "height": "310px",
        "width": "100%",
        "background-size": "100% 310px"
    });

    $("#transportList").addClass("add_keyframe");

    setTimeout(() => {
        $("#transportList").removeClass("add_keyframe");
    }, 1000);

}