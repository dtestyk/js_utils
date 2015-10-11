module('spawn_usage_video_shifts', ['spawn', 'logg', 'dom_ready'], function(imports){
  var spawn = imports[0]
  var logg = imports[1]
  window.v = document.querySelector("video")

  function shift(dt){
    return function(){
      v.currentTime += dt
    }
  }
  
  var sp = spawn()
  .run(function loop(){
    sp
    .run(shift(-0.05))
    .wait(500)
    .run(shift(-0.05))
    .wait(200)
    .run(shift(-0.05))
    .wait(300)
    .run(shift(-0.05))
    .wait(500)
    .run(loop)
  })
  
  var sp1 = spawn()
  .run(function loop1(){
    sp1
    .run(function(){sp.start()})
    .wait(3000)
    .run(function(){sp.gap()})
    .wait(5000)
    .run(loop1)
  })
  
  var sp2 = spawn()
  .wait(0)
  .run(function(){sp1.start()})
  .wait(20000)
  .run(function(){sp.stop()})
  .run(function(){sp1.stop()})
  .start()
})