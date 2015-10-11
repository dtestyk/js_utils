module('peerjs_ready', [], function(imports){
  return new Promise(function(resolve, reject){
    load_script_promise("http://cdn.peerjs.com/0.3/peer.js")
    .then(function(){
      var me = new Peer({key: '5q1bmiaw8q5gsyvi'});
      me.on('open', function(id){resolve(me)})
    })
  })
})