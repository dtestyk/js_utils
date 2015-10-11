module('canvas_context_usage_draw_fractal ', ['canvas_context', 'dom_ready'], function(imports){
  var c = imports[0]

  min=2
  m1=3
  k1=0.62
  m2=3
  k2=0.5
  function Draw(x, y, L, a) {
    if(L > min) {
      c.moveTo(x,y)
      x=x+L*Math.cos(a)
      y=y-L*Math.sin(a)
      c.lineTo(x,y)
      c.stroke()
      Draw(x,y,L*k1,a+Math.PI/m1)
      Draw(x,y,L*k2,a-Math.PI/m2)
    }
  }
  
  c.strokeStyle= 'black'
  Draw(300, 0, 100, -Math.PI/2)
})