class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    preload(){
        
        this.load.image('fireBolt', './assets/Art/fire bolt 2.png')
        this.load.image('iceBolt', './assets/Art/Icicle-1.png.png')
        this.load.image('lightningBolt', './assets/Art/Lightning Bolt-1.png.png')
        this.load.image('earthBolt', './assets/Art/Rock-1.png.png')
        this.load.image('tBDrop', './assets/Art/Temp Background.png')
        this.load.image('waterBolt', './assets/Art/Wave-1.png.png')
        this.load.image('windBolt', './assets/Art/Wind-1.png.png')
        this.load.image('playerRun', './assets/Art/pixilart-drawing.png')
        this.load.image('playershiftLeft', './assets/Art/pixilart-drawing3.png')
        this.load.image('playershiftRight', './assets/Art/pixilart-drawing4.png')
        this.load.image('playerHurt', './assets/Art/pixilart-drawing5.png')
        this.load.image('playerRun2', './assets/Art/pixilart-drawing6.png')
        this.load.image('playerRun3', './assets/Art/pixilart-drawing7.png')
        

        this.load.audio('fireMusic', './assets/Background Music/Fire Element.wav')
        this.load.audio('lightningMusic', './assets/Background Music/Lightning Element.wav')
        this.load.audio('iceMusic', './assets/Background Music/Ice Element.wav')
        this.load.audio('earthMusic', './assets/Background Music/Earth Element.wav')
        this.load.audio('waterMusic', './assets/Background Music/Water Element.wav')
        this.load.audio('windMusic', './assets/Background Music/Wind Element.wav')


        this.load.audio('earthShot', './assets/Sound_Effects/Rock Shoot.wav')
        this.load.audio('fireShot', './assets/Sound_Effects/Fire Bolt.wav')
        this.load.audio('iceShot', './assets/Sound_Effects/Ice Shoot.wav')
        this.load.audio('lightningShot', './assets/Sound_Effects/Lightning Shoot.wav')
        this.load.audio('waterShot', './assets/Sound_Effects/Water Shoot.wav')
        this.load.audio('windShot', './assets/Sound_Effects/Wind Shoot.wav')
        this.load.audio('playerDeath', './assets/Sound_Effects/Player Death.wav')
        this.load.audio('scoreIncrease', './assets/Sound_Effects/Score Increase.wav')
        
        this.scene.backgroundColor ='#c35342'
    }
    create(){
        let menuConfig = {
            fontFamily: 'Times New Roman',
            fontSize : '20px',
            backgroundColor: '#296017',
            color: '#dfbb29',
            align: 'right',
            padding : {
                top: 5, 
                bottom: 5, 
            },
            fixedWidth: 0

        }
       this.add.text(game.config.width/100, game.config.height/2 - 150, 'Credits: All art was created by me using paint and pskel', menuConfig)
       this.add.text(game.config.width/100, game.config.height/2 - 100, 'Used the Chrome Music Lab to create music and JFXR for sound effects', menuConfig)
       this.add.text(game.config.width/3, game.config.height/2 - borderUISize - borderPadding, 'Element Runner', menuConfig)
        this.add.text(game.config.width/ 3, game.config.height/2 + 10, "Press Enter to play the game", menuConfig)
        this.add.text(game.config.width / 3, game.config.height/2 + 50, "To Move, press <- & ->", menuConfig)
        this.add.text(game.config.width/ 12, game.config.height/2 + 100, "You begin with 5 health, if you interact with an ", menuConfig)
        this.add.text(game.config.width/12, game.config.height /2 + 150, "element of the same color, you gain health ", menuConfig)
        this.add.text(game.config.width/12, game.config.height /2 + 200, "if you interact with another color, you lose health ", menuConfig)

        enterGame = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(enterGame)){
            this.scene.start("playScene")
        }
    }
}