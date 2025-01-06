let walkers = [];
function setup() {
  createCanvas(400, 400);
  background(220);
  
  //TODO: Can I source this from a separate Walker.js file somehow?
  class Walker {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
    }

    show() {
      stroke( 0 );
      strokeWeight( 2 );
      point( this.x, this.y );
      // set( this.x, this.y,  0);
      // updatePixels();
    }
    
    step() {
      const choice = Math.floor( random( 4 ) );
      switch ( choice ) {
        case 0:
          //Up
          this.y--;
          break;
        case 1:
          //Down
          this.y++;
          break;
        case 2:
          //Left
          this.x--;
          break;
        case 3:
          //Right
          this.x++;
          break    
        default:
          console.error("Error in Walker step");
          break;
      }
    }
  }

  walkers = [ 
    new Walker(), 
    new Walker(), 
    new Walker(), 
    new Walker(), 
    new Walker()
  ];
}

function draw() {
  walkers.forEach( function( walker ) {
    walker.step();
    walker.show();
  });
}


