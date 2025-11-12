/*
Base Whatsapp Bot
By Hikari Archive

Youtube: @HikariArchive
*/

//~~~~~Setting Global~~~~~//

global.owner = ["6285739115205"] // Nomor Pemilik
global.bot = "6285739115205" // Nomor Bot
global.namabot = "Zeuz" // Nama Bot
global.namaown = "yame" // Nama owner

//~~~~~Status Diperbarui~~~~~//
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
