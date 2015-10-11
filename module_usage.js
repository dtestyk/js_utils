execute_script_promise('namify')
.then(function(namify){
  console.log('namify', namify)
  arr=[10,9,8,7]
  obj=namify(arr,['first',,'third'])
  console.log(obj)
})

execute_script_promise('get_args_obj')
.then(function(get_args_obj){
  function f(a,b,c){
    console.log(arguments)
    var named_args = get_args_obj(arguments)
    console.log(named_args)
  }
  console.log(f(5,9))
})


module('get_args_obj', ['namify'], function(imports){
  var namify = imports[0]
  console.log('namify',namify)
  return Promise.resolve(function(args){
    var names = args.callee.toString()
      .replace(/^[^\(]*\(|\s|\)[^]+/g,'')
      .split(',')
    return namify(args, names)
  })
})


module('test', ['get_args_obj'], function(imports){
  var get_args_obj = imports[0]
  console.log('get_args_obj', get_args_obj)
  function f(a,b,c){
    console.log(arguments)
    var named_args = get_args_obj(arguments)
    console.log(named_args)
  }
  console.log(f(5,9))
})