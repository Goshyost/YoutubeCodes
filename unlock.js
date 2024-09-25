/*

  I was thinking that making this command in a separated file from the "lock" one was kinda pointless, the diference between lock and unlock codes its just changing a false to true and some texts LMAO
  But here I am, wasting my name, i really hope someone to use this lol

  I'll put both versions, slash command and prefix.
  
*/

const { SlashCommandBuilder } = require("discord.js");
const { PermissionFlagsBits } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("unlock")
    .setDescription("Abre un canal para el uso habitual de los usuarios")
    .setDefaultMemberPermissions(Discord.PermissionFlagsBits.ManageChannels),
    
  /**
   *
   * @param {import("discord.js").Client<true>} client
   * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction
   */

  async run(client, interaction) {
  
    interaction.channel.permissionOverwrites.create(interaction.guild.id, { SendMessages: true })
    
     const Abierto = new Discord.EmbedBuilder()
    .setAuthor({ name: `Moderador: ${interaction.user.displayName}`, iconURL: interaction.user.avatarURL() })
    .setDescription("```El canal ha sido Abierto```")
    .setColor("Green")
    .setTimestamp()
    interaction.reply({ embeds: [Abierto] })
  
  },
};

// Prefix Command ----------------------------------------------------------------------------------------------------

const Discord = require("discord.js")

module.exports = {
    name: "unlock",
    alias: [],

    execute(client, message, args){

       if(!message.member.permissions.has("ManageChannels")) return message.channel.send({ content: "Debes tener permisos: Gestionar Canales para usar este comando" })
 
       message.channel.permissionOverwrites.create(message.guild.id, { SendMessages: true })
    
       const Abierto = new Discord.EmbedBuilder()
       .setAuthor({ name: `Moderador: ${message.user.displayName}`, iconURL: message.user.avatarURL() })
       .setDescription("```El canal ha sido Abierto```")
       .setColor("Green")
       .setTimestamp()
       message.channel.send({ embeds: [Abierto] })
      
    }
}

// -------------------------------------------------------------------------------------------------------------------
