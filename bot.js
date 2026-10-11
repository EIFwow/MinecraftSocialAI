const mineflayer = require('mineflayer')

const bot1 = mineflayer.createBot({
  host: 'localhost',
  port: 25565,
  username: 'John'
})

const bot2 = mineflayer.createBot({
  host: 'localhost',
  port: 25565,
  username: 'Daisy'
})

bot1.on('kicked', console.log)
bot1.on('error', console.log)

bot2.on('kicked', console.log)
bot2.on('error', console.log)
