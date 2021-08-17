let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukkan jumlah Limit yang akan di claim'
if (isNaN(text)) throw 'Hanya angka'
if (global.db.data.users[m.sender].nabunglimit <= text) throw 'Limit tidak cukup untuk diclaim !!'
global.db.data.users[m.sender].nabunglimit -= text
global.db.data.users[m.sender].limit += text
conn.sendButton(m.chat, `Berhasil menclaim ${text} limit\n\nKetik #nabunginfo untuk melihat info tabungan anda ... `, 'Klik Button dibawah untuk melihat info tabungan', 'Info Tabungan', `.nabunginfo`)
  
}
handler.help = ['claimlimit']
handler.tags = ['xp']
handler.command = /^claimlimit$/i

module.exports = handler
