class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.health = 5
        this.body.setCircle(this.width, -17, -10)
        
        this.body.setImmovable(true)
        this.shiftSpeed = 100
        this.damageFrames = 250
        this.attackCooldown = 100
        
        
        this.isFiring = false
        this.fire = scene.sound.add('fireShot')
        this.lightning = scene.sound.add('lightningShot')
        this.earth = scene.sound.add('earthShot')
        this.ice = scene.sound.add('iceShot')
        this.water = scene.sound.add('waterShot')
        this.wind = scene.sound.add('windShot')
        
        this.fMusic = scene.sound.add('fireMusic')
        this.lMusic = scene.sound.add('lightningMusic')
        this.eMusic = scene.sound.add('earthMusic')
        this.iMusic = scene.sound.add('iceMusic')
        this.waMusic = scene.sound.add('waterMusic')
        this.wiMusic = scene.sound.add('windMusic')
        if(this.element == 0){
            console.log('debug')
            this.fMusic.play()
        }
        if(this.element == 1){
            console.log('debug')
            this.lMusic.play()
        }
        if(this.element == 2){
            console.log('debug')
            this.eMusic.play()
        }
        if(this.element == 3){
            console.log('debug')
            this.iMusic.play()
        }
        if(this.element == 4){
            console.log('debug')
            this.waMusic.play()
        }
        if(this.element == 5){
            console.log('debug')
            this.wiMusic.play()
        }
        this.timedEvent = scene.time.addEvent({
            delay: Phaser.Math.Between(1000, 3000),
            callback: this.onTimerEvent(),
            callbackScope: this,
            loop: true
        })
    }

 
    update(){
        if(!this.isFiring){
            if(Phaser.Input.Keyboard.JustDown(shiftLeft)){
                this.x -= this.shiftSpeed
            }
            if(Phaser.Input.Keyboard.JustDown(shiftRight)){
                this.x += this.shiftSpeed 
            }
        }
        this.isFiring = false
        if(Phaser.Input.Keyboard.JustDown(attack)){
            
            this.isFiring = true
            if(this.element == 0){
                
                this.fire.play()
            }
            if(this.element == 1){
                
                this.lightning.play()
            }
            if(this.element == 2){
                
                this.earth.play()
            }
            if(this.element == 3){
                
                this.ice.play()
            }
            if(this.element == 4){
                
                this.water.play()
            }
            if(this.element == 5){
                
                this.wind.play()
            }
        }
    }
    onTimerEvent(){
        this.valueToChange = Phaser.Math.Between(0, 5)
        if(this.element == 0){
            console.log('debug')
            this.fMusic.stop()
        }
        if(this.element == 1){
            console.log('debug')
            this.lMusic.stop()
        }
        if(this.element == 2){
            console.log('debug')
            this.eMusic.stop()
        }
        if(this.element == 3){
            console.log('debug')
            this.iMusic.stop()
        }
        if(this.element == 4){
            console.log('debug')
            this.waMusic.stop()
        }
        if(this.element == 5){
            console.log('debug')
            this.wiMusic.stop()
        }

        this.element = this.valueToChange

    }
}


