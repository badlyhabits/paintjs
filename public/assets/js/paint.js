paper.install(window);

var paint = document.getElementById("paint");
paper.setup(paint);

// var path = new Path.Rectangle([50, 50], [50, 50]);
// path.fillColor = "black";

// var rect = new Path.Rectangle(new Point(100, 50), new Size(50, 50));
// rect.fillColor = "green";

// var p = new Path.Rectangle(new Point(100, 100), new Size(50, 50));
// p.fillColor = "black";

// var finalrect = new Path.Rectangle(new Point(50, 100), new Size(50, 50));
// finalrect.fillColor = "green";

// function onFrame(event) {
//   path.rotate(-2);
//   p.rotate(2);
//   rect.rotate(2);
//   finalrect.rotate(2);
// }

// paper.view.draw();
// // paper.view.setOnFrame(onFrame);

var penTool, arcTool;

var testPath = new Path;
testPath.strokeColor = "red";

// window.onload = function() {
  var path;

  path = new Path();

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

  function onFrame(event) {
    path.rotate(1);
  }

  penTool = new Tool();
  penTool.onMouseDown = onMouseDown;
  penTool.onMouseDrag = onMouseDragPoint;

  arcTool = new Tool();
  arcTool.minDistance = 20;
  arcTool.onMouseDown = onMouseDown;
  arcTool.onMouseDrag = onMouseDragArc;


  var btnLine = document.getElementById("line");
  var btnArc  = document.getElementById("arc");

  btnLine.addEventListener("click", function() { penTool.activate(); });
  btnArc.addEventListener("click", function() { arcTool.activate(); });

  // paper.view.setOnFrame(onFrame);
// };






