/**
 * Created by huyquan on 8/9/15.
 */
$(function () {
    SyntaxHighlighter.all();
});
$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "fade",
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });
});