//menu

function openMenu(){
    document .getElementById('navbar').style.width = "100%";
}

function closeMenu(){
    document .getElementById('navbar').style.width = "0%";
}

//smooth scroll

$('.next-section a, .menu-container ul li a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});
//mix it up
var mixer = mixitup('.work-grid');

//wow
new WOW({
    mobile : false
}).init();