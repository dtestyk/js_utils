module('get_element_by_click_promise', ['add_style'], function(imports){
  var add_style = imports[0]
  return Promise.resolve(function(){
    return new Promise(function(resolve, reject){

      function listener(e){
        e.stopImmediatePropagation()
        e.preventDefault()
        //e.stopPropagation()
        //e.returnValue = false
        document.removeEventListener('click', listener, true)
        var el = e.srcElement
        html.classList.remove("choosing_element")
        resolve(el)
        //console.log(e)
        //return false
      }

      add_style('html.choosing_element * {cursor: crosshair !important;}')
      document.addEventListener('click', listener, true)
      var html=document.querySelector('html')
      html.classList.add("choosing_element")
    })
  })
})