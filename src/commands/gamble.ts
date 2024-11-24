import { EmbedBuilder } from 'discord.js';
import type { Command } from './index.js';

export default {
	data: {
		name: 'coinflip',
		description: 'Flip a coin!',
		options: [
			{
				name: 'bet',
				description: 'The side you bet on',
				type: 3,
				choices: [
					{ name: 'Heads', value: 'heads' },
					{ name: 'Tails', value: 'tails' },
				],
				required: true,
			},
			{
				name: 'amount',
				description: 'The amount you bet',
				type: 4,
				required: true,
			},
		],
	},
	async execute(interaction) {
		const betOption = interaction.options.get('bet') as { value: string };
		const amountOption = interaction.options.get('amount') as { value: number };

		const result = Math.random() < 0.5 ? 'heads' : 'tails';

		const embed = new EmbedBuilder()
			.setTitle('Coin Flip')
			.setDescription(`You bet ${amountOption.value} on ${betOption.value}\n\nThe coin landed on ${result}`)
			.setColor(0x00ae86);

		await interaction.reply({ embeds: [embed] });
	},
} satisfies Command;
