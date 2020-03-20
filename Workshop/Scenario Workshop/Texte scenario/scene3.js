class Scene2 extends Phaser.Scene {
    constructor() {
        super("Scene_3");
    }

   preload() {

	}

	create() {

  this.text = this.add.text(250,50,'Bienvenue en 1972 a la sortie de Pong');
  this.text = this.add.text(50,150,'Je me souviens a l epoque on allumait la machine: une boite ');
  this.text = this.add.text(50,170,'en plastique noire avec trois boutons et deux manettes reliees  ');
  this.text = this.add.text(50,190,'par des fils. Et puis on enclenchait la television. Une grille ');
  this.text = this.add.text(50,210,'decoupait l ecran qui n etait pas encore en couleur. De chaques ');
  this.text = this.add.text(50,230,'cotes, deux barres blanches faisaient office de raquettes. Elles ');
  this.text = this.add.text(50,250,'se renvoyaient un carre dont la vitesse augmentait a mesure');
  this.text = this.add.text(50,270,'que les echanges s acceleraient en faisant bip bip. C etait en');
  this.text = this.add.text(50,290,'1976. On jouait a Pong et on avait l impression de vivre dans');
  this.text = this.add.text(50,310,'un film de science-fiction. Dans votre classe de primaire, vous');
  this.text = this.add.text(50,330,'etiez le seul a posseder le premier appareil de l histoire a ');
  this.text = this.add.text(50,350,'s apparenter a une console de jeux video. Du coup, les ');
  this.text = this.add.text(50,370,'copains squattaient votre salon comme si le messie allait ');
  this.text = this.add.text(50,390,'apparaitre dedans.');
	this.cursors = this.input.keyboard.createCursorKeys();

	}

	update() {
		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_4', {nombreVie: this.nombreVie, score: this.score});
		}
	}

}
