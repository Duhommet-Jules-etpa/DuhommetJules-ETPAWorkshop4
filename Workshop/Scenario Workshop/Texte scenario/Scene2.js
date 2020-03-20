class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene_2");
    }

   	init(data){

	}


   preload() {

	}

	create() {
    this.text = this.add.text(50,100,'Hallo...He Hooo...Vous m entendez...');
    this.text = this.add.text(50,150,'Ah tres bien le sequencage a bien fonctionne');
    this.text = this.add.text(50,200,'Bienvenue dans l Albinus jeune exploratrice!Nous allons parcourir ');
    this.text = this.add.text(50,220,'les annees pour rejouer aux jeux les plus connus.');
    this.text = this.add.text(50,250,'Je vous expliquerai l histoire de ces jeux et pourquoi ils ont ');
    this.text = this.add.text(50,270,'marque l histoire.Tu es prete...c est parti!');
  	this.cursors = this.input.keyboard.createCursorKeys();

	}

	update() {
		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_3', {nombreVie: this.nombreVie});
		}
	}

}
