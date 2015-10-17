module('get_element_by_click_promise_usage', ['get_element_by_click_promise'], function(imports){
  var get_element_by_click = imports[0]
  get_element_by_click()
  .then(function(el){
    console.log(el)
  })
})