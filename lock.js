/*
  This command suffered slight changes since my video about it
  The changes are quite small, but just to make sure, I used another code
  I hope it works, because I didnt actually give it a good test, so here be dragons

  I'll put both versions, slash command and prefix.
*/

const { SlashCommandBuilder } = require("discord.js");
const { PermissionFlagsBits } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lock")
    .setDescription("Cierra un canal para el uso habitual de los usuarios")
    .setDefaultMemberPermissions(Discord.PermissionFlagsBits.ManageChannels),
    
  /**
   *
   * @param {import("discord.js").Client<true>} client
   * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction
   */

  async run(client, interaction) {
  
    interaction.channel.permissionOverwrites.create(interaction.guild.id, { SendMessages: false })
    
     const Cerrado = new Discord.EmbedBuilder()
    .setAuthor({ name: `Moderador: ${interaction.user.displayName}`, iconURL: interaction.user.avatarURL() })
    .setDescription("```El canal ha sido cerrado```")
    .setColor("Red")
    .setTimestamp()
    interaction.reply({ embeds: [Cerrado] })
  
  },
};

// Prefix Command ----------------------------------------------------------------------------------------------------

const Discord = require("discord.js")

module.exports = {
    name: "lock",
    alias: [],

    execute(client, message, args){

       if(!message.member.permissions.has("ManageChannels")) return message.channel.send({ content: "Debes tener permisos: Gestionar Canales para usar este comando" })
 
       message.channel.permissionOverwrites.create(message.guild.id, { SendMessages: false })
    
       const Cerrado = new Discord.EmbedBuilder()
       .setAuthor({ name: `Moderador: ${message.user.displayName}`, iconURL: message.user.avatarURL() })
       .setDescription("```El canal ha sido cerrado```")
       .setColor("Red")
       .setTimestamp()
       message.channel.send({ embeds: [Cerrado] })
      
    }
}

// -------------------------------------------------------------------------------------------------------------------
