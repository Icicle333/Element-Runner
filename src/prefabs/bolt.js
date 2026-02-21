class Bolt extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, elementNum){
        super(scene, x, y, texture, frame)

        scene.add.existing(this)
        this.canFire = false
        this.moveSpeed = 10
        
    }

    update(){
        if(!this.isFiring){
            this.canFire = false
        }
    }
}