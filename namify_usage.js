module('namify_usage', ['namify'], function(imports){
  var namify = imports[0]
  arr=[10,9,8,7]
  obj=namify(arr,['first',,'third'])
  console.log(obj)
})