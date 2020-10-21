$(document).ready(function(){
    //Xử lý slider home
    let $carousel = $('.slider-wrap') ;
    $carousel.flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        on: {
            ready: function() {
                let dotted = $('.flickity-page-dots'),
                paging = $('#home .dotted');
                dotted.appendTo(paging);
            }
        }
      });

      $('.btn-pre-next .previous').on( 'click', function() {
        $carousel.flickity('previous');
      });

      $('.btn-pre-next .next').on( 'click', function() {
        $carousel.flickity('next');
      });

      $carousel.on( 'change.flickity', function( event, index ) {
        console.log( 'Slide changed to ' + index )
      });




      //Xử lý Fake scrollspy 
      let navLink = $('nav ul li a'),
        navH = $('nav').height(),
        section = $('section'),

        documentEle = $(document);

        documentEle.on('scroll', function() {
            
            let currentScroll = documentEle.scrollTop();

            section.each(function(){
                let self = $(this);
                if ((self.offset().top < (currentScroll + navH)) && ((currentScroll + navH) < (self.offset().top + self.outerHeight()))){
                    let targetClass = '.' + self.attr('class') + '-maker';
                    navLink.removeClass( 'active');
                    $(targetClass).addClass( 'active'); 
                }
            });
        });

        //Xử lý videos
        let video_link = document.querySelector('.video .video__link');
        let video = document.querySelector('.video .video__link iframe');

        document.querySelectorAll('.video .video__content .play').forEach(function(e){
            e.addEventListener('click', function(){
                let videoID = this.getAttribute('dataID');
                video.setAttribute('src', 'https://www.youtube.com/embed/' + videoID)
                video_link.style.display = 'flex';
            })
        })

        document.querySelector('.video .close').addEventListener('click', function(){
            video_link.style.display = 'none';
            video.setAttribute('src', ' ')
        })



        //example

        const slider = document.querySelector('.testimoninal .slider');
        let sectionIndex = 0;

        document.querySelectorAll('.testimoninal .control ul li').forEach(function(indicator, ind){
          indicator.addEventListener('click', function(){
            sectionIndex = ind;
            document.querySelector('.testimoninal .control .active').classList.remove('active');
            indicator.classList.add('active');
            slider.style.transform = 'translate('+ (sectionIndex) * (-25) + '%)';
          })
        })



        //Back to scrollTop
        let backToTop = document.querySelector('.btt .wrap');
        window.addEventListener('scroll', function(){
          if (window.pageYOffset > 200) {
            backToTop.classList.add('active');
          } else
          {
            backToTop.classList.remove('active');
          }
        })
});