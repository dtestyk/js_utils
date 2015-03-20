module('create_spawn_server', ['spawn', 'logg'], function(imports){
  var spawn = imports[0]
  var logg = imports[1]
  
  return Promise.resolve(function(name, i, event, proc, data){
    var s = spawn(data)
    .run(function loop(){
      if(i>0) s.expect(document, name+' busy '+(i-1))
      s.expect(document, event, function(e){this.e=e})
      s.emit(document, name+' busy '+i, {})
      s.append(proc.extract())
      s.run(function(){logg('server: '+name+' '+i+': this: ')(this)})
      s.run(loop)
    })
    return s
  })
})