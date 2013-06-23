;(function(window, document, paper, $, undefined) {

  paper.install(window);
  paper.setup("paint");
  paper.view.setZoom(1);

  var $toolsMenuButtons = $("#tools-menu").find("button"),
      btnActiveClass = "btn-active",
      $btnZoomIn = $("#btn-zoom-in"),
      $btnZoomOut = $("#btn-zoom-out"),
      $btnClosePath = $("#btn-close-path");


  /***************  Menu Tools / Helpers  ***************/
  function btnClicked(e) {
    var $that = $(this);
    $toolsMenuButtons.removeClass(btnActiveClass);
    $that.addClass(btnActiveClass).data("tool").activate();
  }

  function closePath(e) {
    if (_path.closed === true) return;
    _path.closed = true;
    console.log("path closed");
  }

  function setBtnZoomText() {
    var zoom = paper.view.getZoom();
    if (zoom === 1) {
      $btnZoomIn.text("+");
    }
    else {
      $btnZoomIn.text("+ " + zoom);
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
  $toolsMenuButtons.on("click", btnClicked);

  $btnClosePath.on("click", closePath);
  $btnZoomIn.on("click.zoom-in", zoomInPaper);
  $btnZoomOut.on("click.zoom-out", zoomOutPaper);



  /*************** PaintJS Tools  ***************/
  /*************** PaintJS Tools  ***************/

  var _path  = new Path(),
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


  for (var t in tools) {
    tools[t] = new Tool();
    tools[t]._btnId = "btn-" + t;
    $("#" + tools[t]._btnId).data("tool", tools[t]);
  }

  window.tls = tls = tools;
  window._path = _path;
  window._rect = _rect;

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
  tls.circle.onMouseDown = function(event) {
    _path = new Path();
  }

  tls.circle.onMouseDrag = function(event) {
    _path.add(event.point);
  }

  tls.circle.onMouseUp = function(event) {
    var myCircle = new Path.Circle(event.point, 50);
    myCircle.strokeColor = opts.strColor;
  }


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

})(window, document, paper, jQuery);


