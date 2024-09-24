
// Made by: Goshyost - 2024

const { SlashCommandBuilder } = require("discord.js");
const { PermissionFlagsBits } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sendmessage")
    .setDescription("Envia un mensaje a travez del bot.")
    .addStringOption(option => option.setName("mensaje").setDescription("Especifica el mensaje que quieres mandar").setRequired(true))
    .addChannelOption(option => option.setName("canal").setDescription("Especifica el canal a donde quieres mandar el mensaje").setRequired(false))
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  /**
   *
   * @param {import("discord.js").Client<true>} client
   * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction
   */

  async run(client, interaction) {

    let texto = interaction.options.getString("mensaje") 
    let canal = interaction.options.getChannel("canal") 

    if(canal){

      if(canal.type !== "GUILD_TEXT") return interaction.reply({ content: "Por favor, selecciona un Canal de Texto...", ephemeral: true })
      client.channels.cache.get(canal.id).send(texto)
      interaction.reply({ content: "Se ha mandado el mensaje exitosamente al canal: <#"+canal.id+">", ephemeral: true })

    } else {

      client.channels.cache.get(interaction.channel.id).send(texto)
      interaction.reply({ content: "Se ha mandado el mensaje exitosamente a este canal.", ephemeral: true })

    }

  },
};
