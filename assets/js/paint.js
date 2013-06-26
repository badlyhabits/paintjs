// ;(function(window, document, paper, undefined) {

  function extend(destination, source) {
    for (var k in source) {
      if (source.hasOwnProperty(k)) {
        destination[k] = source[k];
      }
    }
    return destination;
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  // var toolbar         = document.getElementById("toolbar"),
  //     toolbarBtns     = toolbar.getElementsByTagName("button"),
  //     btnZoomIn       = document.getElementById("btn-zoom-in"),
  //     btnZoomOut      = document.getElementById("btn-zoom-out"),
  //     btnClosePath    = document.getElementById("btn-close-path"),
  //     btnActiveClass  = "btn-active",
  //     activeButtons   = document.getElementsByClassName(btnActiveClass),

  //     Path      = paper.Path,
  //     Point     = paper.Point,
  //     Rectangle = paper.Rectangle,
  //     Tool      = paper.Tool,
  //     Size      = paper.Size,
  //     view      = paper.view,

  //     // _path  = new Path(),
  //     // _point = new Point(),
  //     // _rect  = new Rectangle(),

  //     opts = {
  //       strColor: "black"
  //     },

  //     tools = {
  //       empty  : null,
  //       line   : { },
  //       pencil : { },
  //       brush  : { },
  //       rect   : { },
  //       circle : { },
  //       arc    : { }
  //     };

  var ToolFactory = function() {

  };

  var Paint = function (options) {
    var me = this;
    me.options = {};
    extend(me.options, Paint.defaults);
    extend(me.options, options);
    me.tools = me.options.tools || [];
    return me;
  };

  Paint.defaults = {
    canvas: null,
    tools: null,
    toolbar: null,
    tool_active_class: "btn-active",
    zoom: 1,
  };

  Paint.prototype = {

    init: function() {
      var me = this, opts = me.options;
      console.log(opts);
      paper.setup(opts.canvas);
      paper.view.setZoom(opts.zoom);
      return me;
    },

    set_toolbar: function(toolbar) {
      var me = this,
          opts = me.options,
          toolbar = toolbar || qs(opts.toolbar);

      opts.toolbar = toolbar;
      var btns = opts.toolbar.btns = me.get_toolbar_elems(toolbar, "button");

      for (var i = 0, len = btns.length; i < len; i++) {
        btns[i].addEventListener("click", function(e) {
          for (var j = 0; j < len; j++) {
            btns[j].classList.remove(opts.tool_active_class);
          }
          this.classList.add(opts.tool_active_class);
        }, false);
      }
    },

    get_toolbar: function() {
      return qs(this.options.toolbar);
    },

    get_toolbar_elems: function(toolbar, elem) {
      return toolbar.querySelectorAll(elem);
    },

    activate_tool: function(tool) {
      console.log(tool);
    },

    deactivate_tool: function(tool) {

    },
    save_image: function() {},
    clear_canvas: function() {},
    zoom_in: function() {},
    zoom_out: function() {}
  };

  var options = {
    canvas: "paint",
    tools: "empty / line / pencil / brush / rect / circle / arc",
    toolbar: "#toolbar",
    zoom : 1
  };

  var paint = new Paint(options);
  paint.init().set_toolbar();

  // var paint2 = new Paint();
  // paint2.init().set_toolbar(qs("#test"));

  // toolList = "empty line pencil brush rect circle arc".split(" ");
  // for (var t in toolList) {
  //   var name = toolList[t];
  //   toolList[t] = new Tool();
  //   toolList[t]._name = name;
  //   toolList[name.toString()] = toolList[t];
  //   toolList[t].setOnActivate(function(event) {
  //     console.log(event, "ACTIVATED");
  //   });
  // }

  /***************  Menu Tools / Helpers  ***************/
  function activateTool(e, tool) {
    var that = this;
    console.log(this);
    for (var i = 0; i < activeButtons.length; i++) {
      activeButtons[i].classList.remove(btnActiveClass);
    }
    that.classList.add(btnActiveClass);
    tools[that.dataset.tool].activate();
    console.log(activateTool.name + ": " + that.dataset.tool);
  }


  function closePath(e) {
    if (_path.closed === true) return;
    _path.closed = true;
    console.log("_path closed");
  }

  function setBtnZoomText() {
    var zoom = paper.view.getZoom();
    zoom === 1 ? btnZoomIn.innerText = "+" : btnZoomIn.innerText = "+ " + zoom;
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
  // for (var i = 0; i < toolbarBtns.length; i++) {
  //   toolbarBtns[i].addEventListener("click", activateTool, false);
  // }

  // btnClosePath.addEventListener("click", closePath, false);
  // btnZoomIn.addEventListener("click", zoomInPaper, false);
  // btnZoomOut.addEventListener("click", zoomOutPaper, false);


  /*************** PaintJS Tools  ***************/
  /*************** PaintJS Tools  ***************/
  // var i = 0;
  // for (var t in tools) {
  //   tools[t] = new Tool();
  //   tools[t]._name = t;
  //   // console.log(i++ + ": ", t, tools[t]);
  //   tools[t].setOnActivate(function(event) {
  //     console.log(event, "ACTIVATED");
  //   });
  // }

  /***************  Line  ***************/


  // tools.line.onMouseDown = function(event) {
  //   if (_path) {
  //     _path.selected = false;
  //   }

  //   _path = new Path({
  //     segments: [event.point],
  //     strokeColor : opts.strColor,
  //     fullySelected: true
  //   });
  // };

  // tools.line.onMouseDrag = function(event) {
  //   _path.add(event.point);
  // };

  // tools.line.onMouseUp = function(element) {
  //   _path.smooth();
  //   _path.simplify(10)
  //   _path.fullySelected = false;
  // }


  // /***************  Pencil  ***************/
  // tools.pencil.onMouseDown = function(event) {
  //   _path = new Path();
  //   _path.strokeColor = opts.strColor;
  //   _path.add(event.point);
  // }

  // tools.pencil.onMouseDrag = function(event) {
  //   _path.add(event.point);
  // }


  // /***************  Circle  ***************/
  // tools.circle.on("mouseup", function(event) {
  //   var circle = new Path.Circle({
  //     center: event.middlePoint,
  //     radius: event.delta.length / 2,
  //     strokeColor: "#efefaa",
  //     fillColor: "#fff"
  //   });
  // });

  // tools.circle.on("mousedrag", function(event) {
  //   var circle = new Path.Circle({
  //     center: event.middlePoint,
  //     radius: event.delta.length / 2,
  //     strokeColor: "#efefaa",
  //     fillColor: "#fff"
  //   });
  // });


  // /***************  Arc  ***************/
  // tools.arc.onMouseDown = function(event) {
  //   path = new Path();
  //   _path.strokeColor = opts.strColor;
  //   _path.add(event.point);
  // }

  // tools.arc.onMouseDrag = function(event) {
  //   _path.arcTo(event.point);
  //   // _path = new Path();
  // }

  // // disable first tool activated by default
  // tools.empty.active = false;
  // tools.empty.remove();

// })(window, document, paper);

