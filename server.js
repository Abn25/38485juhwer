const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`https://artbotbxprime.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const zalgo = require("zalgolize");
const math = require("math-expression-evaluator");
const figlet = require("figlet");
const fs = require("fs");
const ms = require("ms");
const prefix = "$";
var Client = client;


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("$help",{type: 'playing'});
 
});

client.on('ready', () => {
  console.log('|===================================|');
  console.log(`|  Users Size ${client.users.size}  |`);
  console.log(`| Guilds Size ${client.guilds.size} |`);
  console.log(`|===================================|`);
  console.log(`| Created By <@532325977921945603>  |`);
  console.log(`|===================================|`);
  console.log(`|        ArtBot Log By You !        |`);
  console.log(`|===================================|`);
});

client.on ('guildCreate', async (guild) => {
    var guilds = ["665926761300754442", "guildid2", "guildid2", "guildid2", "guildid2", "guildid2", "guildid2", "guildid2"];
    if (guilds.includes (guild.id)) return;
    else guild.leave();
});


client.on('message',async message => {
  if(message.content.startsWith(prefix + "voiceonline")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.Channel.sand('');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('');
  message.channel.send(':white_check_mark:| ** The rum was done successfully **');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },3600);
  });
  }
});

client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 3600,
    }).then(invite =>
      message.channel.sendMessage(invite.url)
    )
      message.channel.send(``)
        
      message.channel.send(`**مدة الرابط يـوم عدد استخدامات الرابط : 100 اشخاص **`)
    }
});

client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("link")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 3600,
    }).then(invite =>
      message.channel.sendMessage(invite.url)
    )
      message.channel.send(``)
        
      message.channel.send(`**Duration of the link on the number of times the link is used : 100 users**`)
    }
});


client.on('message', message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(args == 'all') {message.guild.fetchBans().then(zg => {
  zg.forEach(NoNo => {message.guild.unban(NoNo);})});
  return message.channel.send('**✅ Unbanned all Members**')}
  if(!args) return message.channel.send('**:rolling_eyes: - I can find  in the ban list**');
  message.guild.unban(args).then(m =>{message.channel.send(``);
  }).catch(stry =>{message.channel.send(``)});
  }});































































































































































































































client.login('Njc4NjkxMjc3MDcxNDUwMTUy.XkmerA.oBFhIttjeDif4QGmbmrB61MTvy8');
