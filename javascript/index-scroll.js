$(function() {
    // Only trigger .click() event when the link points to an internal anchor
    $("header a[href^='#']").click(function(e) {

        // Get the ID of the target
        var target = $(this).attr("href");

        // Animated scrolling to the vertical offset of the target element
        // PLUS the outer height of the <header> element
        $("html, body").animate({
            scrollTop: $(target).offset().top //- $("header").outerHeight()
        });

        // Prevent default scrolling action
        // (I didn't use return false, because it stops event bubbling, too)
        e.preventDefault();
    });
});




