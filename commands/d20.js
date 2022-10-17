const { SlashCommandBuilder } = require('discord.js');
const dice = require("../helper_functions/dice");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('d20')
        .setDescription('Rolls a twenty-sided die.'),
    async execute(interaction) {
        await interaction.reply(`${dice.getRandomInt(20)}`);
    },
};