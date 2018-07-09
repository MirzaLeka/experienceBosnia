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

        $('#header').fadeTo('slow', 0.3, function()
        {
            $(this).css({
                'background-image': 'url(' + rand + ')'
                //'transition': 'background 0.5s linear'
            });
        }).fadeTo('slow', 1);

        /*
        $("#header").stop().animate({opacity: 0},1000,function(){
            $(this).css({'background-image': `url(${rand})`})
                       .animate({opacity: 1},{duration:500});
         }); */
        
         /*   $("#header" ).animate({
                "background": `url(${rand}) no-repeat center center`,
                "backgroundSize" : "cover"
            }, 1000); */

     /*   $("#header").fadeIn(1000).css({
            "background": `url(${rand}) no-repeat center center`,
            "backgroundSize" : "cover"
        }); */
    
        }, 4000);

    });
    