



let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto";
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;

let img_trex = new Image();
img_trex.src = './images/rex.png';
let img_cac = new Image();
img_cac.src = './images/obstacle.png';
const points_display = document.getElementById("points");
let points = 0;
let pressed_space = false;

let trex = {
  x:200,
  y:350,
  width:50,
  height:50,
  draw(){
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.drawImage(img_trex,this.x - 30,this.y - 65, 120, 120);
  }
}

class Cactus{
  constructor(){
    this.x = 1000;
    this.y = 350;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.drawImage(img_cac, this.x - 40, this.y - 80, 200, 200);
  }
}

function fps(){
  animation = requestAnimationFrame(fps);
  timer++;
  points++;
  points_display.innerText = points;
  ctx.clearRect(0,0, canvas.width,canvas.height);

  if((timer % (130 + Math.floor(Math.random() * 100))) === 0){
    let cactus = new Cactus();
    cactusarr.push(cactus);
    timer = 0;
  }
  cactusarr.forEach((each, i, j) =>{
    if(each.x < 240){
      j.splice(i,1);
    }
    each.x -= 2;

    collision(trex,each)
    each.draw();
  }) 

  if(jumping == true){
    trex.y -= 4;
    inTheAir++;
  }
  if(jumping == false){
    if(trex.y < 350){
      if(trex.y < 210){
        trex.y += 1;
      }
      else if(trex.y < 250){
        trex.y += 2;
      }
      else
        trex.y += 4;
    }
  }
  if(inTheAir > 180 || trex.y < 200){
    jumping = false;
    inTheAir = 0;
  }
  if(trex.y == 350){
    pressed_space = false;
  }
 

  trex.draw();
}

function collision(trex, cactus){
  let x_distance = cactus.x - (trex.x + trex.width);
  let y_distance = cactus.y - (trex.y + trex.height);
  if(x_distance <= 0 && y_distance <= 0){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}


let timer = 0;
let cactusarr = [];
let inTheAir = 0; 
let jumping = false;
let animation;
fps();



  document.addEventListener('keydown', function(e){
   if(e.code === 'Space'){
    if(pressed_space === false){
        jumping = true;
        pressed_space = true;
      }
    }
  })


