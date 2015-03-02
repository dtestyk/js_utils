module('get_args_obj', ['namify'], function(imports){
  var namify = imports[0]
  return Promise.resolve(function(args){
    var names = args.callee.toString()
      .replace(/^[^\(]*\(|\s|\)[^]+/g,'')
      .split(',')
    return namify(args, names)
  })
})