class Scene0 extends Phaser.Scene {
    constructor() {
        super("Scene_1");
    }

   preload() {

	}

	create() {
    this.text = this.add.text(50,100,'Initialisation de la sequence.');
    this.text = this.add.text(50,150,'Chargement des ressources...');
    this.text = this.add.text(50,200,'Preparez vous le jeu va commencer...');
		this.cursors = this.input.keyboard.createCursorKeys();

	}

	update() {
		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_2', {nombreVie: this.nombreVie, score: this.score});
		}
	}

}
