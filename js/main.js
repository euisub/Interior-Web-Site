
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})



// $('.best-list').slick({
//   slidesToShow: 4,
//   // slidesToScroll: 1,
// });

$(function(){
  $('.nev-btn').click(function(){
    $(this).toggleClass('active')
    $('.dropdown').toggleClass('dropdown-active')
  })

  $('.mobile-footer-button').click(function(){
    $(".mobile-info").toggleClass('mobile-active')
    $('.mobile-button-toggle-1').toggleClass('mobile-toggle')
  })

  $('.mobile-footer-button-2').click(function(){
    $(".mobile-info-2").toggleClass('mobile-active')
    $('.mobile-button-toggle-2').toggleClass('mobile-toggle')
  })
})



  $('.main-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
  }
  );

$('.promotion-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
  });


  $('.new-list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
  });





/* mobile */

$('.mobile-promotion-list').slick({
  // slidesToShow: 1,
  // slidesToScroll: 1,
});

$('.mobile-new-list').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
});

$('.mobile-cafe-content').slick({
  // slidesToShow: 1,
  // slidesToScroll: 1,
});
