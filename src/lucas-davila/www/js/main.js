


var $titles = $('.titles')

$titles.textillate({
	selector: '.texts',
	loop: $('.titles li').length > 1,
	minDisplayTime: 5000,
	initialDelay: 200,
	autoStart: true,
	inEffects: [],
	outEffects: [],
	in: {
		effect: 'fadeInUp',
		delayScale: 1.5,
		delay: 50,
		sync: true,
		reverse: false,
		callback: function () {}
	},
	out: {
		effect: 'fadeOutUp',
		delayScale: 1.5,
		delay: 50,
		sync: true,
		shuffle: false,
		reverse: false,
		callback: function () {}
	},
	callback: function () {},
	type: 'word'
});

$titles.on('start.tlt', function () {
	$('.down-arrow').addClass('play');
});
