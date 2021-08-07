let handler = async m => m.reply(`
╭─「 Donasi & Beli Prem • Pulsa 」
│ • 5k premium selamanya pembayaran via Indosat [6285601993596]
│ • 5k premium selamanya pembayaran via Dana [6281359837041]
╰────
╭─「 Hubungi 」
│ > Ingin donasi & beli Prem ? Wa.me/6281359837041
╰────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
