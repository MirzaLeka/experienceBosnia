const pageImages = [
    '',
    '../Resources/img/sports/Raft1.jpg',
    '../Resources/img/sports/Raft2.jpg',
    '../Resources/img/sports/Boracko1.jpg',
    '../Resources/img/sports/Boracko2.jpg',
    '../Resources/img/sports/Splav1.jpg',
    '../Resources/img/sports/Splav2.jpg',
    '../Resources/img/sports/Bjelasnica1.jpg',
    '../Resources/img/sports/Bjelasnica2.jpg',
    '../Resources/img/sports/ESAjdinovici.jpg',
    '../Resources/img/sports/ESBegovo.jpg',
    '../Resources/img/sports/ESCardaci.jpg',
    '../Resources/img/sports/ESKonjic.jpg'
];

// Sports routes

const sportsTitles = [
  'Rafting Neretva',
  'Boračko jezero',
  'Splavarenje Drinom',
  'Etno sela'
];

// Adding sports

let sports = '';
let k = 6;
let j = 1;
for (let i = 0; i < sportsTitles.length; i++) {
    sports += `<div class="extendDiv">  <h2 class="excursionTitle">${sportsTitles[i]}</h2> <br> `;

if (i < 3) {

    for (; j < 9; j++) {

        sports+=`
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <img src="${pageImages[j]}" class="img-responsive arrangementsImg" alt="Image"/>
                    </div> `;
                               
        if (j % 2 == 0) {
            break;
        }
        
        }
         ++j;
}

else {

    for (; k < pageImages.length; k++) {

        sports+=`
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <img src="${pageImages[k]}" class="img-responsive arrangementsImg" alt="Image"/>
                    </div> `;     
        }
   
}
k++;

sports+= `<button style="width: 100%;" class="btn btn-success extendBtn">SHOW MORE</button> </div> `;
}

$("#sportsList").append(sports);

