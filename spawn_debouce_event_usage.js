module('spawn_debouce_event_usage', ['logg', 'spawn', 'spawn_debouce_event'], function(imports){
  var logg = imports[0]
  var spawn = imports[1]
  var debounce_event = imports[2]

  var debounce = debounce_event('debounced', 'event', 1000)
  
  var debounce_catcher = spawn()
  .expect(document, 'debounced',logg('debounced'))
  
  var main = spawn()
  .run(logg('event 1'))
  .emit(document, 'event')
  .wait(400)
  .run(logg('event 2'))
  .emit(document, 'event')
  .wait(100)
  .run(logg('event 3'))
  .emit(document, 'event')
  .wait(800)
  .run(logg('event 4'))
  .emit(document, 'event')
  
  debounce_catcher.start()
  debounce.start()
  main.start()
})