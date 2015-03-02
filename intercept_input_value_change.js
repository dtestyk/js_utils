module('intercept_input_value_change', [], function(imports){
  return Promise.resolve(function intercept_element_value_change(input, handler){
    var input_clone =input.cloneNode(true)
    input_clone.id += '_'
    input_clone.name += '_'
    input.parentNode.insertBefore(input_clone ,input)
    input_clone.value = input.value
    input_clone.style.cssText = input.ownerDocument.defaultView.getComputedStyle(input, "").cssText
    input.style.display = 'none'
        
    Object.defineProperty(input,"value",{
      get:function(){
        return this.getAttribute("value")
      },
      set:function(val){
        console.log("set")
        input_clone.value = val
        this.setAttribute("value",val);
        var evt = document.createEvent("HTMLEvents")
        evt.initEvent("change", false, true)
        input.dispatchEvent(evt)
      }
    })
    input.value = input_clone.value

    input_clone.onchange = function(e){
      input.value = input_clone.value;
    }

    input.onchange = function(e){
      handler&&handler(input.value)
    }
    console.log("binded")
  })
})