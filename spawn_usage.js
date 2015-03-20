module('spawn_usage_supervising', ['spawn', 'logg'], function(imports){
  var spawn = imports[0]
  var logg = imports[1]

  spawn()
  .expect(document, 'introduce', function(e){
    this.sp_loop = e.detail.sp
    //change before going into loop
    .run(function(){this.v=5})
    .start()
  })
  .wait(3000)
  .run(function(){
    this.sp_loop.stop()
  })
  .start()
  
  var sp = spawn({v: 10})
  .run(function(){logg('v')(this.v)})
  .run(function loop(){
    //here we add to end of queue
    logg('this')(this)
    sp
    .wait(1000)
    .run(function(){this.v--})
    .run(function(){logg('v')(this.v)})
    .check(function(){return this.v>0})
    .run(loop)
  })
  //sp.start()
  
  spawn()
  .run(logg("testing..."))
  .emit(document, 'introduce', {sp: sp})
  .start()
})

module('spawn_usage_same_obj', ['spawn', 'logg'], function(imports){
  var spawn = imports[0]
  var logg = imports[1]

  var x = {v: 10}
  x.sp1 = spawn(x)
  //no need wait, because start deferred
  //.wait(0)
  .run(function(){logg('sp1: this: ')(this)})
  .wait(1000)
  .run(function(){this.v--})
  .run(function(){logg('sp1: this: ')(this)})
  .wait(2000)
  .run(function(){logg('cant see it')()})

  x.sp1.start()

  x.sp2 = spawn(x)
  //wait till x.sp1, x.sp2 assigned
  .wait(0)
  .run(function(){logg('sp2: this: ')(this)})
  .wait(2000)
  .run(function(){this.v--})
  .run(function(){logg('sp2: this: ')(this)})
  .run(function(){this.sp1.stop()})
  .start()
})