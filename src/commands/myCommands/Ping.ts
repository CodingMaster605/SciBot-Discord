import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';

export default class PingCommand extends Command {
    public constructor() {
        super('ping', {
            aliases: ['ping', 'latency'],
            description: {
                content: 'An example command that gets the bot\'s ping in ms.'
            },
            category: 'myCommands',
            ratelimit: 0,
        });
    }

    public async exec(message: Message): Promise<Message> {
        const progressembed = new MessageEmbed()
        .setDescription(`Pinging...`)
        const m = await message.util!.send(progressembed);
        const resultembed = new MessageEmbed()
        .setDescription(`Pong! **${this.client.ws.ping}**ms`)
        .setColor("RANDOM")
        return m.edit(resultembed);
    }
}