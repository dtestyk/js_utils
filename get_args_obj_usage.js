module('get_args_obj_usage', ['get_args_obj'], function(imports){
  var get_args_obj = imports[0]
  console.log('get_args_obj', get_args_obj)
  function f(a,b,c){
    console.log(arguments)
    var named_args = get_args_obj(arguments)
    console.log(named_args)
  }
  console.log(f(5,9))
})