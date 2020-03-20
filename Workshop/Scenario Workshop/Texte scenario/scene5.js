class Scene4 extends Phaser.Scene {
    constructor() {
        super("Scene_5");
    }

   preload() {

	}

	create() {

      this.text = this.add.text(250,50,'Bienvenue en 1978 a la sortie de Space Invaders');
      this.text = this.add.text(150,70,'(texte s affichant a la base une fois avoir fini le jeu Pong )');
  		this.text = this.add.text(50,150,'Space Invaders est un shoot them up fixe en deux dimensions.');
      this.text = this.add.text(50,170,'Le joueur controle un canon laser qu il peut deplacer');
      this.text = this.add.text(50,190,'horizontalement, au bas de l ecran. Dans les airs, des rangees');
      this.text = this.add.text(50,210,'d aliens se deplacent de gauche a droite tout en se rapprochant');
      this.text = this.add.text(50,230,'progressivement du sol et en lancant des missiles. L objectif');
      this.text = this.add.text(50,250,'est de detruire avec votre arme des vagues ennemies, qui');
      this.text = this.add.text(50,270,'se composent de cinq rangees de onze aliens chacunes, avant');
      this.text = this.add.text(50,290,'qu elles n atteignent le bas de l ecran.Le joueur gagne des points');
      this.text = this.add.text(50,310,'a chaque fois qu il detruit un envahisseur. Le jeu n autorise');
      this.text = this.add.text(50,330,'qu un tir a la fois et permet d annuler ceux des ennemis en');
      this.text = this.add.text(50,350,'tirant dessus.');
      this.cursors = this.input.keyboard.createCursorKeys();

	}

	update() {
		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_6', {nombreVie: this.nombreVie, score: this.score});
		}
	}

}
