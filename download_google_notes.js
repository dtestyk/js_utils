module('download_google_notes', ['jszip_ready', 'download_blob', 'wait_selector'], function(imports){
  var zip = imports[0]
  var download_blob = imports[1]
  var wait_selector = imports[2]

  var texts = []
  var notes = document.querySelectorAll('.IZ65Hb-s2gQvd')
  i_note = 1

  wait_selector(
    document.querySelector('body'),
    function(node) {
      var is_match = true
        &&node
        &&node.classList
        &&node.classList.contains('IZ65Hb-n0tgWb')
        &&node.classList.contains('IZ65Hb-QQhtn')
      
      //console.log(i_note,node.className,node.innerText)
      return is_match
    },
    function(node) {
      var note=node
      var text = note.innerText
      texts[i_note] = text
      
      function append_file(txt){
        if(!txt) return
        var arr_str = txt.split('\n')
        var name = arr_str.shift()+'.txt'
        var body = arr_str.join('\n')
        zip.file(name, body)
      }
      
      i_note++
      if(i_note < notes.length){
        setTimeout(function(){
          notes[i_note].click()
        },1)
      }else{
        texts.forEach(append_file)
        var content = zip.generate({type:"blob"})
        download_blob('google_notes.zip', content)
      }
    },
    true,
    false
  );
  notes[i_note].click()
})