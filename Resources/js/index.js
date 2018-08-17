$(document).ready(() => {

    if($(window).innerHeight() > 100) { 
      
        $(".innerUl").css({top: + "30px"});

      } else {

        $(".innerUl").css({top:  "90px"});

      }

     // Footer

    //  const footerIconClasses = [
    //     'fa fa-envelope fa-2x',
    //     'fa fa-facebook fa-2x',
    //     'fa fa-twitter fa-2x',
    //     'fa fa-instagram fa-2x'
    // ];

    // const footerHrefs = [
    //     'https://www.gmail.com',
    //     'https://www.facebook.com',
    //     'https://www.twitter.com',
    //     'https://www.instagram.com'
    // ];

    // let listOfIcons = '';

    // for (let i = 0; i < footerIconClasses.length; i++) {
    //     listOfIcons += `<a href=${footerHrefs[i]} target="_blank"><li class="listIcon"><i class="${footerIconClasses[i]}" aria-hidden="true"></i></li></a>`;
    // }

    // $(".contactIcons").append(listOfIcons);


    });


     
 


        /* Slider */

    
        const dataColors = [
            'lightblue',
             'firebrick',
             'violet',
             'lightgreen',
             'tomato',
             'forestgreen',
             'blue',
             'pink',
             'orange',
             'purple'
         ];
     
         
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
     
         let getCover = '';
     
         for (let i = 0; i < headerCover.length; i++) {
     
         getCover += ` <div class="item">
                         <img class="changeCover" src="${headerCover[i]}" class="sliderImg" data-color="${dataColors[i]}" alt="Image">
                 </div>`;
     
     }
     
         $(".carousel-inner").append(getCover);
     
     
     
    //      /* Make a rounded list */
     
    //      let carouselList = '';
     
    //      for (let i = 0; i < headerCover.length; i++) {
     
    //      if (i == 0) {
    //          carouselList += `<li data-target="#mycarousel" data-slide-to="${[i]}" class="active"></li>`;
    //      }
    //      else {
    //          carouselList += `<li data-target="#mycarousel" data-slide-to="${[i]}"></li>`;
    //      }
     
    //  }
     
    //      $(".carousel-indicators").append(carouselList);
     
     
     
         /* Slider Controls */
     
    //      var $item = $('.carousel .item'); 
    //      var $wHeight = "93vh";
    //      $item.eq(0).addClass('active');
    //      $item.height($wHeight); 
    //      $item.addClass('full-screen');
     
    //      $('.carousel .changeCover').each(function() {
    //      var $src = $(this).attr('src');
    //      var $color = $(this).attr('data-color');
    //      $(this).parent().css({
    //      'background-image' : 'url(' + $src + ')',
    //      'background-color' : $color,
    //      "background-attachment": "fixed",
    //      "background-position": "center",
    //      "background-repeat": "no-repeat",
    //      "background-size": "cover"
    //    });
    //      $(this).remove();
    //  });
     
    //      $('.carousel').carousel({
    //      interval: 5000,
    //      pause: "false"
    //  });
     


    // Modal

  var modal = document.getElementById('myModal');
  
  // Close modal when you press X
  $(".closeModal").click(function() {
    $("#myModal").fadeOut();
    //modal.style.display = "none";
  });

  // Close modal when you click anywhere on window
  window.onclick = function(event) {
      if (event.target == modal) {
        $("#myModal").fadeOut();       
      }
  }
  