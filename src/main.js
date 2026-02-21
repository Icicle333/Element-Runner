//Name: William McCabe
//Game Title: Element Runner
//Approximate Hours: 25 hours
//Citations: Instructor Code from Practices, past assignments, and used 
//Phaser documentation to apply some tricks

//Creative tilt Justification: 
// Something I tried to do is change an sprites property. I managed to do so offscreen
//for the obstacles by changing the sprites texture and element id number to change whether
//you get health or lose health. I used Phaser math between to change a sprites element and attempted
//to use a state machine but ran out of time. 

//I learned how to tint an image in phaser, by making the player sprite all white, I was able to tint
//However, because I overscoped and ran out of time, I was unable to implement a shooting mechanism.

//Because of how I overscoped myself, I was running out of time for art and music.
//I created variations of music and sound effects for each element and the original plan
//was to have them change every 30 seconds but ran out of time. Same thing for art.
//I am not an artist but I was trying to create animations and unqiue sprites for each character
//Again, I overscoped myself but want to continue working on this game in my own time but I ran out 
//of time

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene : [ Menu, Play, GameOver]
}
let game = new Phaser.Game(config)
let {width, height} = game.config
let shiftLeft, shiftRight, attack, enterGame
let element = ['fire', 'lightning', 'earth', 'ice', 'water', 'wind']
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;