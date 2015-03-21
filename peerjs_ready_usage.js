module('peerjs_ready_usage_server', ['logg', 'peerjs_ready'], function(imports){
  var logg = imports[0]
  var me = imports[1]
  logg('server: me: ')(me)
  logg('server: me: id: ')(me.id)

  me.on('connection', function(c) {
    var id = c.peer
    logg('server: on connection: id: ')(id)
    c.on('data', function(data) {
      logg('server: on data: data: ')(data)
    })
  })

  window.server_id = me.id
})

window.server_id = 'b2idamu9b49uow29'
module('peerjs_ready_usage_client', ['logg', 'peerjs_ready'], function(imports){
  var logg = imports[0]
  var me = imports[1]
  logg('client: me: ')(me)
  logg('client: me: id: ')(me.id)

  c = me.connect(window.server_id)
  c.on('open', function() {
    var id = c.peer
    logg('client: on open: id: ')(id)
    logg('client: send: hello')()
    c.send({a: 'hello'})
  })
})