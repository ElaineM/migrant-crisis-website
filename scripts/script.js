


// var selected_option = $('.styled-select');

// selected_option.onchange = function() {
// 	var selected = this.options[this.selectedIndex].value;
//   console.log(selected);
// }

function getVal(changeVal){
	var selected = changeVal.value; 
	console.log(changeVal.value);

	if (selected == "Germany" || selected == "seventyfiveThou" || selected == "Pakistan" || selected == "ten") {
		$('.wrong-answer').removeClass('expand');
		$('.story').addClass('expand');

	} else {
		$('.story').removeClass('expand');
		$('.wrong-answer').addClass('expand');
	}
}

$(function(){
 
  $('.fa-arrow-circle-down').each(function(i) {
      $(this).delay((i + 1) * 1050).fadeIn(5000);
  });

  $('.fa-arrow-circle-down').click(function(){
    var target = $('.cd-section');
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 750);
    return false;
    });

  });


