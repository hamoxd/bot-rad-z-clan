const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});



client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('** ٌــيَــتٌ يَ حٍــلُــۆ،  لُآ تٌــطًــۆلُ :disappointed:**');
  }
});

client.on('message', msg => {
  if (msg.content === 'رابط') {
    msg.reply('** ``https://discord.gg/EXNztT6``**');
  }
});

client.on('message', msg => {
  if (msg.content === 'الرابط') {
    msg.reply('** ``https://discord.gg/EXNztT6``**');
  }
});

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('**وّلّلّّكّكّممّّ نۨــۏڕٺ ۛ ּيۧ مۭــڗ ۛ ּ، ۛ ּمۭــنۨ ۖ ڙمۭــٰا̍نۨ ̨؏ــڼۨــک ۗ :rose::wave:**');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
