
// Плеєр в Albums

$('.player-example button').click(function () {
	var parent = $(this).parent();
	
	var button = $(this);
	var audio = $('audio', parent)[0];
	var duration = $('.player-example-duration', parent);
	
	
	if (audio.paused == false) {
		audio.pause();
		button.css('background', 'url(../last_exam/img/media-fast-forward-outline.png) ' ,`no-repeat`);
	} else {
		audio.play();
		button.css('background', 'url(../last_exam/img/media-pause-outline.png) ,no-repeat' ,`no-repeat`);
	}
	
	
	$(audio).on('ended', function() {
		button.css('background', 'url(../last_exam/img/media-fast-forward-outline.png)' ,`no-repeat`);
	});
	
	$(audio).on('timeupdate', function() {
		var date = new Date(audio.currentTime * 1000);
		duration.html(date.getMinutes()+':'+date.getSeconds());
	});
});



