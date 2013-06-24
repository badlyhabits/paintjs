// ;(function(window, document, paper, undefined) {

  paper.install(window);
  paper.setup("paint");
  paper.view.setZoom(1);

  var toolbar = document.getElementById("tools-menu"),
      toolbarBtns = toolbar.getElementsByTagName("button"),
      btnActiveClass = "btn-active",
      activeButtons = document.getElementsByClassName(btnActiveClass),
      btnZoomIn = document.getElementById("btn-zoom-in"),
      btnZoomOut = document.getElementById("btn-zoom-out"),
      btnClosePath = document.getElementById("btn-close-path"),

      _path  = new Path(),
      _point = new Point(),
      _rect  = new Rectangle(),

      opts  = {
        strColor: "black"
      },

      tools = {
        line: { },
        pencil: { },
        rect: { },
        circle: { },
        arc: { }
      },

      tls;

  /***************  Menu Tools / Helpers  ***************/
  function activateTool(e) {
    var that = this;
    for (var i = 0; i < activeButtons.length; i++) {
      activeButtons[i].classList.remove(btnActiveClass);
    }
    that.classList.add(btnActiveClass);
    tools[that.dataset.tool].activate();
  }

  function closePath(e) {
    if (_path.closed === true) return;
    _path.closed = true;
    console.log("_path closed");
  }

  function setBtnZoomText() {
    var zoom = paper.view.getZoom();
    if (zoom === 1) {
      btnZoomIn.innerText = "+";
    }
    else {
     btnZoomIn.innerText = "+ " + zoom;
    }
  }

  function zoomInPaper(e) {
    paper.view.setZoom(paper.view.getZoom() + 1);
    setBtnZoomText();
  }

  function zoomOutPaper(e) {
    if (paper.view.getZoom() <= 1) return;
    paper.view.setZoom(paper.view.getZoom() - 1);
    setBtnZoomText();
  }


  /*************** Menu Tools / Helpers / Events  ***************/
  for (var i = 0; i < toolbarBtns.length; i++) {
    toolbarBtns[i].addEventListener("click", activateTool, false);
  }

  btnClosePath.addEventListener("click", closePath, false);
  btnZoomIn.addEventListener("click", zoomInPaper, false);
  btnZoomOut.addEventListener("click", zoomOutPaper, false);


  /*************** PaintJS Tools  ***************/
  /*************** PaintJS Tools  ***************/
  for (var t in tools) {
    tools[t] = new Tool();
  }

  window.tls = tls = tools;

  /***************  Line  ***************/

  tls.line.onMouseDown = function(event) {
    if (_path) {
      _path.selected = false;
    }

    _path = new Path({
      segments: [event.point],
      strokeColor : opts.strColor,
      fullySelected: true
    });
  };

  tls.line.onMouseDrag = function(event) {
    _path.add(event.point);
  };

  tls.line.onMouseUp = function(element) {
    _path.smooth();
    _path.simplify(10)
    _path.fullySelected = false;
  }

  /***************  Pencil  ***************/
  tls.pencil.onMouseDown = function(event) {
    _path = new Path();
    _path.strokeColor = opts.strColor;
    _path.add(event.point);
  }

  tls.pencil.onMouseDrag = function(event) {
    _path.add(event.point);
  }

  /***************  Circle  ***************/
  // tls.circle.onMouseUp = function(event) {
  //   var circle = new Path.Circle({
  //     center: event.middlePoint,
  //     radius: event.delta.length / 2,
  //     strokeColor: "#efefaa",
  //     fillColor: "#fff"
  //   });
  //   // debugger;
  // };

  // tls.circle.onMouseDrag = function(event) {

  //   var circle = new Path.Circle({
  //     center: event.middlePoint,
  //     radius: event.delta.length / 2,
  //     strokeColor: "#efefaa",
  //     fillColor: "#fff"
  //   });
  //   // circle.remove();
  // }
  tls.circle.on("mouseup", function(event) {
    var circle = new Path.Circle({
      center: event.middlePoint,
      radius: event.delta.length / 2,
      strokeColor: "#efefaa",
      fillColor: "#fff"
    });
  });

  tls.circle.on("mousedrag", function(event) {
    var circle = new Path.Circle({
      center: event.middlePoint,
      radius: event.delta.length / 2,
      strokeColor: "#efefaa",
      fillColor: "#fff"
    });
  });

  /***************  Arc  ***************/
  tls.arc.onMouseDown = function(event) {
    path = new Path();
    _path.strokeColor = opts.strColor;
    _path.add(event.point);
  }

  tls.arc.onMouseDrag = function(event) {
    _path.arcTo(event.point);
    // _path = new Path();
  }

// })(window, document, paper);

var y = view.size.height / 2;
var width = view.size.width;
var vector = new Point({
    angle: 45,
    length: width / 5
});
var offset = width / 30;
var handleTexts = [];
var path = new Path();
path.segments = [
    [[offset, y], null, vector.rotate(-90)],
    [[width / 2, y], vector.rotate(-180), vector],
    [[width - offset, y], vector.rotate(90), null]
];

path.strokeColor = "red";
path.fullySelected = false;


// var myPath = new Path();
// myPath.strokeColor = 'black';
// myPath.add(new Point(0, 0), new Point(100, 50));

// insert a segment between the two existing
// segments in the path:
// myPath.insert(1, new Point(30, 40));


// var path = new Path();
// path.strokeColor = 'black';
// path.add(new Point(30, 75));
// path.add(new Point(30, 25));
// path.add(new Point(80, 25));
// path.add(new Point(80, 75));
// path.closed = true;

// // Select the path, so we can see its handles:
// path.fullySelected = true;

// // Create a copy of the path and move it 100pt to the right:
// var copy = path.clone();
// copy.fullySelected = true;
// copy.position.x += 100;

// // Smooth the segments of the copy:
// copy.smooth();

// var pathRect = new Path.Rectangle({
//   center: [200, 200],
//   size: [100, 100]
// });

// pathRect.strokeColor = "red";
// pathRect.strokeWidth = 2;
// pathRect.closed = true;

// pathRectCopy = pathRect.clone();
// pathRectCopy.fullySelected = true;
// pathRectCopy.position.x += 200;
// pathRectCopy.smooth();

// var circlePath = new Path.Circle(new Point(150, 150), 50);
// circlePath.strokeColor = "black";
// circlePath.selected = true;
// circlePath.removeSegment(2);
// // circlePath.remove();

// var myCircle = new Path.Circle(new Point(250, 250), 50);
// myCircle.fillColor = "black";

var rect = new Rectangle(new Point(50, 50), new Size(50, 50));
var cornerSize = new Size(10, 10);
var path = new Path.Rectangle(rect, cornerSize);
path.fillColor = "#aad";
path.selected = true;

var triangle = new Path.RegularPolygon(new Point(100, 100), 3, 50);
triangle.fillColor = "e9e9ff";
triangle.selected = true;

var decahedron = new Path.RegularPolygon(new Point(200, 200), 10, 50);
decahedron.fillColor = "e9e9ff";
decahedron.selected = true;

var star = new Path.Star(new Point(300, 300), 5, 25, 10);
star.fillColor = "black";


var myPath = new Path({
    segments: [[40, 115], [80, 180], [200, 20]],
    selected: true,
    strokeWidth: 10,
    // strokeCap: "round",
    strokeJoin: "round",
    strokeColor: "#f00"
});