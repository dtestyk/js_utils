module('canvas_context', [], function(imports){
  var canvas = document.createElement('canvas');
  canvas.width  = 600;
  canvas.height = 300;
  canvas.style.zIndex   = 8
  canvas.style.position = "absolute";
  canvas.style.left = "0"
  canvas.style.top = "0"
  canvas.style.border   = "1px solid";
  document.body.appendChild(canvas);
  var ctx=canvas.getContext('2d');

  return Promise.resolve(ctx)
})