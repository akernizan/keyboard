var melody = [];

var a = new Audio('../audio/a_note.mp3');
var b = new Audio('../audio/b_note.mp3');
var c = new Audio('../audio/c_note.mp3');
var d = new Audio('../audio/d_note.mp3');
var e = new Audio('../audio/e_note.mp3');
var f = new Audio('../audio/f_note.mp3');
var g = new Audio('../audio/g_note.mp3');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');

var play = document.getElementById('play-back');
var clear = document.getElementById('start-over');

one.addEventListener('click', function () {
	a.currentTime = 0;
	a.play();

	melody.push(a);
})

two.addEventListener('click', function () {
	b.currentTime = 0;
	b.play();

	melody.push(b);
})

three.addEventListener('click', function () {
	c.currentTime = 0;
	c.play();

	melody.push(c);
})

four.addEventListener('click', function () {
	d.currentTime = 0;
	d.play();

	melody.push(d);
})

five.addEventListener('click', function () {
	e.currentTime = 0;
	e.play();

	melody.push(e);
})

six.addEventListener('click', function () {
	f.currentTime = 0;
	f.play();

	melody.push(f);
})

seven.addEventListener('click', function () {
	g.currentTime = 0;
	g.play();

	melody.push(g);
})

play.addEventListener('click', function () {
	var current = 0;
	//	for (var i = 0; i < melody.length; i++) {
	//		melody[i].currentTime = 0;
	//		melody[i].play();
	//	}

	if (current < melody.length) {
		melody[current].addEventListener('ended', function () {
			current++;
			melody[current];
			console.log(melody[current]);
		})
	} else {
		current = 0;
	}
})

clear.addEventListener('click', function () {
	melody = [];
})