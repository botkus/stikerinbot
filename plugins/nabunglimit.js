let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukkan Jumlah Limit yang akan di tabung ...'
  
if (isNaN(text)) throw 'Hanya angka'
if (global.db.data.users[m.sender].limit <= text) throw 'Limit tidak cukup untuk ditabung !!'
global.db.data.users[m.sender].nabunglimit += text
global.db.data.users[m.sender].limit -= text
conn.sendButton(m.chat, `Berhasil menabung ${text} exp\n\nKetik #nabunginfo untuk melihat info tabungan anda ... `, 'Klik Button dibawah untuk melihat info tabungan', 'Info Tabungan', `.nabunginfo`)

}
handler.help = ['nabunglimit']
handler.tags = ['xp']
handler.command = /^nabunglimit$/i

module.exports = handler
