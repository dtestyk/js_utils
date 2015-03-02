javascript:(function(){
  window.load_script_path = 'http://127.0.0.1:82/js_utils/';
  window.load_script_promise = function(file){
    var url = window.load_script_path + file;
    return new Promise(function(resolve, reject){
      var script = document.querySelector('script[src="'+url+'"]');
      if(script) resolve(script);
      else{
        var head = document.getElementsByTagName('head')[0];
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.addEventListener('load', function(){
          this.removeEventListener('load', arguments.callee);
          resolve(script);
        });
        script.src = url;
        head.appendChild(script);
      };
    });
  };

  window.execute_script_promise = function(name){
    return new Promise(function(resolve, reject){
      if(window[name+'_promise']) window[name+'_promise'].then(resolve);
      else load_script_promise(name+".js")
      .then(function(){
        window[name+'_promise'].then(resolve);
      });
    });
  };

  window.module = function(own_name, depencies, func){
    var execs = depencies.map(function(name){return execute_script_promise(name)});
    window[own_name+'_promise'] = Promise.all(execs).then(func);
  };
}())