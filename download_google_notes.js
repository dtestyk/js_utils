module('download_google_notes', ['jszip_ready', 'download_blob', 'wait_selector'], function(imports){
  var zip = imports[0]
  var download_blob = imports[1]
  var wait_selector = imports[2]

  var get_text = function(el){return el.innerText}
  var random_string = function(){return Math.random().toString(36).substring(2)}

  var arr_texts = []
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
      var arr_text_nodes = node.querySelectorAll('[contenteditable=true]')
      var header_node = arr_text_nodes[0]
      var note_node = arr_text_nodes[1]
      var tag_nodes = node.querySelector('.IZ65Hb-x00ATb').childNodes
      var arr_tags = Array.prototype.map.call(tag_nodes, get_text)

      arr_texts[i_note] = {
        header: header_node.innerText,
        text: note_node.innerText,
        tags: arr_tags
      }
      
      function append_file(note){
        if(!note) return
        //var arr_str = txt.split('\n')
        //var name = arr_str.shift()+'.txt'
        //var body = arr_str.join('\n')
        var header = note.header
        var str_tags = note.tags.join(' ')
        //var name = header + ' ' + str_tags
        //if(name==' ') name = random_string()
        var name = [
          random_string(),
          '('+header+')',
          str_tags,
          '('+header+') '+str_tags
        ][!!header | 2*!!str_tags]
        var body = note.text
        zip.file(name+'.txt', body)
      }
      
      i_note++
      if(i_note < notes.length){
        setTimeout(function(){
          notes[i_note].click()
        },1)
      }else{
        arr_texts.forEach(append_file)
        var content = zip.generate({type:"blob"})
        download_blob('google_notes.zip', content)
      }
    },
    true,
    false
  );
  notes[i_note].click()
})