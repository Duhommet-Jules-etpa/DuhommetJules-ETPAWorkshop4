class Scene2 extends Phaser.Game
            {
                constructor()
                {
                    super(1, 1, Phaser.AUTO, '',  null, false, false);

                    this.state.add('default', DefaultState, true);
                }
            }

            class DefaultState extends Phaser.State
            {
                init()
                {
                    this.game.custom = {};
                    this.game.custom.score = 0;
                    this.game.custom.scaling = 20;
                    this.game.custom.map = new Map(this.game);
                    this.game.custom.graphics = this.game.add.graphics(0,0);

                    this.game.time.desiredFps = 60;

                    this.game.custom.group = {};

                    let groupList = ['platform', 'alive', 'wall', 'door', 'lava', 'coin'];

                    groupList.forEach((group) =>
                    {
                        this.game.custom.group[group] = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
                    });
                }

                preload()
                {
                    this.game.load.spritesheet('platformer', 'data:image/gif;base64,R0lGODlhBwABAPcAAP//////zP//mf//Zv//M///AP/M///MzP/Mmf/MZv/MM//MAP+Z//+ZzP+Zmf+ZZv+ZM/+ZAP9m//9mzP9mmf9mZv9mM/9mAP8z//8zzP8zmf8zZv8zM/8zAP8A//8AzP8Amf8AZv8AM/8AAMz//8z/zMz/mcz/Zsz/M8z/AMzM/8zMzMzMmczMZszMM8zMAMyZ/8yZzMyZmcyZZsyZM8yZAMxm/8xmzMxmmcxmZsxmM8xmAMwz/8wzzMwzmcwzZswzM8wzAMwA/8wAzMwAmcwAZswAM8wAAJn//5n/zJn/mZn/Zpn/M5n/AJnM/5nMzJnMmZnMZpnMM5nMAJmZ/5mZzJmZmZmZZpmZM5mZAJlm/5lmzJlmmZlmZplmM5lmAJkz/5kzzJkzmZkzZpkzM5kzAJkA/5kAzJkAmZkAZpkAM5kAAGb//2b/zGb/mWb/Zmb/M2b/AGbM/2bMzGbMmWbMZmbMM2bMAGaZ/2aZzGaZmWaZZmaZM2aZAGZm/2ZmzGZmmWZmZmZmM2ZmAGYz/2YzzGYzmWYzZmYzM2YzAGYA/2YAzGYAmWYAZmYAM2YAADP//zP/zDP/mTP/ZjP/MzP/ADPM/zPMzDPMmTPMZjPMMzPMADOZ/zOZzDOZmTOZZjOZMzOZADNm/zNmzDNmmTNmZjNmMzNmADMz/zMzzDMzmTMzZjMzMzMzADMA/zMAzDMAmTMAZjMAMzMAAAD//wD/zAD/mQD/ZgD/MwD/AADM/wDMzADMmQDMZgDMMwDMAACZ/wCZzACZmQCZZgCZMwCZAABm/wBmzABmmQBmZgBmMwBmAAAz/wAzzAAzmQAzZgAzMwAzAAAA/wAAzAAAmQAAZgAAMwAAAOEIQFJykwD/nP/mQf9OAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAN0ALAAAAAAHAAEAAAgLALVh47Yt27VuAQEAOw==', 1, 1);
                }

                create()
                {
                    this.game.stage.backgroundColor = '#222f5d';

                    this.game.custom.cursors = this.game.input.keyboard.createCursorKeys();

                    this.game.custom.map.loadMap(0);

                    this.game.custom.text = this.game.add.text(this.game.custom.scaling, 3,
                        'Score : 0', { font: '12px Consolas', fill: '#ff00cf' });
                }
            }

            class Map
            {
                constructor(game)
                {
                    this.game = game;

                    this.currentMap = 0;

                    this.mapList =



                    [

                      [
                          '44444444444444444444',
                          '4                  4',
                          '4                  4',
                          '4                  4',
                          '4                  4',
                          '4            3     4',
                          '4                  4',
                          '4 3 6 1 6  4    5  4',
                          '44   444        5 44',
                          '4 0  1  6      44444',
                          '44444444422224444444',
                          '44444444444444444444',
                      ],



                        [
                            '4444444444444444444444444444444',
                            '4                             4',
                            '4        3                    4',
                            '4     61   16                 4',
                            '4      44444                  4',
                            '4   4  4     3          3     4',
                            '4     44                4     4',
                            '4    616                     54',
                            '4    444   444  6  1 6       54',
                            '4                4444      4444',
                            '40                         4444',
                            '4444444442222222222244444444444',
                        ],
                        [
                            '4444444444444444444444444444444444444444444444444',
                            '4                                            2444',
                            '2                                          324444',
                            '2 3  4   6  1 66 1  6                444444 44444',
                            '2  4     444444444444               4        4444',
                            '4      42           4      6   1  64   4    14444',
                            '4 4  2              44444  4  4  4   4      44444',
                            '4   44              422222222222244444      14444',
                            '4      4            4444444444446   1 6  6   4444',
                            '4        4          4444444444444444442    6  444',
                            '4 0    4          44444444444444444444446  1  544',
                            '4444224442222444444444444444444444444444424444444',
                            '4444444444444444444444444444444444444444444444444',
                        ],
                        [

                            '444444444444444444444444444444444',
                            '4    0 0  0   000   0 00 00 0   4',
                            '4                               4',
                            '4                             4 4',
                            '4  4     4     4       4        4',
                            '4                4              4',
                            '4                       4       4',
                            '4    4        4                 4',
                            '4                          4    4',
                            '4                               4',
                            '4                               4',
                            '444 444444 444444 444 44444444 44',
                            '4     61   6   616       61     4',
                            '4 16        616                 4',
                            '4   6  16     616   616    616  4',
                            '44444444 4444444 444444444 444444',
                            '4                 44  11 4      4',
                            '4     44   11   44       4   44 4',
                            '4                    444 11     4',
                            '4             44                4',
                            '4          44                   4',
                            '4         111               44  4',
                            '4  444244444444424444444444444444',
                            '4                               4',
                            '4                               4',
                            '4                2              4',
                            '4                2              4',
                            '4             2 42              4',
                            '4          2 42  2              4',
                            '4       2 42  2  2             54',
                            '4       2  2  2  2             54',
                            '444444444444444444444444444444444',



                        ],
                    ];
                }

                loadMap(index)
                {
                    for(let name in this.game.custom.group)
                    {
                        this.game.custom.group[name].removeAll(true);
                    }

                    this.game.custom.height = this.mapList[index].length
                                                    * this.game.custom.scaling;
                    this.game.custom.width = this.mapList[index][0].length
                                                    * this.game.custom.scaling;

                    this.game.scale.setGameSize(this.game.custom.width, this.game.custom.height);

                    this.mapList[index].forEach((line, lineIndex) =>
                    {
                        line.split('').forEach((element, index) =>
                        {
                            element = parseInt(element);

                            let x = index * this.game.custom.scaling;
                            let y = lineIndex * this.game.custom.scaling;

                            switch(element)
                            {
                                case 0 : this.game.custom.player = new Player(this.game, x, y);
                                    break;
                                case 1 : new Enemy(this.game, x, y);
                                    break;
                                case 2 : new Lava(this.game, x, y);
                                    break;
                                case 3 : new Coin(this.game, x, y);
                                    break;
                                case 4 : new Platform(this.game, x, y);
                                    break;
                                case 5 : new Door(this.game, x, y);
                                    break;
                                case 6 : new Wall(this.game, x, y);
                                    break;
                            }

                        });
                    });

                    this.currentMap = index;
                }
            }

            class Player extends Phaser.Sprite
            {
                constructor(game, x, y)
                {
                    super(game, x, y, 'platformer', 0);

                    this.game.custom.group.alive.add(this);

                    this.body.gravity.y = 700;

                    this.custom = {};
                    this.custom.speed = 100;
                    this.custom.jumpHeight = 300;
                    this.custom.jumpBuffer = 0;
                    this.custom.scaling = .7;

                    this.scale.setTo(this.game.custom.scaling * this.custom.scaling);
                    this.anchor.setTo(0, 1-1/this.custom.scaling);

                    this.body.setCircle(.5);
                }

                update()
                {
                    this.game.physics.arcade.collide(this, this.game.custom.group.platform);

                    if(this.body.touching.left || this.body.wasTouching.left)
                    {
                        this.body.position.x += .1;
                        return;
                    }
                    else if(this.body.touching.right || this.body.wasTouching.right)
                    {
                        this.body.position.x -= .1;
                        return;
                    }

                    if(this.body.touching.down) this.custom.jumpBuffer = 0;
                    else this.custom.jumpBuffer += 1;

                    this.body.velocity.x = 0;

                    if(this.game.custom.cursors.up.isDown)
                    {
                        if(this.body.touching.down
                            || (this.body.velocity.y > 0 && this.custom.jumpBuffer < 7))
                        {
                            this.body.velocity.y = -this.custom.jumpHeight;
                        }
                    }

                    if(this.game.custom.cursors.left.isDown)
                    {
                        this.body.velocity.x = -this.custom.speed;
                    }

                    if(this.game.custom.cursors.right.isDown)
                    {
                        this.body.velocity.x = this.custom.speed;
                    }
                }
            }

            class Enemy extends Phaser.Sprite
            {
                constructor(game, x, y)
                {
                    super(game, x, y, 'platformer', 1);

                    this.game.custom.group.alive.add(this);

                    this.body.immovable = true;

                    this.custom = {};
                    this.custom.scaling = .4;

                    this.scale.setTo(this.game.custom.scaling,
                        this.game.custom.scaling * this.custom.scaling);
                    this.anchor.setTo(0, 1-1/this.custom.scaling);

                    this.custom = {};
                    this.custom.direction = 1;
                    this.custom.speed = 50;
                }

                update()
                {
                    this.game.physics.arcade.collide(this.game.custom.player, this, () =>
                    {
                        this.game.custom.map.loadMap(this.game.custom.map.currentMap);
                    });

                    if(!this.game) return;

                    this.game.physics.arcade.collide(this, this.game.custom.group.platform);
                    this.game.physics.arcade.collide(this, this.game.custom.group.wall);
                    this.game.physics.arcade.collide(this, this.game.custom.group.alive);

                    this.body.velocity.x = this.custom.direction * this.custom.speed;

                    if(this.body.touching.left)
                    {
                        this.custom.direction = 1;
                    }
                    else if(this.body.touching.right)
                    {
                        this.custom.direction = -1;
                    }
                }
            }

            class Lava extends Phaser.Sprite
            {
                constructor(game, x, y)
                {
                    super(game, x, y, 'platformer', 2);

                    this.game.custom.group.lava.add(this);

                    this.body.immovable = true;

                    this.custom = {};
                    this.custom.scaling = .8;

                    this.scale.setTo(this.game.custom.scaling,
                        this.game.custom.scaling * this.custom.scaling);
                    this.anchor.setTo(0, 1-1/this.custom.scaling);
                }

                update()
                {
                    this.game.physics.arcade.overlap(this.game.custom.player, this, () =>
                    {
                        this.game.custom.map.loadMap(this.game.custom.map.currentMap);
                    });
                }
            }

            class Coin extends Phaser.Sprite
            {
                constructor(game, x, y)
                {
                    super(game, x, y, 'platformer', 3);

                    this.game.custom.group.coin.add(this);

                    this.scale.setTo(this.game.custom.scaling * .5);
                    this.anchor.setTo(.5);
                }

                update()
                {
                    this.game.physics.arcade.overlap(this.game.custom.player, this, () =>
                    {
                        this.game.custom.score += 10;

                        this.game.custom.text.setText('Score : ' + this.game.custom.score);

                        this.destroy();
                    });

                    this.angle += 2.5;
                }
            }

            class Platform extends Phaser.Sprite
            {
                constructor(game, x, y)
                {
                    super(game, x, y, 'platformer', 4);

                    this.game.custom.group.platform.add(this);

                    this.body.immovable = true;

                    this.scale.setTo(this.game.custom.scaling);
                }
            }

            class Door extends Phaser.Sprite
            {
                constructor(game, x, y)
                {
                    super(game, x, y, 'platformer', 5);

                    this.game.custom.group.door.add(this);

                    this.body.immovable = true;

                    this.scale.setTo(this.game.custom.scaling);
                }

                update()
                {
                    this.game.physics.arcade.overlap(this.game.custom.player, this, () =>
                    {
                        let map = this.game.custom.map;
                        let index = map.currentMap+1 >= map.mapList.length ? 0 : map.currentMap+1;
                        this.game.custom.map.loadMap(index);
                    });
                }
            }

            class Wall extends Phaser.Sprite
            {
                constructor(game, x, y)
                {
                    super(game, x, y, 'platformer', 6);

                    this.game.custom.group.wall.add(this);

                    this.body.immovable = true;

                    this.scale.setTo(this.game.custom.scaling);
                }
            }

            new Scene2();
