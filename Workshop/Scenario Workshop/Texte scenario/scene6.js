class Scene5 extends Phaser.Scene {
    constructor() {
        super("Scene_6");
    }

   preload() {

	}

	create() {
  this.cursors = this.input.keyboard.createCursorKeys();
  this.text = this.add.text(50,150,'Bravo vous avez reussi! Vous pouvez maintenant entrer dans une nouvelle ');
  this.text = this.add.text(50,170,'annee importante pour l histoire de jeu video.');
  this.text = this.add.text(50,190,'Attention a vous, ce niveau est la plus complique de tous...');
  this.text = this.add.text(50,210,'Bon courage !');
  this.cursors = this.input.keyboard.createCursorKeys();


	}

  update() {

		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_7');
		}
	}

}
