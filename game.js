



let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto";
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;


let trex = {
  x:200,
  y:350,
  width:50,
  height:50,
  draw(){
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x,this.y,this.width,this.height);
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
  }
}

function fps(){

  animation = requestAnimationFrame(fps);
  timer++;
  ctx.clearRect(0,0, canvas.width,canvas.height);

  if((timer % (200 )) === 0){
    let cactus = new Cactus();
    cactusarr.push(cactus);
  }
  cactusarr.forEach((each, i, j) =>{
    if(each.x < 240){
      j.splice(i,1);
    }
    each.x--;

    collision(trex,each)
    each.draw();
  }) 

  if(jumping == true){
    trex.y--;
    inTheAir++;
  }
  if(jumping == false){
    if(trex.y < 350){
      trex.y++;
    }
  }
  if(inTheAir > 100 || trex.y < 250){
    jumping = false;
    inTheAir = 0;
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


if(trex.y === 350){
  document.addEventListener('keydown', function(e){
   if(e.code === 'Space'){
     jumping = true;
    }
  })
}

