const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on("ready", ()=>{
client.user.setActivity('Baron#1500 Development', {type : 'watching'});
console.log('Loding')
setTimeout(() => {
  console.log('Loding.')//Baron#1500
}, 500)
setTimeout(() => {
  console.log('Loding..')//Baron#1500
}, 1000)
setTimeout(() => {
  console.log('Loding...')//Baron#1500
}, 1500)
setTimeout(() => {
  console.log(`Logged as ${client.user.tag}`)//Baron#1500
}, 2000)
})
client.on("message", message =>{//Baron#1500
//السطر ال تحت لمنع تكرار انشاء الرتب لو عاوز تغير اسم الرتب غيرها وحط اسمها فى السطر ال تحت كمان علشان ميحصلش سبام
let roles = message.guild.roles.find(all=> all.name === "⇁『KiNG 』‏‏༄  ❥", "⇁『LEADER』‏‏༄  ❥", "⇁『BiG BOSS 』‏‏༄  ❥", "⇁『CAPTAIN 』‏‏༄  ❥", "⇁『SERGEANT 』‏‏༄  ❥",
"⇁『youtuber 』‏‏༄  ❥", "⇁『ACTIVE 』‏‏༄  ❥");//Baron#1500
if(message.content.startsWith(prefix + "roles")) {//Baron#1500
  if(message.author.bot) return;//Baron#1500
  if(roles) return message.reply('**الرتب موجوده بالفعل**')//Baron#1500
  //دى بقا الرتب ال انت عاوزو يعملها 
  let roleking = message.guild.roles.find(r => r.name === "⇁『KiNG 』‏‏༄  ❥");//Baron#1500
  if(!roleking) {
  message.guild.createRole({//Baron#1500
  name: '⇁『KiNG 』‏‏༄  ❥',
  color: 'RANDOM',
  position: (1),
  hoist: (true),
  permissions: 'ADMINISTRATOR'
})
  }
let roleleader = message.guild.roles.find(r => r.name === "⇁『LEADER』‏‏༄  ❥");//Baron#1500
if(!roleleader) {
 message.guild.createRole({//Baron#1500
    name: '⇁『LEADER』‏‏༄  ❥',//Baron#1500
    color: 'RANDOM',
    position: (2),//Baron#1500
    hoist: (true),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
}//Baron#1500
let rolebigboss = message.guild.roles.find(r => r.name === "⇁『BiG BOSS 』‏‏༄  ❥");//Baron#1500
if(!rolebigboss) {//Baron#1500
  message.guild.createRole({
    name: '⇁『BiG BOSS 』‏‏༄  ❥',
    color: 'RANDOM',
     position: (3),//Baron#1500
     hoist: (true),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
}//Baron#1500
let rolecaptain = message.guild.roles.find(r => r.name === "⇁『CAPTAIN 』‏‏༄  ❥");//Baron#1500
if(!rolecaptain) {//Baron#1500
message.guild.createRole({
    name: '⇁『CAPTAIN 』‏‏༄  ❥',
    color: 'RANDOM',
    postion: (4),
    hoist: (true),//Baron#1500
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
}
let rolesergant = message.guild.roles.find(r => r.name === "⇁『SERGEANT 』‏‏༄  ❥");//Baron#1500
if(!rolesergant) {
 message.guild.createRole({
    name: '⇁『SERGEANT 』‏‏༄  ❥',
    color: 'RANDOM',//Baron#1500
    postion: (5),
    hoist: (true),//Baron#1500
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
}//Baron#1500
let roleyoutuber = message.guild.roles.find(r => r.name === "⇁『youtuber 』‏‏༄  ❥");
if(!roleyoutuber) {//Baron#1500
  message.guild.createRole({
    name: '⇁『youtuber 』‏‏༄  ❥',
    color: 'RANDOM',
    postion: (6),
    hoist: (true),//Baron#1500
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
}
let roleactive = message.guild.roles.find(r => r.name === "⇁『ACTIVE 』‏‏༄  ❥");//Baron#1500
if(!roleactive) {//Baron#1500
 message.guild.createRole({
  name: '⇁『ACTIVE 』‏‏༄  ❥',
  color: 'RANDOM',
  postion: (7),
  hoist: (true),//Baron#1500
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',//Baron#1500
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron#1500
})
message.guild.createRole({//Baron#1500
  name: 'Fortnite',
  color: 'RANDOM',//Baron#1500
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',//Baron#1500
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron#1500
})
message.guild.createRole({//Baron#1500
  name: 'playerunknowns',
  color: 'RANDOM',
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron#1500
})//Baron#1500
message.guild.createRole({
  name: 'counter-strike',
  color: 'RANDOM',//Baron#1500
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.guild.createRole({
  name: 'creative-destruction',//Baron#1500
  color: 'RANDOM',
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({//Baron#1500
  name: 'overwatch',
  color: 'RANDOM',
  postion: (7),//Baron#1500
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.guild.createRole({
  name: 'minecraft',//Baron#1500
  color: 'RANDOM',
  postion: (7),//Baron#1500
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.guild.createRole({//Baron#1500
  name: 'league-of-legends',
  color: 'RANDOM',//Baron#1500
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.channel.send(message.member + '**جارى انشاء الرتب**').then((m)=> {
  setTimeout(() => {//Baron#1500
    m.edit('**تم انشاء الرتب بنجاح**')
  }, 3000);//Baron#1500
})
}//Baron#1500
}
})//Baron#1500
client.on("message", message =>{
  let roleyoutuber = message.guild.roles.find(r => r.name === "⇁『youtuber 』‏‏༄  ❥");
  let rolepubg = message.guild.roles.find(r => r.name === "playerunknowns");
  let rolecsgo = message.guild.roles.find(r => r.name === "counter-strike");
  let rolecd = message.guild.roles.find(r => r.name === "creative-destruction");
  let roleow = message.guild.roles.find(r => r.name === "overwatch");
  let rolemc = message.guild.roles.find(r => r.name === "minecraft");
  let rolelol = message.guild.roles.find(r => r.name === "league-of-legends");
  let rolefortnite = message.guild.roles.find(r => r.name === "Fortnite");
//Baron#1500
  let roles = message.guild.roles.find(all=> all.name === "⇁『KiNG 』‏‏༄  ❥", "⇁『LEADER』‏‏༄  ❥", "⇁『BiG BOSS 』‏‏༄  ❥", "⇁『CAPTAIN 』‏‏༄  ❥", "⇁『SERGEANT 』‏‏༄  ❥",
"⇁『youtuber 』‏‏༄  ❥", "⇁『ACTIVE 』‏‏༄  ❥");//Baron#1500
  if(message.content.startsWith(prefix + "channels")) {
if(!roles) return message.reply("**من فضلك قم بانشاء الرتب اولا اكتب $roles**")//Baron#1500
if(roles) {//Baron#1500
message.reply("**جارى انشاء الرومات**").then((c)=> {//Baron#1500
setTimeout(() => {
  c.edit("**تم انشاء الرومات بنجاح**")//Baron#1500
}, 10000);
})
message.guild.createChannel(`${message.guild.name}-TEXT` , 'category').then(tb => {//Baron#1500
  message.guild.createChannel('welcome' , 'text').then(nws => {
    nws.setParent(tb);
    nws.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false,
      MENTION_EVERYONE: false//Baron#1500
})
  })
  message.guild.createChannel('info' , 'text').then(inf => {//Baron#1500
    inf.setParent(tb);//Baron#1500
    inf.overwritePermissions(message.guild.id, {//Baron#1500
      SEND_MESSAGES: false,
      MENTION_EVERYONE: false//Baron#1500
})
  })
    message.guild.createChannel('news' , 'text').then(nws => {//Baron#1500
      nws.setParent(tb);
      nws.overwritePermissions(message.guild.id, {//Baron#1500
        SEND_MESSAGES: false,
        MENTION_EVERYONE: false//Baron#1500
})
    })//Baron#1500
      message.guild.createChannel('chat' , 'text').then(cht => {//Baron#1500
        cht.setParent(tb);
        cht.overwritePermissions(message.guild.id, {
          MENTION_EVERYONE: false//Baron#1500
  })
      })
        message.guild.createChannel('bot-commands' , 'text').then(cmd => {//Baron#1500
          cmd.setParent(tb);
          cmd.overwritePermissions(message.guild.id, {//Baron#1500
            MENTION_EVERYONE: false//Baron#1500
    })
        })
          message.guild.createChannel('youtubers' , 'text').then(yt => {//Baron#1500
            yt.setParent(tb);//Baron#1500
            yt.overwritePermissions(roleyoutuber, {
              SEND_MESSAGES: true
          })
          yt.overwritePermissions(message.guild.id, {//Baron#1500
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          })
          })//Baron#1500
          message.guild.createChannel('pic' , 'text').then(pic => {//Baron#1500
            pic.setParent(tb);
            pic.overwritePermissions(message.guild.id, {
              MENTION_EVERYONE: false
      })
          })
            message.guild.createChannel('cut-tweet' , 'text').then(cut => {
              cut.setParent(tb);
              cut.overwritePermissions(message.guild.id, {
                MENTION_EVERYONE: false
        })//Baron#1500
            })
  })
  message.guild.createChannel(`Games-Chat` , 'category').then(tb => {//Baron#1500
  message.guild.createChannel('Fortnite' , 'text').then(wlc => {
    wlc.setParent(tb);
    wlc.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
  })//Baron#1500
  wlc.overwritePermissions(rolefortnite, {
    SEND_MESSAGES: true,
    MENTION_EVERYONE: false
})
  })//Baron#1500
  message.guild.createChannel('playerunknowns' , 'text').then(ch => {//Baron#1500
    ch.setParent(tb);
    ch.overwritePermissions(message.guild.id, {//Baron#1500
      SEND_MESSAGES: false,
      MENTION_EVERYONE: false
})
ch.overwritePermissions(rolepubg, {//Baron#1500
  SEND_MESSAGES: true,
  MENTION_EVERYONE: false//Baron#1500
})
  })
    message.guild.createChannel('counter-strike' , 'text').then(ch => {//Baron#1500
      ch.setParent(tb);
      ch.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,//Baron#1500
        MENTION_EVERYONE: false
})
ch.overwritePermissions(rolecsgo, {
  SEND_MESSAGES: true,
  MENTION_EVERYONE: false
})//Baron#1500
    })
      message.guild.createChannel('creative-destruction' , 'text').then(ch => {//Baron#1500
        ch.setParent(tb);
        ch.overwritePermissions(rolecd, {
          SEND_MESSAGES: true,//Baron#1500
          MENTION_EVERYONE: false
      })
      ch.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,
        MENTION_EVERYONE: false
      })//Baron#1500
      })
        message.guild.createChannel('overwatch' , 'text').then(ch => {//Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: true,//Baron#1500
            MENTION_EVERYONE: false
        })
        ch.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: false,
          MENTION_EVERYONE: false
        })//Baron#1500
        })
          message.guild.createChannel('minecraft' , 'text').then(ch => {//Baron#1500
            ch.setParent(tb);
            ch.overwritePermissions(rolemc, {
              SEND_MESSAGES: true,
              MENTION_EVERYONE: false
          })
          ch.overwritePermissions(message.guild.id, {//Baron#1500
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          })
          })//Baron#1500
          message.guild.createChannel('league-of-legends' , 'text').then(ch => {
            ch.setParent(tb);//Baron#1500
            ch.overwritePermissions(rolelol, {
              SEND_MESSAGES: true,
              MENTION_EVERYONE: false
          })//Baron#1500
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false//Baron#1500
          })
          })
  })
  message.guild.createChannel(`.${message.guild.name} | 🔊 .` , 'category').then(tb => {//Baron#1500
  message.guild.createChannel('「الـقـرأن الـكـريــم | 📜」' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.overwritePermissions(message.guild.id, {
      SPEAK: false//Baron#1500
})
message.guild.createChannel('「Events | 🎲 .」' , 'voice').then(ch => {
  ch.setParent(tb);
  ch.setUserLimit(50)//Baron#1500
  ch.overwritePermissions(message.guild.id, {
    SPEAK: false,
//Baron#1500
})
})
  })
})
message.guild.createChannel(`.Talking | ✋🏽 .` , 'category').then(tb => {
  message.guild.createChannel(`「${message.guild.name} | 🔊 .」` , 'voice').then(ch => {//Baron#1500
    ch.setParent(tb);
    ch.setUserLimit(50)//Baron#1500
})
message.guild.createChannel('「Sounds | ♫ .」' , 'voice').then(ch => {//Baron#1500
  ch.setParent(tb);
  ch.setUserLimit(50)//Baron#1500
})
  })
  message.guild.createChannel(`» Games | الالعاب .` , 'category').then(tb => {//Baron#1500
    message.guild.createChannel(`Fortnite | فورتنآيت .` , 'voice').then(ch => {
      ch.setParent(tb);//Baron#1500
      ch.overwritePermissions(message.guild.id, {
        CONNECT: false,
    
    })
    ch.overwritePermissions(rolefortnite, {
      CONNECT: true,//Baron#1500
  
  })
  })//Baron#1500
  message.guild.createChannel('Minecraft | مآينكرآفت' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.overwritePermissions(message.guild.id, {//Baron#1500
      CONNECT: false,
  
  })
  ch.overwritePermissions(rolemc, {//Baron#1500
    CONNECT: true,
 
})
  })//Baron#1500
  message.guild.createChannel(`Creative | كريآتف .` , 'voice').then(ch => {
    ch.setParent(tb);//Baron#1500
    ch.overwritePermissions(message.guild.id, {
      CONNECT: false,
  
  })
  ch.overwritePermissions(rolecd, {
    CONNECT: true,//Baron#1500
 
})
})
message.guild.createChannel('Legends | لوول' , 'voice').then(ch => {//Baron#1500
  ch.setParent(tb);
  ch.overwritePermissions(message.guild.id, {
    CONNECT: false,
 
})//Baron#1500
ch.overwritePermissions(rolelol, {
  CONNECT: true,//Baron#1500
 
})
})
    })
  message.guild.createChannel(`» DJ | الموسيقي .` , 'category').then(tb => {//Baron#1500
    message.guild.createChannel(`» Art.` , 'voice').then(ch => {
      ch.setParent(tb);
      ch.setUserLimit(15)//Baron#1500
  })
  message.guild.createChannel(`» Fun.` , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(15)
})//Baron#1500
message.guild.createChannel(`» Life.` , 'voice').then(ch => {
  ch.setParent(tb);
  ch.setUserLimit(15)//Baron#1500
})
message.guild.createChannel(`» Sing.` , 'voice').then(ch => {
ch.setParent(tb);
ch.setUserLimit(15)
})//Baron#1500
})
  message.guild.createChannel(`» Privates | خآص .` , 'category').then(tb => {//Baron#1500
    message.guild.createChannel(`» Single.` , 'voice').then(ch => {
      ch.setParent(tb);
      ch.setUserLimit(1)
  })//Baron#1500
  message.guild.createChannel('» Doubles.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(2)
  })//Baron#1500
  message.guild.createChannel('» Triples.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(3)
  })//Baron#1500
  message.guild.createChannel('» Forth.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(4)
  })//Baron#1500
  message.guild.createChannel('» Classic.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(10)
  })//Baron#1500
  message.guild.createChannel('» Group.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(15)
  })
    })//Baron#1500
 }
}
})//Baron#1500


