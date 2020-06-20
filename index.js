﻿const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const timers = require('timers');
const moment = require("moment");
const timezone = require("moment-timezone");
const { TOKEN } = require("./config.json");
const express = require('express');

bot.on('ready', () => {
console.log(`${bot.user.tag} ON !`)
})
  
  bot.on('ready', message => {
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
    bot.user.setActivity(tex.nama, {type: tex.type});
  },10000);
  
  function botStatus() {
let tanggal1 = bot.channels.find("id", "721346141446340648");
tanggal1.setName(
     `${timezone()
      .tz("Asia/Jakarta")
      .locale("id")
      .format("📅 dddd,LL") + " "}`
 );

}

setInterval(botStatus, 10000);

const guild = bot.guilds.get('720980688538435634');


const totalm = bot.channels.get('721345995539087430');
const user = bot.channels.get('721346011833958430'); 
const bots = bot.channels.get('721346030695612515');  
const voice = bot.channels.get('721346054619922495');
const text = bot.channels.get('721346070906404974');
const role = bot.channels.get('721346086031327234');  
const onlineUsers = bot.channels.get('721346103542415441');
const offlineUsers = bot.channels.get('721346120541929473');
  
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

  
  
  totalm.setName("All Members : " + totalmCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);
  
  user.setName("Members : " + userCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);
  
  bots.setName("Bots : " + botCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);
  
  voice.setName("Voice Channels : " + voiceCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  text.setName("Text Channels : " + textCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  role.setName("Roles : " + roleCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  
  onlineUsers.setName("online : " + onlineCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);

  offlineUsers.setName("offline : " + offlineCount)
  .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
  .catch(console.error);
  
  }, 10000)
    
});

bot.login(TOKEN)