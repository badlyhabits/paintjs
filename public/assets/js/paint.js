paper.install(window);

var paint = document.getElementById("paint");
paper.setup(paint);

var penTool, arcTool, rectTool;
var path;

function onMouseDown(event) {
  path = new Path();
  path.strokeColor = "black";
  path.add(event.point);
}

function onMouseDragPoint(event) {
  path.add(event.point);
}

function onMouseDragArc(event) {
  path.arcTo(event.point);
}

function onMouseDragRect(event) {

}

function onMouseUpRect(event) {
  var rect = new Rectangle({ x: 10, y: 20, width: 100, height: 200 });
  rect.size = [200, 300];
  console.log(rect);
}

// function onFrame(event) {
//   path.rotate(1);
// }

penTool = new Tool();
penTool.onMouseDown = onMouseDown;
penTool.onMouseDrag = onMouseDragPoint;

arcTool = new Tool();
arcTool.minDistance = 20;
arcTool.onMouseDown = onMouseDown;
arcTool.onMouseDrag = onMouseDragArc;

rectTool = new Tool();
rectTool.onMouseDown = onMouseDown;
rectTool.onMouseDrag = onMouseDragRect;
rectTool.onMouseUp   = onMouseUpRect;

var btnLine = document.getElementById("btn-line");
var btnArc  = document.getElementById("btn-arc");
var btnRect = document.getElementById("btn-rect");

btnLine.addEventListener("click", function(e) { penTool.activate(); });
btnRect.addEventListener("click", function(e) { rectTool.activate(); });
btnArc.addEventListener("click", function(e) { arcTool.activate(); });