client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});



client.on('message', msg => {

  if (msg.content === 'ping') {

    msg.reply('Pong!');

  }

});



client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!help |By Boss`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **الاكواد الادارية ** ' ,' ** !help-1 ** ')
.addField('     **اكواد عامة**  ' ,' **!help-2** ')
.addField('     **العاب** ' , '**!help-3**') 
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "help-1")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **وضع 50 لون ** ' ,' **&color 50** ')
.addField('     **!dcolors**  ' ,' **ازالة الوان** ')
.addField('     **!roles -&channels** ' , '**عمل سيرفر رتب و رومات*') 
.addField('     **!clear** ' ,' **مسح شات ** ')
.addField('     **!vkick **  ' ,' **طرد من روم صوتي** ')
.addField('     **!mutechannel ** ' , '**قفل روم*') 
.addField('     **!unmutechannel ** ' ,' **الغاء قفل روم** ')
.addField('     **!mute**  ' ,' **ميوت لشخص ** ')
.addField('     **!umute -&channels** ' , '**الغاء ميوت*') 
.addField('     **!warn** ' , '**تحذير *') 
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "help-2")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **!new**  ' ,' **تيكت** ')
.addField('     **!ping** ' , '**سرعة نتك**') 
.addField('     **!avatar** ' , '**افتار*') 
.addField('     **!server** ' , '**معلومات سيرفر*')
.addField('     **!invite** ' , '**اينفايت للبوت*')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
  if(message.content.startsWith(`${prefix}invite`)){
    var embed = new Discord.RichEmbed()
    .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
    .setTimestamp()
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    message.channel.send("✅ | Check Your DM! تم الأرسال بلخاص")
    message.author.send({embed})
  }
});


client.on('message', message => {
            if (message.content.startsWith(prefix + "help-3")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **قران** ' , '**قران كامل*') 
.addField('     **&pubg** ' , '**لعبة بابجي*') 
.addField('     **نكت** ' , '**&نكت*') 
.addField('     **&rps** ' , '**لعبة طوبة ورقة مقص *')  
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
    if(message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.content == prefix + `set ${args[1]} help`) {
        if(args[1] == "games" || args[1] == "general" || args[1] == "admin") {
            var  filter = m => m.author.id === message.author.id
            message.channel.send("give me the channel id now !");        
            message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
            .then(collected => {
                var toSetChannel = collected.first();
                var channel = message.guild.channels.find("id", toSetChannel.content);
                if(channel) {
                    message.channel.send("give me the message id now !")
                    var  filter = m => m.author.id === message.author.id
                    message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
                    .then(collected => {
                        var ToSetMessage = collected.first();
                        channel.fetchMessages().then(messages => {
                            var defined =  messages.filter(message => message.id == ToSetMessage.content);
                            var msg = defined.first()
                            if(defined) {
                                message.channel.send("send the emoji now!")
                                message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
                                .then(collected => {
                                    msg.react(collected.first().content)
                                    var rect = collected.first().content
                                    setReactionData(channel, msg, rect, args[1])
                                })
                            } 
                        })
                        .catch(console.error)
                    });
                } else {
                    message.channel.send("sorry i can't find this channel")
                }
            })
        }
    }
})
var setReactionData = function(channel, message, reaction, identify) {
    if(identify == "games") {
        reactForGamesHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    } else if(identify == "general") {
        reactForGeneralHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    } else if(identify == "admin") {
        reactForAdminHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    }
}   


client.on('raw',  packet  => {
    if(packet.t == "MESSAGE_REACTION_ADD") {
        var data = define(packet.d)
        if(data.user.id == client.user.id) return;
            switch (packet.d.message_id) {
            case reactForGamesHelp.messageId:
                if(reactForGamesHelp.reaction === data.emoji) {
                    requestHelp("games", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;

            case reactForGeneralHelp.messageId:
                if(reactForGeneralHelp.reaction === data.emoji) {
                    requestHelp("general", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;


            case reactForAdminHelp.messageId:
                if(reactForAdminHelp.reaction === data.emoji) {
                    requestHelp("admin", data.member, data.message)
                    data.reaction.remove(data.member)
                } else {
                    data.reaction.remove(data.member)
                }
                break;
        }
    }
});






client.on("message", message => {
    if(message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if(message.content == prefix + `set ${args[1]} help`) {
        if(args[1] == "games" || args[1] == "general" || args[1] == "admin") {
            var  filter = m => m.author.id === message.author.id
            message.channel.send("give me the channel id now !");        
            message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
            .then(collected => {
                var toSetChannel = collected.first();
                var channel = message.guild.channels.find("id", toSetChannel.content);
                if(channel) {
                    message.channel.send("give me the message id now !")
                    var  filter = m => m.author.id === message.author.id
                    message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
                    .then(collected => {
                        var ToSetMessage = collected.first();
                        channel.fetchMessages().then(messages => {
                            var defined =  messages.filter(message => message.id == ToSetMessage.content);
                            var msg = defined.first()
                            if(defined) {
                                message.channel.send("send the emoji now!")
                                message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
                                .then(collected => {
                                    msg.react(collected.first().content)
                                    var rect = collected.first().content
                                    setReactionData(channel, msg, rect, args[1])
                                })
                            } 
                        })
                        .catch(console.error)
                    });
                } else {
                    message.channel.send("sorry i can't find this channel")
                }
            })
        }
    }
})
var setReactionData = function(channel, message, reaction, identify) {
    if(identify == "games") {
        reactForGamesHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    } else if(identify == "general") {
        reactForGeneralHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    } else if(identify == "admin") {
        reactForAdminHelp = {
            channel: channel,
            messageId: message.id,
            reaction: reaction
        }
    }
}   
const devs = ["421314666002907167"]

 

const adminprefix = "!";//Narox

client.on('message', message => {

    var argresult = message.content.split(` `).slice(1).join(' ');

      if (!devs.includes(message.author.id)) return;

     

  if (message.content.startsWith(adminprefix + 'pt')) {

    client.user.setGame(argresult);

      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)

  } else

    if (message.content === (adminprefix + "Percie")) {

    message.guild.leave();        

  } else  

  if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق

  client.user.setActivity(argresult, {type:'WATCHING'});

      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)

  } else

  if (message.content.startsWith(adminprefix + 'setprefix')) {//لتغير البريفكس

  client.user.setPrefix(argresult).then

      message.channel.send(`**Prefix Changed :white_check_mark: ${argresult}** `)

  } else

  if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع

  client.user.setActivity(argresult , {type:'LISTENING'});

      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)

  } else     //Narox

    if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت

  client.user.setUsername(argresult).then

      message.channel.sendMessage(`**${argresult}** : Done `)

  return message.reply("**Name Changed :white_check_mark:**");

  } else

    if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت

  client.user.setAvatar(argresult);

    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);

        } else    

  if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت

    client.user.setGame(argresult, "https://www.twitch.tv/idk");

      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)

  }

    if(message.content === adminprefix + "restart") {// لعمل ريسترت للبوت

      if (!devs.includes(message.author.id)) return;

          message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);

        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        console.log(`⚠️ Bot restarting... ⚠️`);

        console.log("===============================================\n\n");

        client.destroy();

        child_process.fork(__dirname + "/bot.js");

        console.log(`Bot Successfully Restarted`);

    }

 

  });


client.on('message', rw => {
  if (rw.content.startsWith('vb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author
if(!men) return rw.channel.send('``');
rw.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
YOU CANT JOIN THE VOICE ROOM
BANNER : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
BANNED
BANNER : <@${rw.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
 //فكه
client.on('message', rw => {
  if (rw.content.startsWith('uvb')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author
 if(!men) return rw.channel.send('`MANTION THE MEMBER `');
 rw.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 Welcome Back
Back With : <@${rw.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL)
.setDescription(`          <@${men.id}>
GO FOR VOICE NOW
With : <@${rw.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
rw.channel.sendEmbed(Embed11).then(rw => {rw.delete(15000)})
    }
}) 


