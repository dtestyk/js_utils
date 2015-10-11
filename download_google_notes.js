module('download_google_notes', ['jszip_ready', 'download_blob'], function(imports){
  var zip = imports[0]
  var download_blob = imports[1]

  var notes = document.querySelectorAll('.IZ65Hb-s2gQvd');
  var texts = Array.prototype.map.call(notes, function(obj) {
    return obj['innerText'];
  });

  function save_note(txt){
    var arr_str = txt.split('\n')
    var name = arr_str.shift()+'.txt'
    var body = arr_str.join('\n')
    zip.file(name, body)
  }
  texts.forEach(save_note)

  var content = zip.generate({type:"blob"})
  download_blob('google_notes.zip', content)
})