let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukkan jumlah Exp yang akan di claim'
if (isNaN(text)) throw 'Hanya angka'
if (global.db.data.users[m.sender].nabungexp <= text) throw 'EXP tidak cukup untuk diclaim !!'
global.db.data.users[m.sender].nabungexp -= text
global.db.data.users[m.sender].exp += text
conn.sendButton(m.chat, `Berhasil menclaim ${text} exp\n\nKetik #nabunginfo untuk melihat info tabungan anda ... `, 'Klik Button dibawah untuk melihat info tabungan', 'Info Tabungan', `.nabunginfo`)
  
}
handler.help = ['claimexp']
handler.tags = ['xp']
handler.command = /^claimexp$/i

module.exports = handler