client.on("message", (message) => {

   if (message.content.startsWith("!new")) {     

        const reason = message.content.split(" ").slice(1).join(" ");     

        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);

        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    

        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {

            let role = message.guild.roles.find("name", "Support Team");

            let role2 = message.guild.roles.find("name", "@everyone");

            c.overwritePermissions(role, {

                SEND_MESSAGES: true,

                READ_MESSAGES: true

            });    

            c.overwritePermissions(role2, {

                SEND_MESSAGES: false,

                READ_MESSAGES: false

            });

            c.overwritePermissions(message.author, {

                SEND_MESSAGES: true,

                READ_MESSAGES: true

            });

            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);

            const embed = new Discord.RichEmbed()

                .setColor(0xCF40FA)

                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)

                .setTimestamp();

            c.send({

                embed: embed

            });

        }).catch(console.error);

    }

 

 

  if (message.content.startsWith("!close")) {

        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

 

        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`!confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)

            .then((m) => {

                message.channel.awaitMessages(response => response.content === '!confirm', {

                        max: 1,

                        time: 10000,

                        errors: ['time'],

                    })   

                    .then((collected) => {

                        message.channel.delete();

                    })    

                    .catch(() => {

                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {

                            m2.delete();

                        }, 3000);

                    });

            });

    }

 

});


client.on('message', message => {

    if(!message.channel.guild) return;

if (message.content.startsWith('$ping')) {

if(!message.channel.guild) return;

var msg = `${Date.now() - message.createdTimestamp}`

var api = `${Math.round(client.ping)}`

if (message.author.bot) return;

let embed = new Discord.RichEmbed()

.setAuthor(message.author.username,message.author.avatarURL)

.setColor('RANDOM')

.addField('**Time Taken:**',msg + " ms 📶 ")

.addField('**WebSocket:**',api + " ms 📶 ")

message.channel.send({embed:embed});

}

});



client.on('guildMemberAdd', Sal => { //By Salto7#4595

    var embed = new Discord.RichEmbed()

    .setAuthor(Sal.user.username, Sal.user.avatarURL)

    .setThumbnail(Sal.user.avatarURL)

    .setImage('https://cdn.discordapp.com/attachments/492862340484694027/493771573740830740/welcome1.png') //هنا حط الصوره الي تبيها

    .setTitle('عضو جديد!')

    .setDescription('مرحبا بك بالسيرفر')

    .addField('``ايدي العضو``:',"" +  Sal.user.id, true)

    .addField('``تاق العضو``', Sal.user.discriminator, true)

    .addField('``تم الانشاء في``', Sal.user.createdAt, true)

    .addField(' 👤  انت رقم',`**[ ${Sal.guild.memberCount} ]**`,true)

    .setColor('RANDOM')

    .setFooter(Sal.guild.name, Sal.guild.iconURL, true)

    var channel =Sal.guild.channels.find('name', ' (general)') // هنا حط اسم الروم الي تبيه يكتب فيه

    if (!channel) return;

    channel.send({embed : embed});

    });



client.on('guildMemberAdd', member => {

    let channel = member.guild.channels.find('name', 'welcome');

    let memberavatar = member.user.avatarURL

      if (!channel) return; 

    let embed = new Discord.RichEmbed()

        .setColor('RANDOM')

        .setThumbnail(memberavatar)

        .addField(':running_shirt_with_sash: | name :  ',`${member}`)

        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)

        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )

                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)

               

                  .addField("Name:",`<@` + `${member.id}` + `>`, true)

                      

                                     .addField(' الـسيرفر', `${member.guild.name}`,true)

                                       

     .setFooter("**SERVER NAME **")

        .setTimestamp()

    

      channel.sendEmbed(embed);

    });


	client.on('message', message =>{

    let args = message.content.split(' ');

    let prefix = '!'; //تقدر تغير البرفكس
		
    if(args[0] === `${prefix}avatar`){

        let mentions = message.mentions.members.first()

        if(!mentions) {

          let sicon = message.author.avatarURL

          let embed = new Discord.RichEmbed()

          .setImage(message.author.avatarURL)

          .setColor("ff0000") 

          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);

          message.channel.send({embed})

        } else {

          let sicon = mentions.user.avatarURL

          let embed = new Discord.RichEmbed()

          .setColor("ff0000")

          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)

          .setImage(sicon)

          message.channel.send({embed})

        }

    };

});

client.on('message', message => {

var prefix = "!";

       if(message.content === prefix + "mutechannel") {

                           if(!message.channel.guild) return message.reply('** This command only for servers**');



   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: false



              }).then(() => {

                  message.reply("**__تم تقفيل الشات__ ✅ **")

              });

                }

//FIRE BOT

    if(message.content === prefix + "unmutechannel") {

                        if(!message.channel.guild) return message.reply('** This command only for servers**');



   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');

              message.channel.overwritePermissions(message.guild.id, {

            SEND_MESSAGES: true



              }).then(() => {

                  message.reply("**__تم فتح الشات__✅**")

              });

    }

       

});

client.on("message", message => {

  let men = message.mentions.users.first();

  if(message.content.startsWith( "!vkick")) {

    try {

    if(!men) {

      message.channel.send("**الرجاء اخيار شخص لطرده !**");

      return;

    }

    if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");

    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")

    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");

       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")



    message.guild.createChannel("AgentX VKick", "voice").then(c => {

      message.guild.member(men).setVoiceChannel(c.id)

    setTimeout(() => {

      c.delete()

    }, 100)

    });

    message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)

} catch (e) {

  message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");

}

  }

});

client.on("guildMemberAdd", member => {

  member.createDM().then(function (channel) {

  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 

:crown:اسم العضو  ${member}:crown:  

انت العضو رقم ${member.guild.memberCount} `) 

}).catch(console.error)

})


