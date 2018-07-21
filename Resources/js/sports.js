
const pageImages = [
    '../Resources/img/Raft1.jpg',
    '../Resources/img/Raft2.jpg',
    '../Resources/img/Boracko1.jpg',
    '../Resources/img/Boracko2.jpg',
    '../Resources/img/Splav1.jpg',
    '../Resources/img/Splav2.jpg',
    '../Resources/img/Bjelasnica1.jpg',
    '../Resources/img/Bjelasnica2.jpg',
    '../Resources/img/ESAjdinovici.jpg',
    '../Resources/img/ESBegovo.jpg',
    '../Resources/img/ESCardaci.jpg',
    '../Resources/img/ESKonjic.jpg'
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
let k = 5;
let j = 0;
for (let i = 0; i < sportsTitles.length; i++) {
    sports += `<div class="extendDiv">  <h2 class="excursionTitle">${sportsTitles[i]}</h2> <br> `;

if (i < 3) {

    for (; j < 8; j++) {

        sports+=`
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <img src="${pageImages[j]}" class="img-responsive arrangementsImg" alt="Image"/>
                    </div> `;
                               
        if (j % 2 != 0) {
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

sports+= `<br><div class="toShow">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div><br>`;

sports+= `<button style="width: 100%;" class="btn btn-success extendBtn" onclick="expandMe(${i})">SHOW MORE</button> </div> `;
}

$("#sportsList").append(sports);

// Expand Div

var activeArr = [false, false, false, false];

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

