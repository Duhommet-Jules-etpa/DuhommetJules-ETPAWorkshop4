
var player;
var platforms;
var keysdoors;
var key;
var door;
var hasKey = false;
var currentLevel = 1;
var leveldata;

var game = new Phaser.Game(1024, 768, Phaser.AUTO);

var playState = {};


playState.preload = function () {
    game.load.crossOrigin = "Platformer";
    game.load.spritesheet("player", "https://cdn.glitch.com/5d318c12-590d-47a1-b471-92a5dc0aae9d%2Fhero.png?1539353651099", 36, 42);
    game.load.spritesheet("enemy", "https://cdn.glitch.com/5d318c12-590d-47a1-b471-92a5dc0aae9d%2Fspider.png?1539353651634", 42, 32);
    game.load.image("background", "https://wallup.net/wp-content/uploads/2016/05/24/362482-Hyper_Light_Drifter-video_games-pixels.jpg");
    game.load.image("ground", "https://cdn.glitch.com/5d318c12-590d-47a1-b471-92a5dc0aae9d%2Fground.png?1539357516721");
    game.load.image("grass:4x1", "https://cdn.glitch.com/5d318c12-590d-47a1-b471-92a5dc0aae9d%2Fgrass_4x1.png?1539357516607");
    game.load.image("key", "https://cdn.glitch.com/5d318c12-590d-47a1-b471-92a5dc0aae9d%2Fkey.png?1539353651419");
    game.load.spritesheet('door', 'https://cdn.glitch.com/5d318c12-590d-47a1-b471-92a5dc0aae9d%2Fdoor.png?1539353650737', 42, 66);

};

playState.create = function () {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.enableBody = true;
    game.add.sprite(0, 0, "background");

    if (!currentLevel ||  currentLevel  ===1){
      leveldata = loadLevelOne();
    }
    else if (currentLevel  === 2 ){
      leveldata = loadLevelTwo();
    }
    if (!currentLevel ||  currentLevel  === 3){
      leveldata = loadLevelThree();
    }

    door.animations.add("open", [1, 2], 8);
    platforms = game.add.group();
    platforms.enableBody = true;

    keysdoors = game.add.group();
    keysdoors.enableBody = true;

    for (var i = 0; i < leveldata.platforms.length; i++) {
        var platform = platforms.create(leveldata.platforms[i].x, leveldata.platforms[i].y, leveldata.platforms[i].image);
        platform.body.immovable = true;
    }

    player = game.add.sprite(100, 200, "player");
    player.body.gravity.y = 500;
    player.body.collideWorldBounds = true;
};

var loadLevelOne = function(){
    var level1 = {"platforms":[{"image":"ground","x":600,"y":570},{"image":"grass:4x1","x":880,"y":500},{"image":"grass:4x1","x":730,"y":150},{"image":"grass:4x1","x":680,"y":450},{"image":"grass:4x1","x":400,"y":400},{"image":"ground","x":-250,"y":325},{"image":"grass:4x1","x":400,"y":240},{"image":"grass:4x1","x":150,"y":160},{"image":"grass:4x1","x":400,"y":90},{"image":"grass:4x1","x":125,"y":100}]};
  key = game.add.sprite(870,60,"key");
    door = game.add.sprite(600,510,"door");
    return level1;
};

var loadLevelTwo = function(){
  var level2 = {"platforms":[{"image":"grass:4x1","x":900,"y":700},{"image":"grass:4x1","x":430,"y":750},{"image":"grass:4x1","x":400,"y":670},{"image":"grass:4x1","x":30,"y":340},{"image":"grass:4x1","x":200,"y":300},{"image":"grass:4x1","x":320,"y":170},{"image":"grass:4x1","x":40,"y":100},{"image":"grass:4x1","x":420,"y":300}]};
  key = game.add.sprite(900,655,"key");
  door = game.add.sprite(430,610,"door");
  return level2;
};

var loadLevelThree= function(){
  var level3 = {"platforms":[{"image":"grass:4x1","x":-70,"y":380},{"image":"grass:4x1","x":-40,"y":440},{"image":"grass:4x1","x":-20,"y":520},{"image":"grass:4x1","x":0,"y":600},{"image":"grass:4x1","x":20,"y":680},{"image":"grass:4x1","x":100,"y":325},{"image":"grass:4x1","x":150,"y":325},{"image":"grass:4x1","x":200,"y":325},{"image":"ground","x":550,"y":750},{"image":"ground","x":250,"y":750},{"image":"ground","x":0,"y":750}]};
  key = game.add.sprite(900,400,"key");
  door = game.add.sprite(600,400,"door");
  return level3;
};

playState.update = function () {
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.overlap(player, key, hitKeys);
    game.physics.arcade.overlap(player, door, hitDoors);


    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      player.body.velocity.x = -300
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      player.body.velocity.x = 300;
    }
    else {
      player.body.velocity.x = 0;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && player.body.touching.down === true) {
      player.body.velocity.y = -300
    }

};

var hitKeys = function (player, key) {
    key.kill();
    hasKey = true;
};

var hitDoors = function (player, door) {
    if (hasKey === true){
      door.animations.play("open");
      hasKey = false;
      game.time.events.add(1000, nextLevel, this);
    }
};

var nextLevel = function(){
    if (currentLevel  < 3){
      currentLevel += 1;
      game.state.start("play", true, false, currentLevel);
    }
    else {
      currentLevel = 1;
      game.state.start("play", true, false, currentLevel);
    }
};
this._onLoop = function (time)
          {
              return _this.updateRAF(time);
          };
game.state.add("play", playState);
game.state.start("play");
