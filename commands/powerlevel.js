const { SlashCommandBuilder } = require('discord.js');
const dice = require("../helper_functions/dice");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('powerlevel')
        .setDescription('Checks your power level.'),
    async execute(interaction) {
        await interaction.reply(`${dice.getRandomBigInt()}`);
    },
};