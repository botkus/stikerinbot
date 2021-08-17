let handler = async (m, { conn, text }) => {
let expmenu = global.db.data.users[m.sender].nabungexp
let limitmenu = global.db.data.users[m.sender].nabunglimit
let name = conn.getName(m.sender)
conn.sendButton(m.chat, `*TABUNGAN*\n\nNama : ${name}\nJumlah Limit : ${limitmenu}\nJumlah Exp : ${expmenu}\n\nUntuk claim balas #claimlimit untuk claim limit dan #claimexp untuk claim exp ...`, 'Klik Button dibawah untuk claim, 'Claim Limit', `.claimlimit`. 'Claim Exp'. `.claimexp`)
}
handler.help = ['nabungexp']
handler.tags = ['xp']
handler.command = /^nabungexp$/i

module.exports = handler
