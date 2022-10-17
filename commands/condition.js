const { SlashCommandBuilder } = require('discord.js');
const getCondition = require("../helper_functions/5e-api");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('condition')
        .setDescription('Get the info for a condition.')
        .addStringOption(option => option.setName('condition').setDescription('Condition name?')),

    async execute(interaction) {
        const conditionName = interaction.options.getString('condition');
        const condition = await getCondition.getCondition(`${conditionName}`).catch(() => { return 'Didn\'t work.'})
        const description = []

        condition.desc.forEach((string) => description.push(
            { name: '\u200B', value: string })
        )

        const conditionEmbed = new EmbedBuilder()
            .setColor(0xFF6300)
            .setTitle(`${condition.name}`)
            .setURL('https://roll20.net/compendium/dnd5e/Conditions')
            .addFields(description)
        await interaction.reply({ embeds: [conditionEmbed] });
    },
};