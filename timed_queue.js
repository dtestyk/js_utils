module('timed_queue', [], function(imports){
  return Promise.resolve(function(){
    var queue=[];
    var play=function(){
      var item=queue.shift();
      if(item){
        if(item.t == 'do') item.v(), play();
        else if(item.t == 'check') item.v()&&play();
        else if(item.t == 'wait') setTimeout(play, item.v);
      }
    }
    return {
      do:function(v){
        queue.push({t:'do', v:v})
        return this
      },
      wait:function(v){
        queue.push({t:'wait', v:v})
        return this
      },
      check:function(v){
        queue.push({t:'check', v:v})
        return this
      },
      start:play 
    }
  })
})
