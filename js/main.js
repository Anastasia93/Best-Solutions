/*--------------------------------------------------------------*/
/*-- JS Document --*/
/*--------------------------------------------------------------*/
(function($) {

        $(document).ready(function() {

            // scroll to 0px on click
            $('#back-to-top').click(function () {
                $('body,html').animate({
                        scrollTop: 0
                }, 1000);
                return false;
            });
            /*------------------------------------------------------*/
            /*---- Scroll Menu -----*/
            /*------------------------------------------------------*/
            	$(".main-menu").on("click","a", function (event) {
		            event.preventDefault();
		            var id  = $(this).attr('href'),
		            top = $(id).offset().top;
		
		            $('body,html').animate({scrollTop: top}, 500);
	           });
            
            /*------------------------------------------------------*/
            /*---- Responsive Slider -----*/
            /*------------------------------------------------------*/
            
            $(".slider-list").responsiveSlides({     
                nav: true,    
                nextText: "<i class='fa fa-chevron-left'></i>",
                prevText: "<i class='fa fa-chevron-right'></i>",                        
              });
            $( ".rslides_nav.prev" ).attr("title", "Next")
            $( ".rslides_nav.next" ).attr("title", "Previous")
            /*------------------------------------------------------*/
            /*---- Window Scroll -----*/
            /*------------------------------------------------------*/
            $(window).scroll(function(){
                // Fade Back-to-top button
                if ($(this).scrollTop() > 500) {
                        $('#back-to-top').fadeIn();
                } else {
                        $('#back-to-top').fadeOut();
                }
            });

        });

})(jQuery);