paper.install(window);

;(function() {

  var $btns = $("#js-tools-menu").find("button"),
      btnActiveClass = "btn-active";

  function btnClicked(e) {
    var $that = $(this);
    $btns.removeClass(btnActiveClass)
    $that.addClass(btnActiveClass).data("tool").activate();
  }

  function closePath(e) {
    path.closed = true;
  }

  function zoomInPaper(e) {
    var zoom = paper.view.getZoom();
    paper.view.setZoom(zoom + 1);
  }

  function zoomOutPaper(e) {
    var zoom = paper.view.getZoom();
    if (zoom > 1) {
      paper.view.setZoom(zoom - 1);
    }
  }

  $btns.on("click", btnClicked);

  $("#btn-close-path").on("click", closePath);
  $("#btn-paper-zoom-in").on("click", zoomInPaper);
  $("#btn-paper-zoom-out").on("click", zoomOutPaper);

})();


var paint = $("#paint")[0];
paper.setup(paint);
paper.view.setZoom(1);

var path = new Path();

var tools = {
  pencil: { },
  rect: { },
  circle: { },
  arc: { }
};

for (var t in tools) {
  tools[t] = new Tool();
  tools[t]._name = t;
  tools[t]._btnId = "btn-" + t;
  $("#" + tools[t]._btnId).data("tool", tools[t]);
}

var strColor = "black";

tools.pencil.methods = {
  // m === mouse
  m_down: function(event) {
    path = new Path();
    path.strokeColor = strColor;
    path.add(event.point);
  },
  m_drag: function(event) {
    path.add(event.point);
  }
};

tools.arc.methods = {
  m_down: function(event) {
    path = new Path();
    path.strokeColor = strColor;
    path.add(event.point);
  },
  m_drag: function(event) {
    path.arcTo(event.point);
  }
};

// pencil
tools.pencil.onMouseDown = tools.pencil.methods.m_down;
tools.pencil.onMouseDrag = tools.pencil.methods.m_drag;
tools.pencil.onMouseUp = tools.pencil.methods.m_up;


tools.arc.onMouseDown = tools.arc.methods.m_down;
tools.arc.onMouseDrag = tools.arc.methods.m_drag;

