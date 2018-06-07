class Rock extends Sprite {
	constructor(pos, type) {

		if (type===1 || type===2){
			if (type ===1 ){
				type = 0
			} else{
				type = 100
			}
		} else {
			type = 0
		}

		super({
			canvas: document.getElementById("obstacle-layer"),
			imageSrc: "app/img/environment_sheet.png",
			width: 100,
			height: 90,
			origin: {x: type, y: 128},
			initialPosition: {
				x: pos,
				y: 225
			}
		});
	}
}