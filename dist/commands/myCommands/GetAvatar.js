"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class GetAvatarCommand extends discord_akairo_1.Command {
    constructor() {
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
                    default: (msg) => msg.member
                },
                {
                    id: "size",
                    type: (_, str) => {
                        if (str && !isNaN(Number(str)) && [16, 32, 64, 128, 256, 512, 1024, 2048].includes(Number(str)))
                            return Number(str);
                        return null;
                    },
                    match: "option",
                    flag: ["-size-"],
                    default: 2048
                }
            ]
        });
    }
    async exec(message, { member, size }) {
        const embed = new discord_js_1.MessageEmbed()
            .setImage(member.user.displayAvatarURL({ size: size }))
            .setTitle(`Avatar: ${member.user.tag}!`)
            .setColor("RANDOM");
        return message.util.send(embed);
    }
}
exports.default = GetAvatarCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0QXZhdGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL215Q29tbWFuZHMvR2V0QXZhdGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUE0RTtBQUU1RSxNQUFxQixnQkFBaUIsU0FBUSx3QkFBTztJQUNqRDtRQUNJLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO1lBQ2hDLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixRQUFRLEVBQUU7b0JBQ04sUUFBUTtvQkFDUixtQkFBbUI7b0JBQ25CLGFBQWE7aUJBQ2hCO2FBQ0o7WUFDRCxTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDRjtvQkFDSSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsTUFBTTtvQkFDYixPQUFPLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNO2lCQUN4QztnQkFDRDtvQkFDSSxFQUFFLEVBQUUsTUFBTTtvQkFDVixJQUFJLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFpQixFQUFFO3dCQUM3QyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNwSCxPQUFPLElBQUksQ0FBQTtvQkFDZixDQUFDO29CQUNELEtBQUssRUFBRSxRQUFRO29CQUNmLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztvQkFDaEIsT0FBTyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBeUM7UUFDdkYsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQy9CLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxFQUFFLElBQWlCLEVBQUUsQ0FBQyxDQUFDO2FBQ25FLFFBQVEsQ0FBQyxXQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDdkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ25CLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNKO0FBM0NELG1DQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgR3VpbGRNZW1iZXIsIE1lc3NhZ2VFbWJlZCwgSW1hZ2VTaXplIH0gIGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZXRBdmF0YXJDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJhdmF0YXJcIiwge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJhdmF0YXJcIiwgXCJnZXRhdmF0YXJcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIm15Q29tbWFuZHNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiR2V0IGEgdXNlcnMgQXZhdGFyIVwiLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2U6IFwiYXZhdGFyIFsgbWVtYmVyIF1cIixcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcImF2YXRhciBASG9zdCMwMDAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXIgaG9zdFwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMCxcclxuICAgICAgICAgICAgYXJnczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IFwicmVzdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IChtc2c6IE1lc3NhZ2UpID0+IG1zZy5tZW1iZXJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IG51bGwgfCBOdW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RyICYmICFpc05hTihOdW1iZXIoc3RyKSkgJiYgWzE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTIsIDEwMjQsIDIwNDhdLmluY2x1ZGVzKE51bWJlcihzdHIpKSkgcmV0dXJuIE51bWJlcihzdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IFwib3B0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZzogW1wiLXNpemUtXCJdLCAvLyAuYXZhdGFyIEBIb3N0IzAwMDEgLXNpemUtNTEyXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogMjA0OFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHsgbWVtYmVyLCBzaXplIH06IHsgbWVtYmVyOiBHdWlsZE1lbWJlciwgc2l6ZTogbnVtYmVyIH0pOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgICAgICBjb25zdCBlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRJbWFnZShtZW1iZXIudXNlci5kaXNwbGF5QXZhdGFyVVJMKHsgc2l6ZTogc2l6ZSBhcyBJbWFnZVNpemUgfSkpXHJcbiAgICAgICAgLnNldFRpdGxlKGBBdmF0YXI6ICR7bWVtYmVyLnVzZXIudGFnfSFgKVxyXG4gICAgICAgIC5zZXRDb2xvcihcIlJBTkRPTVwiKVxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChlbWJlZCk7XHJcbiAgICB9XHJcbn0iXX0=