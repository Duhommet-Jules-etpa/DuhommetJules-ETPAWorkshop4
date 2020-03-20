class Scene3 extends Phaser.Scene {
    constructor() {
        super("Scene_4");
    }

    init(data){

	}

   preload() {

	}

	create() {
    this.text = this.add.text(50,150,'Bravo vous avez reussi!Vous pouvez maintenant entrez dans une nouvelle ');
    this.text = this.add.text(50,170,'annee importante pour l histoire de jeu video.');
    this.text = this.add.text(50,190,'Ce jeu est mondialement connu et il se passe dans l espace...');
    this.text = this.add.text(50,210,'Bon courage !');
    this.cursors = this.input.keyboard.createCursorKeys();

	}

	update() {

		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_5');
		}
	}

}
