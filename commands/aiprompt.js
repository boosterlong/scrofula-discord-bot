const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const prompt = require("../helper_functions/ai-brain");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prompt')
        .setDescription('Get ai prompt response.')
        .addStringOption(option => option.setName('prompt').setDescription('Prompt?')),

    async execute(interaction) {
        const wait = require('node:timers/promises').setTimeout;
        const thePrompt = interaction.options.getString('prompt');
        await interaction.deferReply(`Prompt: ${thePrompt}`);
        const aiResponse = await prompt.getPromptResponse(thePrompt);
        await interaction.editReply(`***${thePrompt}*** \n ${aiResponse}`);
    },
};
