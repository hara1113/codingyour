$(window).on('load scroll', function () {

  var box = $('.fadein');
  var animated = 'animated';

  box.each(function () {

    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if (scrollPos > boxOffset - wh + (wh / 2)) {
      $(this).addClass(animated);
    }
  });

});

$(function () {
  $('.faq-accordion:first').addClass('selected');
  $('#accordion > dt').on('click', function () {
    $(this).toggleClass('selected');
    $(this).next('dd').slideToggle();
  });
});



$(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    stagePadding: 70,
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      590: {
        items: 2,
      },
      1100: {
        items: 3,
      },
    },
  });
});


$(function () {
  $('.btn-gNav').on("click", function () {

    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
  });

});

// メニューをクリックされたら、非表示にする
$(function () {
  $('.gNav-menu li a').on("click", function () {
    $('#gNav').removeClass('open');
  });
});
