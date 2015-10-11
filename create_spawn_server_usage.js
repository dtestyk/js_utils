module('create_spawn_server_usage', ['logg', 'spawn', 'create_spawn_server'], function(imports){
  var logg = imports[0]
  var spawn = imports[1]
  var create_server = imports[2]
  
  var process = spawn()
  .check(function(){return typeof this.v == 'number'})
  .wait(1000)
  .run(function(){this.v++})
  .run(function(){logg('detail: ')(this.e.detail)})
  
  var server0 = create_server('srv', 0, 'event', process, {v: 0})
  var server1 = create_server('srv', 1, 'event', process, {v: 0})
  var server2 = create_server('srv', 2, 'event', process, {v: 0})
  
  var main = spawn()
  .emit(document, 'event', {prop1: 'test'})
  .wait(400)
  .emit(document, 'event', {})
  .wait(400)
  .emit(document, 'event', {})
  .wait(400)
  .emit(document, 'event', {})
  
  server0.start()
  server1.start()
  server2.start()
  main.start()
})