



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

let timer = 0;
let cactusarr = [];

function fps(){
  requestAnimationFrame(fps);
  timer++;
  ctx.clearRect(0,0, canvas.width,canvas.height);

  if(timer % 120 === 0){
    let cactus = new Cactus();
    cactusarr.push(cactus);
  }
  cactusarr.forEach((each, i, j) =>{
    if(each.x < 240){
      j.splice(i,1);
    }
    each.x--;
    each.draw();
  })
  trex.draw();
}
fps();


document.addEventListener('keydown',function(e)){
  
}