const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { DiceRoller } = require('dice-roller-parser');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Rolls a die using Roll20 syntax.')
        .addStringOption(option => option.setName('roll').setDescription('Roll using Roll20 syntax')),

    async execute(interaction) {
        const rollString = interaction.options.getString('roll');
        const diceRoller = new DiceRoller();
        const rollData = diceRoller.rollValue(rollString);

        const rollEmbed = new EmbedBuilder()
            .setColor(0xFF6300)
            .setTitle(`Result: ${rollData}`)
            .setFooter({ text: 'This feature is a work in progress and only shows the final result.' })
        await interaction.reply({ embeds: [rollEmbed] });
    },
};