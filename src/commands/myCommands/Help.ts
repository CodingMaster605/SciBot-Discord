import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';

export default class HelpCommand extends Command {
    public constructor() {
        super('help', {
            aliases: ['help', 'info'],
            description: {
                content: 'Want help? Just use this command!'
            },
            category: 'myCommands',
            ratelimit: 0,
        });
    }
    public async exec(message: Message): Promise<Message> {
        const embed = new MessageEmbed()
        .setTitle(`${this.client.user.username} | Help`)
        .setDescription(`**ℹ Help:** Get a list of commands.\n  **Usage:** .help or .info\n\n**🏓 Ping:** Get the ping/latency of the bot.\n   **Usage:** .ping or .latency\n\n**🐱‍💻 Invite:** Get the bot\'s invite link\n   **Usage:** .invite\n\n**🧑 Avatar:** Find the Avatar of a specific member/user\n  **Usage:** .avatar or .getavatar\n  **Examples:** .avatar TreeBot or .avatar @TreeBot#5194\n\n**💻 Host:** Find out where TreeBot was hosted! \n **Usage:** .host or .bothost\n\nI hope this helped you... 😎`)
        .setColor("RANDOM")
        return message.util.send(embed);
    }
}
