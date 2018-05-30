class Biker extends Sprite {
	constructor() {
		super({
			canvas: document.getElementById("biker-layer"),
			imageSrc: "app/img/biker_002.png",
			width: 100,
			height: 100,
			initialPosition: {
				x: 0,
				y: 250
			}
		});

		let me = this;
		me.animations = {
			wait: {
				numberOfFrames: 1,
				ticksPerFrame: 60,
				frameRow: 0
			},
			ride: {
				numberOfFrames: 8,
				ticksPerFrame: 4,
				frameRow: 0
			},
			jump: {
				numberOfFrames: 4,
				ticksPerFrame: 7,
				frameProps: [{index: 2, dy: 0}, {index: 3, dy: -20}, {index: 3, dy: -15}, {index: 3, dy: -5}, {index: 4, dy: 5}, {index: 4, dy: 15},{index: 4, dy: 20},{index: 5, dy: 0}],
				frameRow: 4,
				noRepeat: true
			},
			duck: {
				numberOfFrames: 7,
				ticksPerFrame: 4,
				frameRow: 1
			},
			unDuck: {
				numberOfFrames: 2,
				ticksPerFrame: 4,
				frameRow: 1,
				frameProps: [{index: 6, dy: 0}, {index: 7, dy: 0}],
				noRepeat: true
			},
			crash: {
				numberOfFrames: 8,
				ticksPerFrame: 7,
				frameRow: 2,
				noRepeat: true
			}
		};

		me.initialize();
	}

	initialize() {
		let me = this;
		window.addEventListener("load", function () {
			me.animate('wait');
		});
		document.addEventListener('keydown', function (e) {
			me.doWhatISay(e);
		});
		document.addEventListener('keyup', function (e) {
			me.doWhatISay(e);
		});
	}

	doWhatISay(e) {
		let me = this;

		if (e.type === 'keydown') {
			if (e.keyCode === 38) {
				me.nextAction = 'jump';
			} else if (e.keyCode === 40) {
				me.nextAction = 'duck';
			}
		} else {
			me.nextAction = 'ride';
		}

		if (e.repeat) {
			return
		}

		if (e.type === 'keydown') {
			if (e.keyCode === 38) {
				me.animate('jump');
			} else if (e.keyCode === 40) {
				me.animate('duck')
			} else if (e.keyCode === 37) {
				me.animate('crash');
			}
		} else {
			if (e.keyCode === 39) {
				me.animate('wait');
			} else if (e.keyCode === 40) {
				me.animate('unDuck');
			}
		}
	}
}