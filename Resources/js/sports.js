const pageImages = [
    '',
    '../Resources/img/sports/raft 1.jpg',
    '../Resources/img/sports/raft 2.jpg',
    '../Resources/img/sports/boracko 1.jpg',
    '../Resources/img/sports/boracko 2.jpg',
    '../Resources/img/sports/splav 1.jpg',
    '../Resources/img/sports/splav 2.jpg',
    '../Resources/img/sports/bjelasnica 1.jpg',
    '../Resources/img/sports/bjelasnica 2.jpg',
    '../Resources/img/sports/ES ajdinovici.jpg',
    '../Resources/img/sports/ES begovo.jpg',
    '../Resources/img/sports/ES cardaci.jpg',
    '../Resources/img/sports/ES konjic.jpg'
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
    sports += `<h2 class="arrangementsTitle">${sportsTitles[i]}</h2> <br> `;

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

sports+= `<button style="width: 100%;" class="btn btn-success arrangementsBtn">SHOW MORE</button> `;
}

$("#sportsList").append(sports);

