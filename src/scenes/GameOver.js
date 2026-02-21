class GameOver extends Phaser.Scene{
    constructor(){
        super('GameOver')
    }
    preload(){
        this.load.image('gameOver', './assets/Art/gameOver.png')
    }

    create(){
        this.backGround = this.add.tileSprite(0, 0, 640, 480, 'gameOver').setOrigin(0, 0)
        enterGame = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(enterGame)){
            this.scene.start('playScene')
        }
    }

}