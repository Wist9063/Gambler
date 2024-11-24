import type { Command } from '../index.js';

export default {
	data: {
		name: 'ping',
		description: 'Ping!',
		type: 1,
	},
	async execute(interaction) {
		await interaction.reply('Getting ping & testing response time...');
		await interaction.editReply(
			`:satellite_orbital: Latency reactivity is ${Date.now() - interaction.createdTimestamp}ms. Latency Heartbeat to API is ${Math.round(interaction.client.ws.ping)}ms.`,
		);
	},
} satisfies Command;
