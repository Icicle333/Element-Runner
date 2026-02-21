class Obstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene,x,y,texture,frame)
        scene.add.existing(this)
        scene.physics.add.existing(this);
        
        this.element = Phaser.Math.Between(0, 5)
       
        this.body.setCircle(this.width/2)
        this.body.setCollideWorldBounds(true)
        this.body.setImmovable(true)
        this.moveSpeed = 20;
        this.points = 1
        
    }
   
}