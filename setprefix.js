/*

  This command uses the Database Manager: MegaDB (npm install megadb)
  I dont even know if someone still uses the prefix commands
  If you are one of those, please start considering Slash Commands, those are much easier, trust me

  Anyways, here is the code
  Hey, those who still uses prefix commands, this is for you <3
  
*/

const Discord = require("discord.js")
const db = require("megadb")
const setprefix = new db.crearDB("setprefix")

module.exports = {
    name: "setprefix",
    alias: [],

    execute(client, message, args){

        if(args[0]) return message.channel.send({ content: "Debes especificar el prefijo" })

        setprefix.establecer(message.guild.id, args[0])
        if(!message.member.permissions.has("Administrator")) return message.channel.send({ content: "Debes tener permisos de administrador para usar este comando" })
      
    }
}

// File: setprefix ------------------------------------------------------------------------------------------------------

{
  "GUILDID": "!"
}

// File: Index.js -------------------------------------------------------------------------------------------------------

const db = require("megadb")
const setprefix = new db.crearDB("setprefix")

client.on("messageCreate", async message => {
  
let prefix;
  
if(setprefix.tiene(message.guild.id)){
  let prefix = await setprefix.obtener(message.guild.id)
} else {
  prefix = "x."
}
  
if(message.author.bot) return;
if (message.content.startsWith(prefix)) return;

  // You can see the rest of this part of the code in the command handler video...

})

// ----------------------------------------------------------------------------------------------------------------------
