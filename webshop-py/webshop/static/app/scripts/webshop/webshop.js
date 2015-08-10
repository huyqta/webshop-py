/**
 * Created by huyquan on 8/9/15.
 */
//$(function () {
//    SyntaxHighlighter.all();
//});
//$(window).load(function () {
//    $('.flexslider').flexslider({
//        animation: "fade",
//        start: function (slider) {
//            $('body').removeClass('loading');
//        }
//    });
//});

//jQuery(document).ready(function ($) {
//    //Reference http://www.jssor.com/development/slider-with-slideshow-jquery.html
//    //Reference http://www.jssor.com/development/tool-slideshow-transition-viewer.html
//
//    var _SlideshowTransitions = [
//        //Fade
//        {
//            $Duration: 800,
//            $Delay: 300,
//            $Cols: 8,
//            $Rows: 4,
//            $Clip: 15,
//            $SlideOut: true,
//            $Formation: $JssorSlideshowFormations$.$FormationSquare,
//            $Easing: $JssorEasing$.$EaseOutQuad
//        },
//        {
//            $Duration: 1200,
//            y: -0.6,
//            $Zoom: 1,
//            $Easing: {
//                $Top: $JssorEasing$.$EaseInCubic,
//                $Zoom: $JssorEasing$.$EaseInCubic,
//                $Opacity: $JssorEasing$.$EaseOutQuad
//            },
//            $Opacity: 2
//        },
//        {
//            $Duration: 1200,
//            y: 4,
//            $Zoom: 11,
//            $Rotate: 1,
//            $Easing: {
//                $Top: $JssorEasing$.$EaseInCubic,
//                $Zoom: $JssorEasing$.$EaseInCubic,
//                $Opacity: $JssorEasing$.$EaseOutQuad,
//                $Rotate: $JssorEasing$.$EaseInCubic
//            },
//            $Opacity: 2,
//            $Round: {$Rotate: 0.7}
//        },
//        {$Duration: 1800, x: 1, y: 0.2, $Delay: 30, $Cols: 10, $Rows: 5, $Clip: 15}
//    ];
//
//    var options = {
//        //$AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
//        //$AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
//        //$AutoPlayInterval: 1000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
//        //$PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for
//        $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
//
//        $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
//        $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
//        $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
//        $AutoPlayInterval: 1500,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
//        $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
//            $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
//            $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
//            $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
//            $ShowLink: true                                    //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
//        },
//        $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
//            $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
//            $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
//            $AutoCenter: 0,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
//            $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
//            $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
//            $SpacingX: 10,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
//            $SpacingY: 10,                                   //[Optional] Vertical space between each item in pixel, default value is 0
//            $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
//        },
//        $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
//            $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
//            $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
//            $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
//            $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
//        }
//    };
//
//    var jssor_slider1 = new $JssorSlider$("slider1_container", options);
//
//    //responsive code begin
//    //you can remove responsive code if you don't want the slider scales
//    //while window resizes
//    function ScaleSlider() {
//        var parentWidth = $('#slider1_container').parent().width();
//        if (parentWidth) {
//            jssor_slider1.$ScaleWidth(parentWidth);
//        }
//        else
//            window.setTimeout(ScaleSlider, 30);
//    }
//
//    //Scale slider after document ready
//    ScaleSlider();
//
//    //Scale slider while window load/resize/orientationchange.
//    $(window).bind("load", ScaleSlider);
//    $(window).bind("resize", ScaleSlider);
//    $(window).bind("orientationchange", ScaleSlider);
//    //responsive code end
//
//});


////responsive code begin
////you can remove responsive code if you don't want the slider scales while window resizes
//function ScaleSlider() {
//    var bodyWidth = document.body.clientWidth;
//    if (bodyWidth)
//        jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
//    else
//        window.setTimeout(ScaleSlider, 30);
//}
//ScaleSlider();
//
//$(window).bind("load", ScaleSlider);
//$(window).bind("resize", ScaleSlider);
//$(window).bind("orientationchange", ScaleSlider);

//$(window).load(function () {
//    $('#slider').nivoSlider({
//        effect: 'random',               // Specify sets like: 'fold,fade,sliceDown'
//        slices: 15,                     // For slice animations
//        boxCols: 8,                     // For box animations
//        boxRows: 4,                     // For box animations
//        animSpeed: 500,                 // Slide transition speed
//        pauseTime: 3000,                // How long each slide will show
//        startSlide: 0,                  // Set starting Slide (0 index)
//        directionNav: true,             // Next & Prev navigation
//        directionNavHide:false,         // Only show on hover
//        controlNav: false,               // 1,2,3... navigation
//        pauseOnHover: true,             // Stop animation while hovering
//        manualAdvance: false,           // Force manual transitions
//        prevText: '',                 // Prev directionNav text
//        nextText: '',                 // Next directionNav text
//        randomStart: false,             // Start on a random slide
//        controlNavThumbs: false,        // Use thumbnails for Control Nav
//        controlNavThumbsFromRel: false, // Use image rel for thumbs
//        controlNavThumbsSearch: '.jpg', // Replace this with...
//        controlNavThumbsReplace: '_thumb.jpg', //...this in thumb Image src
//        keyboardNav: true,              // Use left & right arrows
//        captionOpacity: 1,              // Universal caption opacity
//        beforeChange: function () {
//        },     // Triggers before a slide transition
//        afterChange: function () {
//        },         // Triggers after a slide transition
//        slideshowEnd: function () {
//        },     // Triggers after all slides have been shown
//        lastSlide: function () {
//        },         // Triggers when last slide is shown
//        afterLoad: function () {
//        }         // Triggers when slider has loaded
//    });
//});
$(window).load(function () {
    var owl = $('.owl-carousel');

    owl.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navRewind: true,
        smartSpeed:450
//        animateOut: 'fadeOutRight',
//        animateIn: 'fadeInLeft'
//        margin: 10,
//        responsiveClass: true,
//        responsive: {
//            0: {
//                items: 1,
//                nav: true
//            },
//            600: {
//                items: 3,
//                nav: false
//            },
//            1000: {
//                items: 5,
//                nav: true,
//                loop: false
//            }
//        }
    });


    // Go to the next item
    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.owl-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel');
    })
});