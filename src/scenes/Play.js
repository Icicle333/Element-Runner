class Play extends Phaser.Scene{
    constructor(){
        super("playScene")
    }
    preload(){
        this.load.spritesheet('element', 'assets./Art/sprite_sheetElements.png')
    }
   create(){
        this.physics.world.setBounds()
        this.backGround = this.add.tileSprite(0, 0, 640, 480, 'tBDrop').setOrigin(0, 0)
        
        this.increaseSpeed = 1
        this.Player = new Player(this, 150, 300).setDepth(1)
        this.ob1 = new Obstacle(this).setScale(4)
        this.ob2 = new Obstacle(this).setScale(4)
        this.ob3 = new Obstacle(this).setScale(4)
        this.ob4 = new Obstacle(this).setScale(4)
        this.playerScore = 0
        this.highScore = 0;
        this.debufferTime = 50000
        this.ob = this.add.group([this.ob1, this.ob2, this.ob3, this.ob4])
        this.debuffer = true;
        this.physics.add.collider(this.Player, this.ob, (Player, ob) => {
            ob.y = -100
            if(Player.element != ob.element && this.debuffer == true){
                Player.health--
                console.log(Player.health)
                this.debuffer = false;
                if(Player.health < 1){
                    this.scene.start('GameOver')
                }
                this.timedEvent = this.time.addEvent({
                    delay: 5000,
                    callback: this.onEvent,
                    callbackScope: this,
                })  
            }
            if(Player.element == ob.element){
                this.playerScore++
                Player.health++
                this.timedEvent = this.time.addEvent({
                    delay: 1000,
                    callback: this.onEvent,
                    callbackScope: this,
                })  
            }
            ob.element = Phaser.Math.Between(0, 5)
        if(ob.element == 0){
            ob.element = 0
            ob.setTexture("fireBolt")
        }
        if(ob.element == 1){
            ob.element = 1
            ob.setTexture("lightningBolt")
        }
        if(this.ob1.element == 2){
            ob.element = 2
            ob.setTexture("earthBolt")
        }
        if(ob.element == 3){
            ob.element = 3
            ob.setTexture("iceBolt")
        }
         if(ob.element == 4){
            ob.element = 4
            ob.setTexture("waterBolt")
        }
         if(ob.element == 5){
            ob.element = 5
            ob.setTexture("windBolt")
        }
            
            
            
        })
        this.element1 = Phaser.Math.Between(0, 5)
        this.changeY1 = Phaser.Math.Between(1, 5)
        this.changeY2 = Phaser.Math.Between(1, 5)
        this.changeY3 = Phaser.Math.Between(1, 5)
        this.changeY4 = Phaser.Math.Between(1, 5)
        this.anims.create({
            key: 'run',
            frames: [
                {key: 'playerRun'},
                {key: 'playerRun2'},
                {key: 'playerRun'},
                {key: 'playerRun3'}
            ],
            frameRate: 5,
            repeat: -1
        })
        this.playerSprite = this.add.sprite(150, 300, 'playerRun')
        
        this.playerSprite.play('run')
        shiftLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        shiftRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        attack = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        this.playerScore = 0
        this.highScore = 0;
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor : '#dcb010',
            color: '#080806',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 150
        }

        this.score = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding / 15, "Score: "+ this.playerScore, scoreConfig)
        this.health = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding * 2, "Health: " + this.Player.health, scoreConfig)
        this.gameOver = false
        scoreConfig.fixedWidth = 0
        
        
    }
   update(){
    this.playerSprite.x = this.Player.x
    this.score.setText("Score: " + this.playerScore)
    this.health.setText("Health: " + this.Player.health)
    this.ob1.y += this.changeY1
    this.ob2.y += this.changeY2
    this.ob3.y += this.changeY3
    this.ob4.y += this.changeY4
    if(this.ob1.y > 600){
        this.ob1.y = -100
        this.changeY1 = Phaser.Math.Between(1, 2)
        this.ob1.x = 150
        this.ob1.element = Phaser.Math.Between(0, 5)
        if(this.ob1.element == 0){
            this.ob1.element = 0
            this.ob1.setTexture("fireBolt")
        }
        if(this.ob1.element == 1){
            this.ob1.element = 1
            this.ob1.setTexture("lightningBolt")
        }
        if(this.ob1.element == 2){
            this.ob1.element = 2
            this.ob1.setTexture("earthBolt")
        }
        if(this.ob1.element == 3){
            this.ob1.element = 3
            this.ob1.setTexture("iceBolt")
        }
         if(this.ob1.element == 4){
            this.ob1.element = 4
            this.ob1.setTexture("waterBolt")
        }
         if(this.ob1.element == 5){
            this.ob1.element = 5
            this.ob1.setTexture("windBolt")
        }
    }
    if(this.ob2.y > 600){
        this.ob2.y = -100
        this.changeY2 = Phaser.Math.Between(1, 2)
        
        
        this.ob2.x = 250
        this.ob2.element = Phaser.Math.Between(0, 5)
        if(this.ob2.element == 0){
            this.ob2.element = 0;
            this.ob2.setTexture("fireBolt")
        }
        if(this.ob2.element == 1){
            this.ob2.element = 1;
            this.ob2.setTexture("lightningBolt")
        }
        if(this.ob2.element == 2){
            this.ob2.element = 2;
            this.ob2.setTexture("earthBolt")
        }
        if(this.ob2.element == 3){
            this.ob2.element = 3;
            this.ob2.setTexture("iceBolt")
        }
         if(this.ob2.element == 4){
            this.ob2.element = 4;
            this.ob2.setTexture("waterBolt")
        }
         if(this.ob2.element == 5){
            this.ob2.element = 5;
            this.ob2.setTexture("windBolt")
        }
    }
    if(this.ob3.y > 600){
        this.ob3.y = -10
        this.changeY3 = Phaser.Math.Between(1, 2)
        
        this.ob3.x = 350
        this.ob3.element = Phaser.Math.Between(0, 5)
        if(this.ob3.element == 0){
            this.ob3.element = 0
            this.ob3.setTexture("fireBolt")
        }
        if(this.ob3.element == 1){
            this.ob3.element = 1
            this.ob3.setTexture("lightningBolt")
        }
        if(this.ob3.element == 2){
            this.ob3.element = 2
            this.ob3.setTexture("earthBolt")
        }
        if(this.ob3.element == 3){
            this.ob3.element = 3
            this.ob3.setTexture("iceBolt")
        }
         if(this.ob3.element == 4){
            this.ob3.element = 4
            this.ob3.setTexture("waterBolt")
        }
         if(this.ob3.element == 5){
            this.ob3.element = 5
            this.ob3.setTexture("windBolt")
        }
    }
    if(this.ob4.y > 600){
        this.ob4.y = -10
        this.ob4.changeY4 = Phaser.Math.Between(1, 2)
        this.ob4.x = 450
        this.ob4.element = Phaser.Math.Between(0, 5)
        if(this.ob4.element == 0){
            this.ob4.element = 0
            this.ob4.setTexture("fireBolt")
        }
        if(this.ob4.element == 1){
            this.ob4.element = 1
            this.ob4.setTexture("lightningBolt")
        }
        if(this.ob4.element == 2){
            this.ob4.element = 2
            this.ob4.setTexture("earthBolt")
        }
        if(this.ob4.element == 3){
            this.ob4.element = 3
            this.ob4.setTexture("iceBolt")
        }
         if(this.ob4.element == 4){
            this.ob4.element = 4
            this.ob4.setTexture("waterBolt")
        }
         if(this.ob4.element == 5){
            this.ob4.element = 5
            this.ob4.setTexture("windBolt")
        }
    }
    const scrollSpeed = 2;
    if(this.gameOver && Phaser.Input.Keyboard.JustDown(enterGame)){
        if(this.playerScore > this.highScore){
            this.highScore = this.playerScore
        }
        this.scene.restart()
    }

    this.Player.update()
    this.backGround.tilePositionY -= scrollSpeed
    
   
    if(this.Player.element == 0){
        this.Player.setTint(0xFF0000) 
        this.playerSprite.setTint(0xFF0000)        
    }
    if(this.Player.element == 1){
        this.Player.setTint(0xFFFF00)
        this.playerSprite.setTint(0xFFFF00)
    }
    if(this.Player.element == 2){
        this.Player.setTint(0x808080)
        this.playerSprite.setTint(0x808080)
    }
    if(this.Player.element == 3){
        this.Player.setTint(0x03FCE8)
        this.playerSprite.setTint(0x03FCE8)
    }
    if(this.Player.element == 4){
        this.Player.setTint(0x00008B)
        this.playerSprite.setTint(0x00008B)
    }
    if(this.Player.element == 5){
        this.Player.setTint(0xFFFFFF)
        this.Player.setTint(0xFFFFFF)
    }

   }
   onEvent(){
    this.debuffer = true
   }
   
   
   
}