client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'clear')) {
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("**:octagonal_sign: || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("**:bulb: || أختر كميه الرسائل المراد مسحها .**").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });


client.on('message', function(message) {

    if(!message.channel.guild) return;

if(message.content ===  '!color 50') {

if(message.member.hasPermission('MANAGE_ROLES')) {

setInterval(function(){})

message.channel.send('سيتم عمل الالوان انتظر ...')//Narox

}else{

message.channel.send('** يجب ان يكون لديك برمشن ،"MANAGE_ROLES" ❌**')

}

}

});



//color

client.on('message', message=>{

if (message.content ===  '!color 50'){

if(!message.channel.guild) return;

if (message.member.hasPermission('MANAGE_ROLES')){

  setInterval(function(){})

    let count = 0;

    let ecount = 0;

for(let x = 1; x < 50; x++){//اذا تريد ان تقوم بزياده الالوان قم بتعديل رقم 100

message.guild.createRole({name:x,

color: 'RANDOM'})

}

}

}

})

client.on('message', async message => {

  if(message.author.bot) return;

  let prefix = '!';



  let command = message.content.split(" ")[0].slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if(!message.content.toLowerCase().startsWith(prefix)) return;



  if(command == 'dcolor') {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`لاتمتلك الصلاحيات لفعل ذلك! :x:`);

    message.channel.send("جاري المسح..").then(async m => {

      await message.guild.roles.forEach(role => {

        if(/^\d+$/gi.test(role.name)) {

          role.delete();

        }

      });

      m.edit(`تم إزالة جميع الالوان.`)

    });

  }

});

	
client.on('message', message => {
    var p = message.mentions.members.first();
    var reason = message.content.split(" ").slice(2).join(' ');
    var log = message.guild.channels.find('name', 'log');
    if(message.content.startsWith(`${prefix}warn`)){
        if(!p) return message.reply(`**Mention the user!**`);
        if(!reason) return message.reply(`**Spofic a reason!**`);
        if(!p.bannable) return message.reply(`**I can't ban a staff member!**`);
        reason = reason.replace('0', "**نشر في الخاص**");
        reason = reason.replace('1', "**اسم غير لائق**");
        reason = reason.replace('2', "**صوره غير لائقه**");
        reason = reason.replace('3', "**سب الاهل**");
        reason = reason.replace('4', "**سب الذات الاهيه**");
        reason = reason.replace('5', "**مخالفه القوانين مع اخذ اكثر من تحذير**");
        reason = reason.replace('6', "**سبام في الشات**");
        reason = reason.replace('7', "**استخدام بعض الاوامر بشكل مسبب للإضرار بالسيرفر**");
        reason = reason.replace('8', "**جلب اعضاء مفبركين للسيرفر**");
        reason = reason.replace('9', "**عنصريه**");
        var embed = new Discord.RichEmbed()
        .setAuthor(`User Warned!`)
        .addField(`Name ♣`, `<@${p.id}>`)
        .addField(`By ♣`, `<@${message.author.id}>`)
        .addField(`Reason ♣`, reason)
        .setTimestamp()
        .setColor("WHITE")
        .setFooter(` `)
        message.channel.send(`${p} ${reason}`)
            message.delete();
        log.send({embed});
    }
});//maestro

client.on('message', async message =>{
  var prefix = "!";
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});


 
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('🌐 **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField('🌍 ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField('🎖** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField('👤** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField('✅** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField('📝** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField('🔊** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField('👑** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField('🆔** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField('📅** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      .addField('😴** روم AFK**',`**${msg.guild.afkChannel || 'None'}**`, true)
      .addField('🙃** الايموجيات :**', `**${msg.guild.emojis.size}** \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);
      msg.channel.send({embed:embed});
    }
  });//maestro

client.on('message', message => {
if(message.content === prefix + 'quran' || message.content === prefix + 'قرآن') {
	let pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png']
	let page = 1;
	
	message.delete();
	
	let embed = new Discord.RichEmbed()
	.setColor('#264d00')
	.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png')
	.setImage(pages[page-1])
	
// ${page}
// ${pages.length}
	message.channel.sendEmbed(embed).then(msg => {
		
		msg.react('⏮').then( r => {
			msg.react('⬅')
		.then(() => msg.react('⏹'))
		.then(() => msg.react('➡'))
		.then(() => msg.react('⏭'))
			
			let backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			let forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
			
			let sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
			let sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;
			
			let cancelFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
			
			let backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
			let forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });
			
			let sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			let sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });
			
			let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
			
			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;
				page = 200; 
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**سوف يتم إغلاق القائمة**`);
				embed.setImage('');
				embed.setFooter(`Menu will close after 3sec`, 'https://cdn.discordapp.com/attachments/404332408075190282/412722171325054996/NS1.png');
				msg.edit(embed).then(msg.delete(3000));
			})
		})
	})
}
});

