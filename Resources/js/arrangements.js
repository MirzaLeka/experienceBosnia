
var globalSrc = 0;

// open modal

function openModal(src) {
    modal.style.display = "block";

   $(".modalImg").attr("src", pageImages[src]);

   globalSrc = src;
}

function nextImg() {
    globalSrc++;

    if (globalSrc == pageImages.length) {
        globalSrc = 1;
    }
    
    $(".modalImg").attr("src", pageImages[globalSrc]);

}

function prevImg() {
    globalSrc--;

    if (globalSrc < 1) {
        globalSrc = pageImages.length-1;
    }

    $(".modalImg").attr("src", pageImages[globalSrc]);

}

const pageImages = [
    '',
    '../Resources/img/M1.jpg',
    '../Resources/img/M2.jpg',
    '../Resources/img/M3.jpg',
    '../Resources/img/M4.jpg',
    '../Resources/img/J1.jpg',
    '../Resources/img/J2.jpg',
    '../Resources/img/J3.jpg',
    '../Resources/img/J4.jpg',
    '../Resources/img/B1.jpg',
    '../Resources/img/B2.jpg',
    '../Resources/img/B3.jpg',
    '../Resources/img/B4.jpg',
    '../Resources/img/V1.jpg',
    '../Resources/img/V2.jpg',
    '../Resources/img/V3.jpg',
    '../Resources/img/V4.jpg',
    '../Resources/img/T1.jpg',
    '../Resources/img/T2.jpg',
    '../Resources/img/T3.jpg',
    '../Resources/img/T4.jpg',
    '../Resources/img/N1.jpg',
    '../Resources/img/N2.jpg',
    '../Resources/img/N3.jpg',
    '../Resources/img/N4.jpg',
    '../Resources/img/G1.jpg',
    '../Resources/img/G2.png',
    '../Resources/img/G3.jpg',
    '../Resources/img/G4.jpg',
    '../Resources/img/BL1.jpg',
    '../Resources/img/BL2.jpg',
    '../Resources/img/BL3.jpg',
    '../Resources/img/BL4.jpg'
];

// Arrangements routes

const arrangementsTitles = [
    'Mostar - Počitelj - Konjic',
    'Jajce - Travnik',
    'Bihać - Ostrožac - Una',
    'Višegrad - Srebrenica',
    'Tuzla - Srebrenik - Bijambare',
    'Neum - Stolac - Kravice',
    'Goražde - Foča - Tjentište',
    'Banja Luka - Doboj - Tešanj'
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
                <img src="${pageImages[j]}" class="img-responsive arrangementsImg" onclick='openModal(${j})' alt="Image"/>
            </div>  `;

if (j %4 == 0) {
    break;
}

}
++j;

arrangements+= `<button style="width: 100%;" class="btn btn-success extendBtn" onclick="expandMe(${i})">SHOW MORE</button>  </div>`;
}

$("#arrangementsList").append(arrangements);


// Expand Div

/*
var active = false;

$(".extendBtn").click(function() {

 
  
    if (!active) {
        $(this).closest('.extendDiv').css({
      height: "450px"
    }); 
    active = true;
    }
      else {
          $(this).closest('.extendDiv').css({
      height: "300px"
    });
    active = false;
    }
    
    console.log(active);

});
*/

var active = false;


function expandMe(counter) {

 if (!active) {
    $(`.extendDiv:eq(${counter})`).css({
  height: "450px"
}); 
active = true;
}
  else {
    $(`.extendDiv:eq(${counter})`).css({
  height: "300px"
});
active = false;
}



}