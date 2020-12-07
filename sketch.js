const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ground;
var plinko=[];
var particle=[];
var division=[];

function setup() {
  createCanvas(480,800);

  engine=Engine.create();
world=engine.world;

ground1= new Ground(230,780,800,10);
ground2= new Ground(3,380,10,800);
ground3= new Ground(470,380,10,800);


// create division
        for(i=16;i<480;i=i+65)
        {
        division.push(new Division(i,650))
        }

// create stable plinkos row1
            for(i=20;i<=width;i=i+50)
            {
            plinko.push(new Plinko(i,50))
            }
      // plinko row 2
            for(i=20;i<=width;i=i+50)
            {
            plinko.push(new Plinko(i,150))
            }

      //plinko row3
            for(i=10;i<=width;i=i+50)
            {
            plinko.push(new Plinko(i,250))
            }

      //plinko row4
            for(i=20;i<=width;i=i+50)
            {
            plinko.push(new Plinko(i,350))
            }


}
function draw() {
  background("black");  
  drawSprites();
Engine.update(engine)


  ground1.display();
  ground2.display();
  ground3.display();


  //division display
        for(i=0;i<division.length;i++)
        {
          division[i].display();
        }

//stable plinkos display
        for(i=0;i<plinko.length;i++)
        {
        plinko[i].display()
        }


 // particle creation
        if( frameCount% 30===0)
        {
        particle.push( new Particle())
        }
            

  // particle display

          for(i=0;i<particle.length;i++)
          {
            particle[i].display()
          }
    
   
  

  text (mouseX+":"+mouseY,mouseX,mouseY)
}