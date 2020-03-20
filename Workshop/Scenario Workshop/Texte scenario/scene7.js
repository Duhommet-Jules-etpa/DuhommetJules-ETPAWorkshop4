class Scene6 extends Phaser.Scene {
    constructor() {
        super("Scene_7");
    }

   preload() {

	}

	create() {

    this.text = this.add.text(250,50,'Bienvenue en 1983 a la sortie de Dragon s lair');
    this.text = this.add.text(40,70,'(texte s affichant a la base une fois avoir fini le jeu Space Invaders)');
    this.text = this.add.text(50,130,'L enorme contraste du jeu avec les autres jeux d arcade de l epoque');
    this.text = this.add.text(50,150,'a fait sensation lors de son apparition, et a ete joue si fortement que');
    this.text = this.add.text(50,170,'de nombreuses machines se sont souvent cassees en raison de la surutilisation.');
    this.text = this.add.text(50,190,'L ecran affiche des scènes animees et le joueur execute  ');
    this.text = this.add.text(50,210,'une action en selectionnant une direction ou en appuyant sur le bouton de');
    this.text = this.add.text(50,230,'l epee avec le bon timing. La comedie du jeu provenait non seulement des ');
    this.text = this.add.text(50,250,'maladresses de Dirk, meme si il semblait etre un chevalier qualifie,');
    this.text = this.add.text(50,270,'mais aussi de son habilite a crier et hurler de peur quant aux');
    this.text = this.add.text(50,290,'divers dangers qu il rencontre. C est un die and retry. Un jeu');
    this.text = this.add.text(50,310,'incluant une mecanique die and retry est qualifie comme tel quand l arret ');
    this.text = this.add.text(50,330,'de la partie peut survenir a tout moment, sans qu aucune indication');
    this.text = this.add.text(50,350,'n alerte le joueur sur un mauvais choix opere, rendant seul l echec alors ');
    this.text = this.add.text(50,370,'envisageable. Le joueur n a de choix que de terminer la partie ou mourir');
    this.text = this.add.text(50,390,'pour recommencer et agir ou réagir d une maniere differente de l echec  ');
    this.text = this.add.text(50,410,'precedent afin de progresser.');
    this.cursors = this.input.keyboard.createCursorKeys();
	}

  	update() {

  		if(this.cursors.up.isDown)
  		{
  			this.scene.start('Scene_8');
  		}
  	}

  }
