

var mainState ={

preload :function() {
  this.load.image('food', 'assets/games/snake/food.png');
  this.load.image('body', 'assets/games/snake/body.png');
},
create :function() {
game.stage.backgroundColor = '#006344';
game.physics.stratSystem(Phaser.Physics.ARCADE);
game.world.enableBody = true;


//player
this.player = game.add.sprite(game.width/2, game.height-40, 'paddle');
this.player.anchor.setTo(0.5);
this.player.body.collideWorldBounds = true;
this.player.body.immovable = true;

this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);



this.ball = game.add.sprite(game.width/2, game.height/2, 'ball');
this.ball.anchor.setTo(0.5);
this.ball.body.collideWorldBounds = true;
this.ball.body.velocity.x = 300;
this.ball.body.velocity.y = 300;
this.ball.body.bounce.setTo(1);


},
update :function() {
  game.physics.arcade.collide([this.player, this.player2], this.ball);

       if(this.ball.y > this.player.y+20){
       game.state.start('main');
}

if(this.ball.y > this.player.y+20){
game.state.start('main');
}


     if(this.left.isDown){
      this.player.body.velocity.x = -300;
     }
     else if(this.right.isDown){
      this.player.body.velocity.x = 300;
     }
     else {
         this.player.body.velocity.x = 0;
     }
     if(this.leftP2.isDown){
      this.player2.body.velocity.x = -300;
     }
     else if(this.rightP2.isDown){
      this.player2.body.velocity.x = 300;
     }
     else {
         this.player2.body.velocity.x = 0;
     }
   }
 };


var game = new Phaser.Game(1024, 760);
