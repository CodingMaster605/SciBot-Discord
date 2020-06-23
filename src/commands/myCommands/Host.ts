import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';

export default class HostCommand extends Command {
    public constructor() {
        super('host', {
            aliases: ['host', 'bothost'],
            description: {
                content: 'Find out where this bot was hosted.'
            },
            category: 'myCommands',
            ratelimit: 0,
        });
    }
    public async exec(message: Message): Promise<Message> {
        const embed = new MessageEmbed()
        .setAuthor(`${this.client.user.username} | Bot Host`)
        .setDescription(`Hey **${message.author.username}**!\n\nI was hosted by: DanHosting!\n Which was made by: DanTechBoy \n\n If you want to know DanTechBoy has a website! \n Click [here](https://www.dantechboy.com/) to go on it! \n\n I was created/programmed by: iMemez! \nHe has a YouTube Channel! Click [here](https://www.youtube.com/channel/UCGid_mQ8_0eG14l38ANYPAA/) to go on it! `)
        .setColor("RANDOM")
        return message.util.send(embed);
    }
}