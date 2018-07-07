const mostarImages = [
    '../Resources/img/M 1.jpg',
    '../Resources/img/M 2.jpg',
    '../Resources/img/M 3.jpg',
    '../Resources/img/M 4.jpg',
];

const jajceImages = [
    '../Resources/img/J 1.jpg',
    '../Resources/img/J 2.jpg',
    '../Resources/img/J 3.jpg',
    '../Resources/img/J 4.jpg',
];

const bihacImages = [
    '../Resources/img/B 1.jpg',
    '../Resources/img/B 2.jpg',
    '../Resources/img/B 3.jpg',
    '../Resources/img/B 4.jpg',
];

const tuzlaImages = [
    '../Resources/img/T 1.jpg',
    '../Resources/img/T 2.jpg',
    '../Resources/img/T 3.jpg',
    '../Resources/img/T 4.jpg',
];

const neumImages = [
    '../Resources/img/N 1.jpg',
    '../Resources/img/N 2.jpg',
    '../Resources/img/N 3.jpg',
    '../Resources/img/N 4.jpg',
];

const gorazdeImages = [
    '../Resources/img/G 1.jpg',
    '../Resources/img/G 2.jpg',
    '../Resources/img/G 3.jpg',
    '../Resources/img/G 4.jpg',
];

const banjalukaImages = [
    '../Resources/img/G 1.jpg',
    '../Resources/img/G 2.jpg',
    '../Resources/img/G 3.jpg',
    '../Resources/img/G 4.jpg',
];

// Arrangements routes

const arrangementsRoutes = [
    'Mostar-Počitelj-Konjic',
    'Jajce-Travnik',
    'Bihać-Ostrožac-Una',
    'Višegrad-Srebrenica',
    'Tuzla-Srebrenik-Bijambare',
    'Neum-Stolac-Kravice',
    'Goražde-foča-Tjentište',
    'Banja Luka-Doboj-Tešanj'
];

// Adding Arrangements

let arrangements = '';

for (let i = 0; i < arrangementsRoutes.length; i++) {
    arrangements += `<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <h2 class="arrangementsTitle">${arrangementsRoutes[i]}</h2><br><br>  
    <img src="${mostarImages[i]}" class="img-responsive" alt="Image"/>
     </div>`;
}

$("#arrangementsList").append(arrangements);

