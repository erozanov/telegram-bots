const {InlineKeyboard } = require('../buttons')
module.exports.CommandHandler = (bot) => {
    bot.start(async (ctx) => {
        await ctx.replyWithHTML('Привет, я телеграм бот для чтения RSS. Открой список RSS по кнопке ниже 👇', InlineKeyboard.buttons_start())
    })
}


 