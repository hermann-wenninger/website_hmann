function drawhard(x,y,radius) {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // Cubic curves example
    ctx.beginPath();
    ctx.moveTo(x+75, y+35);
    ctx.bezierCurveTo((75+x)*radius, (37+y)*radius/5, 70+x, (25+y)*-radius/15, 50+x-32, 25+y);
    ctx.bezierCurveTo(20+x+radius, (25+y)*radius, 20+x, 62.5+y, 20+x, 62.5+y);
    ctx.bezierCurveTo(20+x+radius, (80+y)*radius, 40+x, (102+y)*-radius, 75+x, 120+y);
    ctx.bezierCurveTo(110+x+radius, (102+y)*radius, 130+x, 80+y, 130+x, 62.5+y);
    ctx.bezierCurveTo(130+x+radius, 62.5+y, 130+x, 25+y, 100+x, 25+y);
    ctx.bezierCurveTo(85+x+radius, 25+y, 75+x, 37+y, 75+x, 40+y);
    ctx.fill();
  }
}

function View(canvas) {
  this.canvas = canvas;
  this.clicks = [];
  this.frameRate = 1000 / 30;
  this.loopRate = 4000;
  this.maxRadius = 80;
}

View.prototype.handleClick = function (event) {
  var view = this;
  var x = event.offsetX;
  var y = event.offsetY;
  var pos = view.clicks.push({ x: x, y: y, radius: 0 });
  Audio.play(x % 10);
 
  setInterval(function () {
    view.clicks[pos - 1].radius = 0;
    Audio.play(x % 10);
  }, view.loopRate);
};

View.prototype.updateDisplay = function () {
  var view = this;
  var context = view.canvas.getContext("2d");
  context.clearRect(0, 0, view.canvas.width, view.canvas.height);
  context.fillStyle = "black";
  context.fillRect(0, 0, view.canvas.width, view.canvas.height);
  view.canvas.width = window.innerWidth;
  view.canvas.height = window.innerHeight;

  for (var i = 0; i < view.clicks.length; i++) {
    var circle = view.clicks[i];
    if (circle.radius > view.maxRadius) continue;
    circle.radius += 1;

    var alpha = 0.7;
    if (circle.radius > view.maxRadius - 15) {
      alpha = (view.maxRadius - circle.radius) / 10;
    }
    view.drawCircle(context, circle.x, circle.y, circle.radius, alpha);
  }
};

View.prototype.drawCircle = function (context, x, y, radius, alpha) {
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
 
  context.fillStyle =
    "rgba(" +
    (x % 256) +
    ", " +
    (y % 256) +
    ", " +
    ((x * y) % 256) +
    " ," +
    alpha +
    ")";
  context.fill();
   drawhard(x, y, radius);
};
