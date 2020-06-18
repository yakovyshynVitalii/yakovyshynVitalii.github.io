
// Плеєр в Albums

$('.player-example button').click(function () {
	var parent = $(this).parent();
	
	var button = $(this);
	var audio = $('audio', parent)[0];
	
	$('.albums_button').css('background', 'url(../last_exam/img/media-fast-forward-outline.png) ' ,`no-repeat`);
	
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
	
	document.addEventListener('play', function(e){
		var audios = document.getElementsByTagName('audio');
		for(var i = 0, len = audios.length; i < len;i++){
			if(audios[i] != e.target){
				audios[i].pause();
			}
		}
	}, true);
	
	
});
