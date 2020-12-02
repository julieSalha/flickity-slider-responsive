    // Initialization slideshow
    const mySlideshow = new Flickity( document.querySelector('.myslideshow'), {
        "freeScroll": "true",
        "cellAlign": "left",
        "contain": true,
        "percentPosition": false,
        "prevNextButtons": true,
        "groupCells": "4",
        "autoPlay": true,
        on: {
          ready: function() {
            // inject custom arrows
            //this.prevButton.element.innerHTML = '<svg fill="none" xmlns="http://www.w3.org/2000/svg">your svg</svg>';
            //this.nextButton.element.innerHTML = '<svg fill="none" xmlns="http://www.w3.org/2000/svg">your svg</svg>';
          }
        }
      });
  
      // Media Queries Slideshow
      const mediaTablet = window.matchMedia("(max-width: 1023px)");
      const mediaDesk = window.matchMedia("(min-width: 1024px)");
  
      const disableSlideshow = () => {
        if (document.querySelector('.myslideshow').classList.contains('flickity-enabled')) {
          if(document.querySelector('.myslideshow .product-template__container')) {
            document.querySelector('.myslideshow .product-template__container').classList.toggle('initial');
          }
          if(document.querySelector('.myslideshow .flickity-slider')) {
            document.querySelector('.myslideshow .flickity-slider').classList.toggle('disabled');
          }
          if(document.querySelector('.myslideshow .flickity-page-dots')) {
            document.querySelector('.myslideshow .flickity-page-dots').classList.add('hidden');
          }
          if (document.querySelectorAll('.myslideshow .flickity-prev-next-button')) {
            document.querySelectorAll('.myslideshow .flickity-prev-next-button').forEach(button => {
              button.classList.add('hidden');
            })
          }
          document.querySelector('.myslideshow').classList.remove('flickity-enabled');
          document.querySelectorAll('.grid__item').forEach(item => {
            item.classList.add('grid__item--no-slideshow');
          })
        }
      };
  
      const enableSlideshow = () => {
        if (document.querySelector('.myslideshow .product-template__container')) {
          document.querySelector('.myslideshow .product-template__container').classList.remove('initial');
        }
        document.querySelector('.myslideshow .flickity-slider').classList.remove('disabled');
        document.querySelector('.myslideshow .flickity-page-dots').classList.remove('hidden');
        document.querySelectorAll('.myslideshow .flickity-prev-next-button').forEach(button => {
          button.classList.remove('hidden');
        });
        document.querySelectorAll('.grid__item').forEach(item => {
          if (item.classList.contains('grid__item--no-slideshow')) {
            item.classList.remove('grid__item--no-slideshow');
          }
        });
        if (!document.querySelector('.myslideshow').classList.contains('flickity-enabled')) {
          document.querySelector('.myslideshow').classList.add('flickity-enabled');
        }
      };
  
      // Loading
      if(mediaTablet.matches) {
        disableSlideshow();
      }
  
      if(mediaDesk.matches) {
        enableSlideshow();
      }
  
      // Resize event
      mediaTablet.addListener(function(m) {
        if(m.matches) {
          disableSlideshow();
        }
      });
  
      mediaDesk.addListener(function(m) {
        if(m.matches) {
          enableSlideshow();
        }
      });