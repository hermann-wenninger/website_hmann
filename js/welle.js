let nav = document.getElementById('navi');
let klicker = document.getElementsByClassName('flask');
console.log(klicker);




nav.style['z-index']=2;

const hilfsvar = 66;
const rows = 12;
const viertelwidth = window.innerWidth/4;
const widX = window.innerWidth + 80;
const heiY = window.innerHeight / rows
let x = document.getElementById("rootX");
x.style.height= window.innerHeight;
x.style.width = window.innerWidth;
//x.style["background-color"] = "rgb(0 100 255)";
//hand
var handi = document.createElement("img");
handi.src = "img/beifang/handfisch_gross.png";
handi.style.width = + 80 +'px';
handi.style.position = 'absolute';
handi.style.bottom = -60 + 'px';
handi.style.left = innerWidth/12 ;
handi.style['z-index']=27;
x.addEventListener("click", function () {
  handi.style.bottom=60+'px';
  
});


//flasche
let flask = document.createElement("img");
flask.src = "img/animate/flaska.png";
flask.style.width= heiY + hilfsvar+'px';
flask.style.height = heiY + 193 + 'px';
//flask.style["z-index"] = 3;
flask.style.position = "absolute";
flask.style.top = innerHeight-200 + "px";
flask.classList.add('flask');



let welltext = document.createElement('div');
welltext.classList.add('welltext');
welltext.innerHTML='<h3>Hallo und zum</h3>';




for (let i = 0; i < rows; i++) {
  let y = document.createElement("img");
  y.src = "img/animate/welleLinie.png";
  y.style.position = "absolute";
  y.style.width = widX + "px";
  //y.style.height=window.innerHeight/9;
  x.appendChild(flask);
  y.style.height = heiY + hilfsvar + "px";
  (y.style.top = i * (innerHeight / 12) + "px"), x.appendChild(y);
}


//jocky hmann
let hmann = document.createElement("img");
hmann.src = "img/animate/jogg.gif";
hmann.style["z-index"] = 1;
hmann.style.position = "absolute";
hmann.style.width= viertelwidth+55+'px';
hmann.style.top = heiY + "px";
hmann.classList.add('hmann');
x.append(welltext);
x.appendChild(hmann);
x.appendChild(handi);
welltext.style['z-index']=66;

let a = document.querySelector("#rootX > :nth-child(1)");
a.style["z-index"] = 11;
let b = document.querySelector("#rootX > :nth-child(2)");
b.style['z-index']=14;
let c = document.querySelector("#rootX > :nth-child(3)");
c.style["z-index"] = 17;

hmann.style["z-index"] = 16;

let d = document.querySelector("#rootX > :nth-child(4)");
d.style["z-index"] = 18;
let e = document.querySelector("#rootX > :nth-child(5)");
e.style["z-index"] = 20;
let f = document.querySelector("#rootX > :nth-child(6)");
f.style["z-index"] = 22;
let g = document.querySelector("#rootX > :nth-child(7)");
g.style["z-index"] = 24;
let h = document.querySelector("#rootX > :nth-child(8)");
h.style["z-index"] = 26;
let i = document.querySelector("#rootX > :nth-child(9)");
i.style["z-index"] = 28;
let j = document.querySelector("#rootX > :nth-child(10)");
j.style["z-index"] = 30;
let iii = document.querySelector("#rootX > :nth-child(11)");
iii.style["z-index"] = 32;
let l = document.querySelector("#rootX > :nth-child(12)");
l.style["z-index"] = 131;
let m = document.querySelector("#rootX > img:nth-child(13)");
m.style['z-index']=134;


//let k = document.querySelector("#rootX > img.flask");
//k.style ['z-index']=122;
//console.log(k);
let angle = 1;
function animate(time, lastTime) {
  console.log('startwelle');
  if (lastTime != null) {
    angle += (time - lastTime) * 0.005;
  }
  
  a.style.left = Math.cos(angle) * 5 - 50 + "px";
  b.style.left = Math.cos(angle) * -5 - 50 + "px";
  c.style.left = Math.cos(angle) * 5 - 50 + "px";
  d.style.left = Math.cos(angle) * -5 - 50 + "px";
  e.style.left = Math.cos(angle) * 5 - 50 + "px";
  f.style.left = Math.cos(angle) * -5 - 50 + "px";
  g.style.left = Math.cos(angle) * 5 - 50 + "px";
  h.style.left = Math.cos(angle) * -5 - 50 + "px";
  i.style.left = Math.cos(angle) * 5 - 50 + "px";
  j.style.left = Math.cos(angle) * -5 - 50 + "px";
  iii.style.left = Math.cos(angle) * 5 - 50 + "px";
  l.style.left = Math.cos(angle) * -5 - 50 + "px";
  m.style.left = Math.cos(angle) * -5 - 50 + "px";
  //i.setAttribute('id','para');
  
  flask.style["z-index"] = 132;
  
  flask.style.left = Math.sin(angle) * 8 + viertelwidth*3-50 + "px";

  requestAnimationFrame((newTime) => animate(newTime, time));
}
poffset();
  requestAnimationFrame(animate);

function poffset() {
  console.log(window.pageYOffset);
}
//}
