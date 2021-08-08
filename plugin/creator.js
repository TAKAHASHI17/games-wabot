let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '6281359837041@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '6281359837041', 'Owner Astro Bot :)', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
