module('spawn', [], function(imports){
  return Promise.resolve(function(obj){
    var obj = obj || {}
    var queue=[]
    var item_stop = null
    var play = function(){
      var item = queue.shift()
      if(item){
        if(item.c == 'run'){
          item.f.call(obj)
          play()
          item_stop=null
        }else if(item.c == 'check'){
          item.f.call(obj)&&play()
          item_stop = null
        }else if(item.c == 'wait'){
          var to = setTimeout(play, item.t)
          item_stop = {c:item.c, to:to}
        }else if(item.c == 'expect'){
          var eh = function(r){
            item.t.removeEventListener(item.e, arguments.callee)
            item.h&&item.h.call(obj, r)
            play()
          }
          item.t.addEventListener(item.e, eh)
          item_stop = {c:item.c, t:item.t, e:item.e, eh:eh}
        }else if(item.c == 'emit'){
          item.t.dispatchEvent(new CustomEvent(item.e, {'detail':  item.p}))
          play()
          item_stop = null
        }
      }
    }
    
    function stop(){
      queue.length = 0
      if(item_stop){
        if(item_stop.c == 'wait'){
          clearTimeout(item_stop.to)
        }else if(item_stop.c == 'expect'){
          item_stop.t.removeEventListener(item_stop.e, item_stop.eh)
        }
      }
    }
    
    return{
      run:function(func){
        queue.push({c:'run', f:func})
        return this
      },
      wait:function(time){
        queue.push({c:'wait', t:time})
        return this
      },
      check:function(func){
        queue.push({c:'check', f:func})
        return this
      },
      expect:function(target, event, handler){
        queue.push({c:'expect', t:target, e:event, h:handler})
        return this
      },
      emit:function(target, event, param){
        queue.push({c:'emit', t:target, e:event, p:param})
        return this
      },
      start:function(){
        play()
        return this
      },
      stop:function(){
        stop()
        return this
      },
      extract:function(){
        return queue
      },
      append:function(q){
        Array.prototype.push.apply(queue, q)
        return this
      }
    }
  })
})
