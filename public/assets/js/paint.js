(function () {
  // Create a Paper.js Path to draw a line into it:
  var path = new Path();
  // Give the stroke a color
  path.strokeColor = 'black';
  var start = new Point(0, 0);
  // Move to start and draw a line from there
  path.moveTo(start);
  // Note the plus operator on Point objects.
  // PaperScript does that for us, and much more!
  path.lineTo(start + [ 200, 200 ]);
})();

(function () {
  var path = new Path.Circle({
    center: view.center,
    radius: 30,
    strokeColor: 'black'
  });

  function onResize(event) {
    // Whenever the window is resized, recenter the path:
    alert('');
    path.position = view.center;
  }
})();

var get_id = function(id) {
  return document.getElementById(id);
};

get_id("paint");

window.onload = function() {
};