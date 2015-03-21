module('peerjs_ready_secure', [], function(imports){
  return new Promise(function(resolve, reject){
    load_script_promise("https://cdnjs.cloudflare.com/ajax/libs/peerjs/0.3.14/peer.min.js")
    .then(function(){
      var me = new Peer({key: '5q1bmiaw8q5gsyvi'});
      me.on('open', function(id){resolve(me)})
    })
  })
})