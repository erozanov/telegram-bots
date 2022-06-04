const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env')})
const { Telegraf } = require('telegraf')
const schedule = require('node-schedule')

const { CommandHandler } = require('./src/handlers/commandHandler')
const { CallbackHandler } = require('./src/handlers/callbackHander')

const bot = new Telegraf(process.env.BOT_TOKEN)

CommandHandler(bot)
CallbackHandler(bot)

let date;
bot.on('text', (ctx) => {
    console.log(ctx);
    const job = schedule.scheduleJob('*/1 * * * *', function(){
        console.log('Today is recognized by Rebecca Black!');
      });

    //UTC time
    
    date = new Date(ctx.update.message.text);
    console.log(date);
    const job2 = schedule.scheduleJob(date, function(){
        console.log('The world is going to end today.');
        ctx.reply(`Hello ${ctx.state.role}`)
      });;
    // Explicit usage
    // ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)
  
    // // Using context shortcut
    // ctx.reply(`Hello ${ctx.state.role}`)
  })

bot.launch()
