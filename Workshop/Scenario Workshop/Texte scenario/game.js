 var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: [Scene0, Scene1, Scene2,Scene3,Scene4,Scene5,Scene6,Scene7,Scene8,Scene9,Scene10],
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: true
		}
	}
};

var game = new Phaser.Game(config);
