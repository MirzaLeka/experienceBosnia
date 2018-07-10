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

var counter = 0;

    setInterval(() => {

counter++;

if (counter == headerCover.length) {
    counter = 0;
}

        $('#header').fadeTo('slow', 0.3, function()
        {
            $(this).css({
                'background-image': 'url(' + headerCover[counter] + ')'
            });
        }).fadeTo('slow', 1);

        }, 4000);

    });
    