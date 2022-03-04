var  canvas=document.querySelector('canvas')
// let h1= document.createElement('h1');
// h1.innerText="kjhj";
// canvas.append(h1)
var c= canvas.getContext('2d');
c.fillStyle="blue";

c.fillRect(0,0,60,10)
c.fillRect(70,0,60,10)
c.fillRect(140,0,60,10)
c.fillRect(210,0,60,10)
c.fillRect(0,20,60,10)
c.fillRect(70,20,60,10)
c.fillRect(140,20,60,10)
c.fillRect(210,20,60,10)
c.fillRect(0,40,60,10)
c.fillRect(70,40,60,10)
c.fillRect(140,40,60,10)
c.fillRect(210,40,60,10)
c.fillRect(0,60,60,10)
c.fillRect(70,60,60,10)
c.fillRect(140,60,60,10)
c.fillRect(210,60,60,10)
c.fillRect(130,139,60,10)

// var x=Math.random()*innerWidth;
// var y=Math.random()*innerWidth;
// var dx=(Math.random()-0.5)*8;
// var dy=(Math.random()-0.5)*8;
// var radius=30;
// function animate(){
//     requestAnimationFrame(animate)
//     c.clearRect(0,0,innerWidth,innerHeight);
//     c.beginPath();
//     c.arc(x,y,radius,o,Math.PI*2,false)
//     c.strokeStyle="blue";
//     c.stroke()
//     if(x+radius>innerWidth || x-radius<0){
//         dx = -dx
//     }
//     if(y+radius>innerHeight || y-radius<0){
//         dy = -dy
//     }
//     x += dx;
//     y +=dy;
// }
// animate()
