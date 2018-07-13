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

        // Footer

        const footerIconClasses = [
            'fa fa-envelope fa-2x',
            'fa fa-facebook fa-2x',
            'fa fa-twitter fa-2x',
            'fa fa-instagram fa-2x'
        ];

        const footerHrefs = [
            'https://www.gmail.com',
            'https://www.facebook.com',
            'https://www.twitter.com',
            'https://www.instagram.com'
        ];

        let listOfIcons = '';

        for (let i = 0; i < footerIconClasses.length; i++) {
            listOfIcons += `<a href=${footerHrefs[i]} target="_blank"><li class="listIcon"><i class="${footerIconClasses[i]}" aria-hidden="true"></i></li></a>`;
        }

        $(".contactIcons").append(listOfIcons);

    });
    