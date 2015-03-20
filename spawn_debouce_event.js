module('spawn_debouce_event', ['spawn'], function(imports){
  var spawn = imports[0]

  return Promise.resolve(function(name, event, time){
    var debounce = spawn({sp: spawn()})
    .run(function loop(){
      debounce
      .expect(document, event, function(e){this.e})
      .run(function(){
        this.sp.stop()
        .wait(time)
        .emit(document, name, this.e)
        .start()
      })
      .run(loop)
    })
    return debounce
  })
})