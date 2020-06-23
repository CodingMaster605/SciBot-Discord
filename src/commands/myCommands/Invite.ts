import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';

export default class InviteCommand extends Command {
    public constructor() {
        super('invite', {
            aliases: ['invite'],
            description: {
                content: 'Get the bot\'s invite link'
            },
            category: 'myCommands',
            ratelimit: 0,
        });
    }
    public async exec(message: Message): Promise<Message> {
        const embed = new MessageEmbed()
        .setAuthor(`${this.client.user.username} | Invite`)
        .setDescription(`Hey **${message.author.username}**! You can invite me [here](https://discord.com/oauth2/authorize?client_id=723414837975318540&permissions=8&scope=bot) \n\nI hope you like the bot!`)
        .setColor("RANDOM")
        return message.util.send(embed);
    }
}