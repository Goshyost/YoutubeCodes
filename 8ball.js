/*

  This is an updated code from my 8ball youtube video
  The reason of why i updated it, its because the video has an old format
  
  It was made with the event "messageCreate"
  So i decided to adapt it to the new format of "interactionCreate" AKA Slash Commands
  The code has even a little bit of new features, because it was extracted from my project "New undergrounds Bot"

  Dont blame me, im too lazy to re-create a command that i made a long time ago.

  Heres the link of the video: https://www.youtube.com/watch?v=pBp-jvZNJ78

*/

const { SlashCommandBuilder } = require("discord.js");
const { PermissionFlagsBits } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Introduce una pregunta y el bot te respondera")
    .addStringOption(option => 
                   option.setName("pregunta")
                   .setDescription("Escribe la pregunta que quieres hacerle al bot")
                   .setRequired(true)),
    
  /**
   *
   * @param {import("discord.js").Client<true>} client
   * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction
   */

  async run(client, interaction) {
  
      let pregunta = interaction.options.getString("pregunta")
      
  const messages = ["Puede ser", "Si", "No", "Probablemente Si", "Probablemente No", "Tal vez", "Existe una probabilidad", "En ningun universo existente", "Rotundamente", "Imposible", "¡Claro que si!", "¡Claro que no!", "Estoy seguro de que no", "Estoy seguro de que si", "No lo dudes", "100% Si", "100% No"]

	const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
      const ballEmbed = new Discord.EmbedBuilder()
      .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
      .setTitle("8ball 🎱")
      .addFields(
            { name: 'Pregunta', value: `${pregunta}` },
            { name: 'Respuesta', value: `${randomMessage}` },
        )
      .setTimestamp()
      .setThumbnail("https://media.discordapp.net/attachments/1263972053212725278/1275587451049607241/1f3b1.png?ex=66c66ee3&is=66c51d63&hm=4608414a437af6d7c4210b19becd4620129693f582f1805fe2bf8b58f139c1c3&=&format=webp&quality=lossless&width=640&height=640")

    // This setTimeout part make the bot display in the chat "Bot is thinking..."
    
      await interaction.deferReply()
      
      setTimeout(() => {
          interaction.editReply({ embeds: [ballEmbed]})
      }, 2000) // After the specified ticks, it sends the message.
      
  },
};
