class Scene9 extends Phaser.Scene {
    constructor() {
        super("Scene_10");
    }

   preload() {

	}

	create() {

    this.text = this.add.text(50,150,'Bravo vous avez reussi tous les niveaux parfaitements! ');
    this.text = this.add.text(50,170,'J espere que vous avez aime jouer a ce jeu video et que vous avez appris des choses.');
    this.text = this.add.text(50,190,'vous avez appris des choses.');
    this.text = this.add.text(50,230,'Merci d avoir joue!');
    this.text = this.add.text(50,250,'A la prochaine');
    this.cursors = this.input.keyboard.createCursorKeys();

	}

	update() {
		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_11', {nombreVie: this.nombreVie, score: this.score});
		}
	}

}
