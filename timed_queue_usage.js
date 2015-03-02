module('timed_queue_usage', ['timed_queue', 'logg'], function(imports){
  var timed_queue = imports[0]
  var logg = imports[1]

  function can_continue(){return typeof flag == 'undefined'}

  function loop(){
    timed_queue()
    .do(logg("before wait"))
    .wait(1000)
    .do(logg("after wait"))
    .wait(100)
    //.check(can_continue)
    //.do(arguments.callee)
    .start()
  }
  loop()
})