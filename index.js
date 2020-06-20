const Discord = require('discord.js');
const client = new Discord.Client();
const timers = require('timers');
const moment = require("moment");
const timezone = require("moment-timezone");
const { TOKEN } = require("./config.json");
const express = require('express');

client.on('ready', () => {
console.log(`${client.user.tag} ON !`)
})
  
 client.on('ready', message => {
  const list = [
    {
      "nama": "SERVERSTATS+.",
      "type": "STREAMING"
    },
    { "nama": "Developer.",
      "type": "LISTENING"
    }
  ];
  setInterval(() => {
  const tex = list[Math.floor(Math.random() * list.length)];
    client.user.setActivity(tex.nama, {type: tex.type});
  },10000);
  
  function clientStatus() {
let tanggal1 = client.channels.find("id", "723918966665248818");
tanggal1.setName(
     `${timezone()
      .tz("Asia/Jakarta")
      .locale("id")
      .format("🔱┇dddd,LL") + " "}`
 );

}

setInterval(clientStatus, 10000);

const guild = client.guilds.get('713795666828066878');


const totalm = client.channels.get('721345995539087430');
const user = client.channels.get('723918983912357888'); 
const bots = client.channels.get('723919000777523251');  
const voice = client.channels.get('723919033795215440');
const text = client.channels.get('723919050576756834');
const role = client.channels.get('723919067156840499');  
const onlineUsers = client.channels.get('723919087255814164');
const offlineUsers = client.channels.get('723919102250450974');
  
setInterval(function() {
  console.log('UPDATE STATUS...')

  
  var totalmCount = guild.memberCount;
  var userCount  = guild.members.filter(m => !m.user.bot).size;
  var botCount  = guild.members.filter(m => m.user.bot).size;
  var voiceCount = guild.channels.filter(m => m.type == 'voice').size;
  var textCount = guild.channels.filter(m => m.type == 'text').size;
  var roleCount = guild.roles.filter(m => !m.roles).size;
  var onlineCount = guild.members.filter(m => m.presence.status === 'online').size + guild.members.filter(m => m.presence.status === 'idle').size + guild.members.filter(m => m.presence.status === 'dnd').size;
  var offlineCount = guild.members.filter(m => m.presence.status === 'offline').size;
  
  console.log("All Members : " + totalmCount);
  console.log("Members : " + userCount);
  console.log("Bots : " + botCount);
  console.log("Voice Channels : " + voiceCount);
  console.log("Text Channels : " + textCount);
  console.log("Roles : " + roleCount);
  console.log("online : " + onlineCount);
  console.log("offline : " + offlineCount);

  
  
  totalm.setName("🔱┇All Members : " + totalmCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);
  
  user.setName("🔱┇Users : " + userCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);
  
  bots.setName("🔱┇Bots : " + botCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);
  
  voice.setName("🔱┇Voice Channels : " + voiceCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  text.setName("🔱┇Text Channels : " + textCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  role.setName("🔱┇Roles : " + roleCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  
  onlineUsers.setName("🔱┇online : " + onlineCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  offlineUsers.setName("🔱┇offline : " + offlineCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);
  
  }, 5000)
    
});

client.login(TOKEN);
