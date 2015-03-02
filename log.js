module('log', [], function(imports){
  return Promise.resolve(console.log.bind(console))
})