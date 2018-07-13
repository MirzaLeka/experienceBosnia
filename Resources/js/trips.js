const pageImages = [
    '',
    '../Resources/img/trips/SS 1.jpg',
    '../Resources/img/trips/SS 2.jpg',
    '../Resources/img/trips/SS 3.jpg',
    '../Resources/img/trips/SS 4.jpg',
    '../Resources/img/trips/SS 5.jpg',
    '../Resources/img/trips/SS 6.jpg',
    '../Resources/img/trips/SS 7.jpg',
    '../Resources/img/trips/SS 8.jpg',
    '../Resources/img/trips/SS 9.jpg',
    '../Resources/img/trips/trebevic 1.jpg',
    '../Resources/img/trips/trebevic 2.jpg',
    '../Resources/img/trips/tunel 1.jpg',
    '../Resources/img/trips/tunel 2.jpg',
    '../Resources/img/trips/bjelasnica 1.jpg',
    '../Resources/img/trips/bjelasnica 2.jpg',
    '../Resources/img/trips/visoko 1.jpg',
    '../Resources/img/trips/visoko 2.jpg',
    '../Resources/img/trips/skakavac 1.jpg',
    '../Resources/img/trips/skakavac 2.jpg',
    '../Resources/img/trips/lukomir 1.jpg',
    '../Resources/img/trips/lukomir 2.jpg',
    '../Resources/img/trips/umoljani 1.jpg',
    '../Resources/img/trips/umoljani 2.jpg',
    '../Resources/img/trips/vrelo bosne 1.jpg',
    '../Resources/img/trips/vrelo bosne 2.jpg',
    '../Resources/img/trips/jahorina 1.jpg',
    '../Resources/img/trips/jahorina 2.jpg',
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
    trips += `<h2 class="arrangementsTitle">${tripsTitles[i]}</h2> <br> `;

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

trips+= `<button style="width: 100%;" class="btn btn-success arrangementsBtn">SHOW MORE</button> `;
}

$("#tripsList").append(trips);

