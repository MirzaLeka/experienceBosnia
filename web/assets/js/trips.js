
var globalSrc = 0;
let changeCaption = 0;

// open modal

function openModal(src) {
    modal.style.display = "flex";

   $(".modalImg").attr("src", pageImages[src]);

   globalSrc = src;

   if (globalSrc < 9) {
    changeCaption =  Math.floor(globalSrc / 9);
   }
   else {
    changeCaption =  Math.floor((globalSrc-7) / 2);
   }

   $(".modalCaption").text(tripsTitles[changeCaption]);

   }


function nextImg() {
    globalSrc++;

    if (globalSrc == pageImages.length) {
        globalSrc = 1;
    }
    
    $(".modalImg").attr("src", pageImages[globalSrc]);

   if (globalSrc < 9) {
    changeCaption =  Math.floor(globalSrc / 9);
   }
   else {
    changeCaption =  Math.floor((globalSrc-7) / 2);
   }

 
    $(".modalCaption").text(tripsTitles[changeCaption]);

}

function prevImg() {
    globalSrc--;

    if (globalSrc < 1) {
        globalSrc = pageImages.length-1;
    }

    $(".modalImg").attr("src", pageImages[globalSrc]);

    if (globalSrc < 9) {
        changeCaption =  Math.floor(globalSrc / 9);
       }
       else {
        changeCaption =  Math.floor((globalSrc-7) / 2);
       }
  
    $(".modalCaption").text(tripsTitles[changeCaption]);


}

const pageImages = [
    '/assets/img/SS1.jpg',
    '/assets/img/SS2.jpg',
    '/assets/img/SS3.jpg',
    '/assets/img/SS4.jpg',
    '/assets/img/SS5.jpg',
    '/assets/img/SS6.jpg',
    '/assets/img/SS7.jpg',
    '/assets/img/SS8.jpg',
    '/assets/img/SS9.jpg',
    '/assets/img/Trebevic1.jpg',
    '/assets/img/Trebevic2.jpg',
    '/assets/img/Tunel1.jpg',
    '/assets/img/Tunel2.jpg',
    '/assets/img/Bjelasnica1.jpg',
    '/assets/img/Bjelasnica2.jpg',
    '/assets/img/Visoko1.jpg',
    '/assets/img/Visoko2.jpg',
    '/assets/img/Skakavac1.jpg',
    '/assets/img/Skakavac2.jpg',
    '/assets/img/Lukomir1.jpg',
    '/assets/img/Lukomir2.jpg',
    '/assets/img/Umoljani1.jpg',
    '/assets/img/Umoljani2.jpg',
    '/assets/img/VreloBosne1.jpg',
    '/assets/img/VreloBosne2.jpg',
    '/assets/img/Jahorina1.jpg',
    '/assets/img/Jahorina2.jpg',
];

// Trips routes

const tripsTitles = [
    'Sarajevo Sightseeing',
    'Trebević',
    'Tunel Spasa',
    'Bjelašnica',
    'Piramide Visoko',
    'Vodopad Skakavac',
    'Lukomir',
    'Umoljani',
    'Vrelo Bosne',
    'Jahorina'
];

// Adding Trips

let trips = '';
let k = 8;

for (let i = 0; i < tripsTitles.length; i++) {
    trips += ` <div class="extendDiv">  <h2 class="excursionTitle">${tripsTitles[i]}</h2> <br> `;

if (i == 0) {

    for (let j = 0; j < 9; j++) {

        trips+=` 
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <img src="${pageImages[j]}" class="img-responsive tripsImg ssTrips" onclick='openModal(${j})' alt="Image"/>
                    </div> `;
        
        }

}

else {

    for (; k < pageImages.length; k++) {

        trips+=` 
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <img src="${pageImages[k]}" class="img-responsive tripsImg otherTrips" onclick='openModal(${k})' alt="Image"/>
                    </div> `;

                    
        if (k % 2 == 0) {
            break;
        }
        
        }
   

}
k++;

trips+= `<br><div class="toShow">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div><br>`;

trips+= `<button style="width: 100%;" class="btn btn-success extendBtn" onclick="expandMe(${i})">SHOW MORE</button> </div> `;
}

$("#tripsList").append(trips);


// Expand Div

var activeArr = [false, false, false, false, false, false, false, false, false, false];

function expandMe(counter) {

 if (!activeArr[counter]) {
    $(`.extendDiv:eq(${counter})`).css({
  height: "100%"
}); 

$(`.toShow:eq(${counter})`).fadeIn();

  $(`.extendBtn:eq(${counter})`).text("SHOW LESS");

activeArr[counter] = true;
}
  else {

    $(`.extendDiv:eq(${counter})`).css({
  height: "100%"
});

$(`.toShow:eq(${counter})`).css({
    display: "none"
  }); 

  $(`.extendBtn:eq(${counter})`).text("SHOW MORE");

activeArr[counter] = false;
}


}

