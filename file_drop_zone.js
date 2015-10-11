module('file_drop_zone', [], function(imports){
  return Promise.resolve(function(drop_zone_element, handler){
    function handleFileSelect(evt) {
      evt.stopPropagation()
      evt.preventDefault()

      var files = evt.dataTransfer.files
      handler&&handler(files)
    }

    function handleDragOver(evt) {
      evt.stopPropagation()
      evt.preventDefault()
      evt.dataTransfer.dropEffect = 'copy'
    }

    drop_zone_element.addEventListener('dragover', handleDragOver, false)
    drop_zone_element.addEventListener('drop', handleFileSelect, false)
  
  })
})