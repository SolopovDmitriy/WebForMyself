const TelegramBot = require('node-telegram-bot-api')
const debug = require('/helpers')
const TOKEN = '6040246133:AAHtkZgSy1cROfvbzDvNknwYc4lbqSXOAX8'
console.log('Bot has been started ...')
const bot = new TelegramBot(TOKEN, {
    // polling: true
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
})
bot.on('message', msg => {
    console.log(msg)
    const { id } = msg.chat

    if (msg.text.toLowerCase() ==='hello'){
    bot.sendMessage(id, `Hello, ${msg.from.first_name}`)
    } else {
        bot.sendMessage(id, debug(msg))
    }
    // bot.sendMessage(id, debug(msg))
    //     .then (() => {
    //         console.log ('Message has been send')
    // })
    //     .catch((error) => {
    //       console.error(error)
    // })


    // bot.sendMessage(id,JSON.stringify())
    // bot.sendMessage(msg.chat.id,"Привіт!!!!!!!!! " + " " + msg.from.first_name + " " + msg.from.last_name)
})
