const { command, isPublic } = require("../../lib/")
command(
  {
    pattern: "hi",
    fromMe: isPublic,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {


    
let data = {
      jid: message.jid,
      button: [

        {
          type: "reply",
          params: {
            display_text: "ᴩɪɴɢ",
            id: "ping",
          },
        },

{
          type: "reply",
          params: {
            display_text: "ɢʀᴏᴜᴩꜱ",
            id: "xyzajsalsparkyxyz",
          },
        },


        {
          type: "url",
          params: {
            display_text: "ᴠɪꜱɪᴛ",
            url: "https://sy4m.vercel.app",
            merchant_url: "https://sy4m.vercel.app",
          },
        },

{
          type: "url",
          params: {
            display_text: "ʙᴏᴛ",
            url: "https://wa.me/918921602850?text=.list",
            merchant_url: "https://wa.me/918921602850?text=.list",
          },
        },


        
      ],
      header: {
        title: "𝙎𝙆𝙎 𝘽𝙊𝙏☮︎",
        subtitle: "𝘈 𝘴𝘪𝘮𝘱𝘭𝘦 𝘮𝘶𝘭𝘵𝘪 𝘥𝘦𝘷𝘪𝘤𝘦 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘣𝘰𝘵",
        hasMediaAttachment: false,
      },
      footer: {
        text: "ꪶ٭𝑺𝜥𝑺 𝐵𝜣𝑆𝑆٭ꫂ",
      },
      body: {
        text: "_Hey_\n_How can i help youh?_\n\n",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");


/// ✅️✅️✅️✅️✅️✅️///// 
    let groupjid = ("120363318857794172@g.us")

const user =  message.participant
const gtorf = message.isGroup
const name = message.pushName
const chat = message.jid
const oguser = `wa.me/${user.split("@")[0]}`


let textui = (`*_Hey Sparky_* 😵\n_Someone Used Hi,Hey, Hy Command_\n\n*ᴜꜱᴇʀ :-* ${oguser}\n*ɢʀᴏᴜᴩ :-* ${gtorf}\n*ᴄʜᴀᴛ/ᴊɪᴅ :-* ${chat}\n\n*© ᴍᴇᴅɪᴀ-ɢᴇᴛ*`)



await message.sendMessage(groupjid, textui);

///////✅️✅️✅️✅️✅️✅️4❤️❤️❤️//////
    
    
  }
);


command(
  {
    pattern: "hy",
    fromMe: isPublic,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    

    
let data = {
      jid: message.jid,
      button: [

        {
          type: "reply",
          params: {
            display_text: "ᴩɪɴɢ",
            id: "ping",
          },
        },

{
          type: "reply",
          params: {
            display_text: "ɢʀᴏᴜᴩꜱ",
            id: "xyzajsalsparkyxyz",
          },
        },


        {
          type: "url",
          params: {
            display_text: "ᴠɪꜱɪᴛ",
            url: "https://sy4m.vercel.app",
            merchant_url: "https://sy4m.vercel.app",
          },
        },

{
          type: "url",
          params: {
            display_text: "ʙᴏᴛ",
            url: "https://wa.me/918921602850?text=.list",
            merchant_url: "https://wa.me/918921602850?text=.list",
          },
        },



      ],
      header: {
        title: "𝙎𝙆𝙎 𝘽𝙊𝙏☮︎",
        subtitle: "𝘈 𝘴𝘪𝘮𝘱𝘭𝘦 𝘮𝘶𝘭𝘵𝘪 𝘥𝘦𝘷𝘪𝘤𝘦 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘣𝘰𝘵",
        hasMediaAttachment: false,
      },
      footer: {
        text: "ꪶ٭𝑺𝜥𝑺 𝐵𝜣𝑆𝑆٭ꫂ",
      },
      body: {
        text: "_Hey_\n_How can i help youh?_\n\n",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");

    /// ✅️✅️✅️✅️✅️✅️///// 
    let groupjid = ("120363318857794172@g.us")

const user =  message.participant
const gtorf = message.isGroup
const name = message.pushName
const chat = message.jid
const oguser = `wa.me/${user.split("@")[0]}`


let textui = (`*_Hey Sparky_* 😵\n_Someone Used Hi,Hey, Hy Command_\n\n*ᴜꜱᴇʀ :-* ${oguser}\n*ɢʀᴏᴜᴩ :-* ${gtorf}\n*ᴄʜᴀᴛ/ᴊɪᴅ :-* ${chat}\n\n*© ᴍᴇᴅɪᴀ-ɢᴇᴛ*`)



await message.sendMessage(groupjid, textui);

///////✅️✅️✅️✅️✅️✅️4❤️❤️❤️//////
    
  }
);

command(
  {
    pattern: "hey",
    fromMe: isPublic,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {


    
    
let data = {
      jid: message.jid,
      button: [

        {
          type: "reply",
          params: {
            display_text: "ᴩɪɴɢ",
            id: "ping",
          },
        },

{
          type: "reply",
          params: {
            display_text: "ɢʀᴏᴜᴩꜱ",
            id: "xyzajsalsparkyxyz",
          },
        },


        {
          type: "url",
          params: {
            display_text: "ᴠɪꜱɪᴛ",
            url: "https://sy4m.vercel.app",
            merchant_url: "https://sy4m.vercel.app",
          },
        },


{
          type: "url",
          params: {
            display_text: "ʙᴏᴛ",
            url: "https://wa.me/918921602850?text=.list",
            merchant_url: "https://wa.me/918921602850?text=.list",
          },
        },


      ],
      header: {
        title: "𝙎𝙆𝙎 𝘽𝙊𝙏☮︎",
        subtitle: "𝘈 𝘴𝘪𝘮𝘱𝘭𝘦 𝘮𝘶𝘭𝘵𝘪 𝘥𝘦𝘷𝘪𝘤𝘦 𝘸𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘣𝘰𝘵",
        hasMediaAttachment: false,
      },
      footer: {
        text: "ꪶ٭𝑺𝜥𝑺 𝐵𝜣𝑆𝑆٭ꫂ",
      },
      body: {
        text: "_Hey_\n_How can i help youh?_\n\n",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");

/// ✅️✅️✅️✅️✅️✅️///// 
    let groupjid = ("120363318857794172@g.us")

const user =  message.participant
const gtorf = message.isGroup
const name = message.pushName
const chat = message.jid
const oguser = `wa.me/${user.split("@")[0]}`


let textui = (`*_Hey Sparky_* 😵\n_Someone Used Hi,Hey, Hy Command_\n\n*ᴜꜱᴇʀ :-* ${oguser}\n*ɢʀᴏᴜᴩ :-* ${gtorf}\n*ᴄʜᴀᴛ/ᴊɪᴅ :-* ${chat}\n\n*© ᴍᴇᴅɪᴀ-ɢᴇᴛ*`)



await message.sendMessage(groupjid, textui);

///////✅️✅️✅️✅️✅️✅️4❤️❤️❤️//////

    
  }
);
