$(document).ready(() => {

    const headerCover = [
        '../Resources/img/Cover/01.jpg',
        '../Resources/img/Cover/02.jpg',
        '../Resources/img/Cover/03.jpg',
        '../Resources/img/Cover/04.jpg',
        '../Resources/img/Cover/05.jpg',
        '../Resources/img/Cover/06.jpg',
        '../Resources/img/Cover/07.jpg',
        '../Resources/img/Cover/08.jpg',
        '../Resources/img/Cover/09.jpg',
        '../Resources/img/Cover/10.jpg'
    ];

    setInterval(() => {
        var rand = headerCover[Math.floor(Math.random() * headerCover.length)];

        $("#header").css({
            "background": `url(${rand}) no-repeat center center`,
            "backgroundSize" : "cover"
        });
    
        }, 4000);

    });
    