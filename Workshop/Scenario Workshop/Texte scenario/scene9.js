class Scene8 extends Phaser.Scene {
    constructor() {
        super("Scene_9");
    }

   preload() {

	}

	create() {
    this.text = this.add.text(250,50,'Bienvenue un 1997 a la sortie de snake ');
   this.text = this.add.text(40,70,'(texte s affichant a la base une fois avoir fini le jeu Dragon s lair)');
    this.text = this.add.text(50,150,'Ultra Populaire, le principe du fameux jeu mobile, qui consiste a manier');
    this.text = this.add.text(50,170,'un serpent de plus en plus long dans un espace restreint en evitant');
    this.text = this.add.text(50,190,'de se fracasser contre un mur ou contre soi-meme, a ete maintes fois ');
    this.text = this.add.text(50,210,'copie, recopie, detourne... Et ce depuis ses origines, dans les annees');
    this.text = this.add.text(50,230,'1970. Car si Snake doit son boom de popularite a son implantation sur');
    this.text = this.add.text(50,250,'Nokia, la naissance du concept remonte, quant a elle, a pres de ');
    this.text = this.add.text(50,270,'quarante ans en ariere. Le grand avantage de snake etait que contrairement à ');
    this.text = this.add.text(50,290,'l arcade, le jeu est directement dans la poche. Snake incarne les valeurs');
    this.text = this.add.text(50,310,'cles du jeu sur mobile : des parties courtes pour occuper les temps morts');
    this.text = this.add.text(50,330,',une prise en main tres simple… Sans aucune concurrence a ce moment la.');
    this.text = this.add.text(50,350,'Au vu de la popularite du jeu, Nokia a continue a développer Snake, dont');
    this.text = this.add.text(50,370,'les versions ont evolue au fil des evolutions techniques des telephones.');
    this.text = this.add.text(50,390,'En 2004, une version 3D a meme vu le jour pour la console portable du ');
    this.text = this.add.text(50,410,'constructeur, la N-Gage.');
    this.cursors = this.input.keyboard.createCursorKeys();
	}

	update() {
		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_10', {nombreVie: this.nombreVie, score: this.score});
		}
	}

}
