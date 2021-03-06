$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-action').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-action').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({'left': '1020px'}, 500, function() {
			$(this).hide();
			$(this).css('left', '-180px');
		});
	}) 
	.mouseup(function() {
		//return ryu to ready position
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 88) {
			$('.ryu-action').hide();
			$('.ryu-cool').show()
		}
	}).keyup(function(e) {
		if (e.keyCode === 88) {
			$('.ryu-still').show();
			$('.ryu-cool').hide()
		}
	})
});
function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}