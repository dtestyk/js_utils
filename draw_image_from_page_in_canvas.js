module('draw_image_from_page_in_canvas', ['canvas_context', 'get_element_by_click_promise', 'dom_ready'], function(imports){
  /*var */ctx = imports[0]
  var get_element_by_click_promise = imports[1]

  get_element_by_click_promise()
  .then(function(img){
    var w = 280
    var h = 280
    var cw = ctx.canvas.width
    var ch = ctx.canvas.height
    ctx.drawImage(img, 0, 0, w, h);
    /*var */img_data = ctx.getImageData(0, 0, cw, ch);
    for(var i=80*4; i<100*4; i+=4){
      for(var j=80*4; j<100*4; j+=4){
        img_data.data[i*cw+j]=255
        img_data.data[i*cw+j+1]=0
        img_data.data[i*cw+j+2]=255
        img_data.data[i*cw+j+3]=255
      }
    }
    ctx.putImageData(img_data, 0, 0);
  })
})