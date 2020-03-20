class Scene10 extends Phaser.Scene {
    constructor() {
        super("Scene_11");
    }

   preload() {

	}

	create() {
    this.text = this.add.text(50,100,'Fermeture de la sequence.');
    this.text = this.add.text(50,150,'Destruction des ressources...');
    this.text = this.add.text(50,175,'......');
    this.text = this.add.text(50,200,'Appuyez pour initialisez une nouvelle sequence');
		this.cursors = this.input.keyboard.createCursorKeys();

	}

	update() {
		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_1', {nombreVie: this.nombreVie, score: this.score});
		}
	}

}
