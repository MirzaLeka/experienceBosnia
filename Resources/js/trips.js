

const pageImages = [
    '',
    '../Resources/img/SS1.jpg',
    '../Resources/img/SS2.jpg',
    '../Resources/img/SS3.jpg',
    '../Resources/img/SS4.jpg',
    '../Resources/img/SS5.jpg',
    '../Resources/img/SS6.jpg',
    '../Resources/img/SS7.jpg',
    '../Resources/img/SS8.jpg',
    '../Resources/img/SS9.jpg',
    '../Resources/img/Trebevic1.jpg',
    '../Resources/img/Trebevic2.jpg',
    '../Resources/img/Tunel1.jpg',
    '../Resources/img/Tunel2.jpg',
    '../Resources/img/Bjelasnica1.jpg',
    '../Resources/img/Bjelasnica2.jpg',
    '../Resources/img/Visoko1.jpg',
    '../Resources/img/Visoko2.jpg',
    '../Resources/img/Skakavac1.jpg',
    '../Resources/img/Skakavac2.jpg',
    '../Resources/img/Lukomir1.jpg',
    '../Resources/img/Lukomir2.jpg',
    '../Resources/img/Umoljani1.jpg',
    '../Resources/img/Umoljani2.jpg',
    '../Resources/img/VreloBosne1.jpg',
    '../Resources/img/VreloBosne2.jpg',
    '../Resources/img/Jahorina1.jpg',
    '../Resources/img/Jahorina2.jpg',
];

// Trips routes

const tripsTitles = [
    'Sarajevo Sightseeng',
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
let k = 9;

for (let i = 0; i < tripsTitles.length; i++) {
    trips += ` <div class="extendDiv">  <h2 class="excursionTitle">${tripsTitles[i]}</h2> <br> `;

if (i == 0) {

    for (let j = 1; j < 10; j++) {

        trips+=` 
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <img src="${pageImages[j]}" class="img-responsive arrangementsImg" alt="Image"/>
                    </div> `;
        
        }

}

else {

    for (; k < pageImages.length; k++) {

        trips+=` 
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <img src="${pageImages[k]}" class="img-responsive arrangementsImg" alt="Image"/>
                    </div> `;

                    
        if (k % 2 != 0) {
            break;
        }
        
        }
   

}
k++;

trips+= `<button style="width: 100%;" class="btn btn-success extendBtn">SHOW MORE</button> </div> `;
}

$("#tripsList").append(trips);

