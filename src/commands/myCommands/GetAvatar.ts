import { Command } from "discord-akairo";
import { Message, GuildMember, MessageEmbed, ImageSize }  from "discord.js";

export default class GetAvatarCommand extends Command {
    public constructor() {
        super("avatar", {
            aliases: ["avatar", "getavatar"],
            category: "myCommands",
            description: {
                content: "Get a users Avatar!",
                usage: "avatar [ member ]",
                examples: [
                    "avatar",
                    "avatar @Host#0001",
                    "avatar host"
                ]
            },
            ratelimit: 0,
            args: [
                {
                    id: "member",
                    type: "member",
                    match: "rest",
                    default: (msg: Message) => msg.member
                },
                {
                    id: "size",
                    type: (_: Message, str: string): null | Number => {
                        if (str && !isNaN(Number(str)) && [16, 32, 64, 128, 256, 512, 1024, 2048].includes(Number(str))) return Number(str);
                        return null
                    },
                    match: "option",
                    flag: ["-size-"], // .avatar @Host#0001 -size-512
                    default: 2048
                }
            ]
        });
    }
    
    public async exec(message: Message, { member, size }: { member: GuildMember, size: number }): Promise<Message> {
        const embed = new MessageEmbed()
        .setImage(member.user.displayAvatarURL({ size: size as ImageSize }))
        .setTitle(`Avatar: ${member.user.tag}!`)
        .setColor("RANDOM")
        return message.util.send(embed);
    }
}