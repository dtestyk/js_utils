module('logg', ['log'], function(imports){
  var log = imports[0]
  return Promise.resolve(Function.prototype.bind.bind(log, null))
})