$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-55
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
	offset:70,
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


var ceyhun_url = "http://u.osu.edu/ozkaptan.1/";
var attila_url = "http://web.engr.oregonstate.edu/~yavuza/";
var jorge_url = "https://scholar.google.com/citations?user=r_7PjQoAAAAJ&hl=en";
var tam_url = "http://web.engr.oregonstate.edu/~nguyeta4/";
var viet_url ="https://scholar.google.com/citations?user=j6No-EcAAAAJ&hl=en";
var betul_url ="https://scholar.google.com/citations?user=6jLoEdAAAAAJ&hl=en";
var gabe_url = "https://ioe.engin.umich.edu/people/gabriel-hackebeil/";
var ozgur_url = "https://scholar.google.com/citations?user=MSBT_V4AAAAJ&hl=en";
var yeongjin_url = "http://people.oregonstate.edu/~jangye/";

$(document).ready(function(){
  $('.ceyhun').attr('href', ceyhun_url);
  $('.jorge').attr('href', jorge_url);
  $('.tam').attr('href', tam_url);
  $('.attila').attr('href', attila_url);
  $('.viet').attr('href', viet_url);
  $('.betul').attr('href', betul_url);
  $('.gabe').attr('href', gabe_url);
  $('.ozgur').attr('href', ozgur_url);
  $('.yeongjin').attr('href', yeongjin_url);
  
});
