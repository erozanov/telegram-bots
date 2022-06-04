const Parser = require('rss-parser')
const { InlineKeyboard } = require('../buttons')

module.exports.CallbackHandler = (bot) => {
    bot.on('callback_query', async (ctx) => {
        const { callbackQuery } = ctx
        console.log(callbackQuery.data)

        if (callbackQuery.data = 'listRss') {
            await ctx.replyWithHTML('Bыбери источник 👇', InlineKeyboard.buttons_source())

        }

        if (callbackQuery.data = 'redditRss') {
            const parser = new Parser()
            let feed = await parser.parseURL('https://www.reddit.com/.rss')
            console.log(feed.title)
            const newsList = feed.items.map(item => item.title)
            const newsMessageText = newsList.join('\n\n')
            await ctx.editMessageText(`<b>Новости с Reddit:</b>:\n\n${newsMessageText}`, InlineKeyboard.buttons_back())


            
            feed.items.forEach(item => {
                console.log(item.title + ':' + item.link)
            })
        }

    })

}