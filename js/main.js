


 var btn = document.getElementById('btn');
 btn.onclick = function() {
    
     var text = document.querySelector('p.header-text');
     text.classList.add('red');
     var img = document.querySelector('.img-worl');
     img.style.display = 'none';
     document.querySelector('')
 };

$(function() {
   $(window).scroll(function() {
        $('.title').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInDown")
            }
        })
    });
});

$(function() {
    $(window).scroll(function() {
         $('.item_01').each(function() {
             var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("fadeInLeft")
             }
         })
     });
 });
 $(function() {
    $(window).scroll(function() {
         $('.item_03').each(function() {
             var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("fadeInRight")
             }
         })
     });
 });

 $(function() {
    $(window).scroll(function() {
         $('.name').each(function() {
             var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("fadeInRight")
             }
         })
     });
 });

 $(function() {
    $(window).scroll(function() {
         $('.tel').each(function() {
             var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("fadeInRight")
             }
         })
     });
 });

 $(function() {
    $(window).scroll(function() {
         $('.email').each(function() {
             var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("fadeInLeft")
             }
         })
     });
 });

 $(function() {
    $(window).scroll(function() {
         $('.text').each(function() {
             var imagePos = $(this).offset().top;
 
             var topOfWindow = $(window).scrollTop();
             if (imagePos < topOfWindow+650) {
                 $(this).addClass("fadeInLeft")
             }
         })
     });
 });