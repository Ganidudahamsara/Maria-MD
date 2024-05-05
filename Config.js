const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "94768943935"],
global.ownername = process.env.OWNER_NAME || "𓆩‎✘ 𝙂𝞓𝙂𝞓𝞜𝞓 ✘𓆪",
global.ytname = "YT: GaganaDahamsara"
global.socialm = "GitHub: GaganaDahamsara"
global.location = "srilanka"

global.botname = process.env.BOTNAME || "𝐌𝐀𝐑𝐈𝐀-𝐌𝐃ᴳᴬᴳᴬᴺᴬ",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "𓆩‎✘ 𝙂𝞓𝙂𝞓𝞜𝞓 ✘𓆪",
global.packname = 'Sticker By Ownerᴳᴬᴳᴬᴺᴬ'
global.author = process.env.AUTHOR || "𓆩‎✘ 𝙂𝞓𝙂𝞓𝞜𝞓 ✘𓆪",
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/DILLDe2E0aGEtzxDAzGo1j'

//custom prefix
global.prefa = process.env.PREFIX || "@",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *Here you go, darling!* ',
    prem: '🍭 *My darling, this feature is reserved for premium users only*',
    admin: '🍭 *My darling, this feature is reserved for admins only*',
    botAdmin: '🍭 *Darling, this feature can only be used when the bot is a group admin* ',
    owner: '🍭 *My dearest, this feature is reserved for the owner only*',
    group: '🍭 *Sweetheart, this feature is exclusively for groups*',
    private: '🍭 *My love, this feature is exclusively for private chats*',
    wait: '🍭 *Darling, in process...* ',    
    error: '🍭 *Oh darling, there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "false",
ANTI_BOT:"false",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