const pubg = [
     'PUBG | ما هو اقوي سلاح برائيك ؟',
     'PUBG | اين تجد سلاح الجروزا ؟ Grozza',
     'PUBG | ماذا تفضل اكثر ام فور ام سكار ؟',
     'PUBG | ايهما تفضل vss ام Awm',
     'PUBG | ماذا تفضل اكثر ؟ سولو ام سكواد ؟',
     'PUBG | كم جيم كسبت في العبه ؟',
     'PUBG | ما هو اكثر عدد قتلت في مسيرتك بالعبه',
     'PUBG | اذا انت المركز ال 2 هل سوف تقوم بتمشي علي رجلك ام ستاخذ سياره تحميك ؟',
     'PUBG | اذا وجدت شخصين يتقاتلان , هل سوف تتقاتل معهم ام تنتظر قليلا حتي يقتل احدهما الاخر ؟',
     'PUBG | اذا صديقك بالاسكواد يحتاج مساعده هل تساعده ام تتركه ؟',
     'PUBG | اذا تم عمل لصديقك كونك اوت وامامك لوت كثير جدا سوف تذهب لتساعده ام تاخذ الوت وتدعه يموت ؟',
     'PUBG | اين تجد ملابس القناصه ؟ ghillie suit ?',
     'PUBG | ايهما تفضل ؟ الاختباء حتي يتبقي اشخاص قليله ام تذهب لتقتل ولا تختبئ',
     'PUBG | اين تفضل ان تهبط من الطائره ؟ الاماكن الهادئيا لوت صغير ام الاماكن المزدحمه بالاعبين لاكن لوت كثير',
     'PUBG | كم عدد المرات التي فزت بها لوحدك سولو ؟',
     'PUBG | ما هو افضل سلاح تجيد استخدامه ؟',
     'PUBG | ما هو اندر سلاح قد تجده برائيك ؟',
     'PUBG | ما هو اندر سلاح جديد قد تجده برائيك ؟',
     'PUBG | ما هو عدوك في العبه لاق البنق ام لاق الفريمات الاف بي اس ؟',
     'PUBG | ايهما تفضل العب ؟ فـ المساء ام الصباح ؟',
     'PUBG | هل تحب ان يكون الجيم ملئ بلاعبين ام لاعبين قليلين ؟',
     'PUBG | هل الملابس تعبر عن انك محترف ام لا ؟',
     'PUBG | كم معك من مال ( كوين ) بلعبه ؟',
     'PUBG | ما هو اكثر شئ تكرهه في العبه ؟',
     'PUBG | ما هو اكثر شئ تحبه بلعبه ؟',
     'PUBG | ماذا تفضل شتو قن ( بندقيه ) ام قناصه ؟',
     'PUBG | ماذا تفضل اكثر ؟ درع لفل 3 متضرر ام درع لفل 2 غير متضرر',
     'PUBG | تفضل ان تلعب مع صديقك سكواد ام شخص غريب ؟',
     'PUBG | هل تظن انك افضل شخص في اصدقائك بهذه اللعبه؟',
     'PUBG | قيم نفسك من 10 كـ احتراف لك بالعبه',
     'PUBG | هل فزت جيم من قبل بالعبه ؟',
     'PUBG | هل وصلت للمركز ال 10 ( توب 10 ) قبل هكذا بلعبه ؟',
     'PUBG | هل قمت بلعب مع صديقك من قبل بلعبه ؟',
     'PUBG | هل تعلم من اخترع العبه ؟',
     'PUBG | لو خيروك لعبه ببجي ام فورت نايت ؟',
     'PUBG | هل يوجد شخص من اصدقاءك محترف اكثر منك ام انت اكثر شخص محترف ما بين اصدقاءك ؟',
     'PUBG | اذا كنت من فريق مطورين العبه ماذا ستفعل ؟',
     'PUBG | قيم من 10 مدي حبك للعبه',
     'PUBG | هل تحب ان تتكلم صوت مع اصدقاءك وانت تلعب معاهم ام لا تحب هذا الامر ؟',
 
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('&pubg')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبه اسئله باتل جرواند")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/416617103492251658/477741838292484127/pubg-orange-square.png")
                  .setTimestamp()
 
   message.channel.sendEmbed(client);
   message.react("??")
 }
});

client.on('message', message => {
var prefix = "!";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on("message", function(message) {
	var prefix = "!";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","ًں‡·",true)
    .addField("Paper","ًں‡µ",true)
    .addField("Scissors","ًں‡¸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ًں‡·')
        msg.react("ًں‡¸")
        msg.react("ًں‡µ")
.then(() => msg.react('ًں‡·'))
.then(() =>msg.react('ًں‡¸'))
.then(() => msg.react('ًں‡µ'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === 'ًں‡·' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === 'ًں‡¸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === 'ًں‡µ' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});


const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});



client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted')); 
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
      .addField(`by`,`ALPHACODES`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL) 
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500) 
    
        
    }
    }
})
