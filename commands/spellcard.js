const { SlashCommandBuilder } = require('discord.js');
const spellcard = require("../helper_functions/5e-api");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spellcard')
        .setDescription('Get the info for a spell.')
        .addStringOption(option => option.setName('spell').setDescription('Spell name?')),

    async execute(interaction) {
        const spellName = interaction.options.getString('spell').replace(' ', '-');
        const spell = await spellcard.getSpellCard(`${spellName}`).catch(() => { return 'Didn\'t work.'})
        const classList = []
        const description = []

        spell.desc.forEach((string, index) => description.push(
            { name: (index == 0) ? "Description" : '\u200B', value: string })
        )

        spell.classes.forEach((index) => classList.push(index.name))

        const spellEmbed = new EmbedBuilder()
            .setColor(0xFF6300)
            .setTitle(`${spell.name}`)
            .setURL(`https://roll20.net/compendium/dnd5e/${spell.index.replace('-', '%20')}`)
            .setDescription(`${spell.school.name} ${(spell.level > 0) ? spell.level : 'cantrip'}`)
            .addFields(
                { name: 'Casting Time', value: spell.casting_time },
                { name: 'Range', value: spell.range, inline: true },
                { name: 'Components', value: spell.components.join(' '), inline: true },
                { name: 'Duration', value: spell.duration, inline: true  },
            )
            .addFields(description)
            .setFooter({ text: classList.join(', ') });
        await interaction.reply({ embeds: [spellEmbed] });
    },
};