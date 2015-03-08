module('intercept_input_value_change_usage', ['intercept_input_value_change', 'logg'], function(imports){
  var intercept_input_value_change = imports[0]
  var logg = imports[1]

  //var input=document.getElementById('rules')
  var input=document.querySelector('input[name=q]')
  
intercept_input_value_change(input, logg('value_changed: '))
})


