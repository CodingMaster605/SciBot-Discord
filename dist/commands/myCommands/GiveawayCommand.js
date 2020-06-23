"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const ms_1 = __importDefault(require("ms"));
const Giveaways_1 = require("../../other/Giveaways");
const GiveawayManager_1 = __importDefault(require("../../structures/giveaways/GiveawayManager"));
class GiveawayCommand extends discord_akairo_1.Command {
    constructor() {
        super("giveaway", {
            aliases: ["giveaway", "create-giveaway"],
            category: "myCommands",
            description: {
                content: "Make a giveaway!",
                usage: "giveaway [time] [item]",
                examples: [
                    "giveaway 20m VIP"
                ]
            },
            ratelimit: 0,
            args: [
                {
                    id: "time",
                    type: (msg, str) => {
                        return Number(ms_1.default(str));
                    },
                    prompt: {
                        start: (msg) => `${msg.author}, you must give a time...`,
                        retry: (msg) => `${msg.author}, you must give a valid time...`
                    }
                },
                {
                    id: "item",
                    type: "string",
                    match: "rest",
                    prompt: {
                        start: (msg) => `${msg.author}, you must provide something to giveaway...`
                    }
                }
            ]
        });
    }
    async exec(message, { time, item }) {
        const giveawayRepo = this.client.db.getRepository(Giveaways_1.Giveaways);
        const end = Date.now() + time;
        const msg = await message.channel.send(new discord_js_1.MessageEmbed()
            .setAuthor(`Giveaway | ${item}!`)
            .setColor("RANDOM")
            .setDescription(`${message.author} is giving away **${item}**!`)
            .setFooter("Giveaway Ends")
            .setTimestamp(end));
        msg.react("🎁");
        giveawayRepo.insert({
            channel: msg.channel.id,
            message: msg.id,
            end: end
        });
        setTimeout(() => {
            GiveawayManager_1.default.end(giveawayRepo, msg);
        }, time);
    }
}
exports.default = GiveawayCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZWF3YXlDb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL215Q29tbWFuZHMvR2l2ZWF3YXlDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCw0Q0FBb0I7QUFHcEIscURBQWtEO0FBR2xELGlHQUF5RTtBQUV6RSxNQUFxQixlQUFnQixTQUFRLHdCQUFPO0lBQ2hEO1FBQ0ksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNkLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQztZQUN4QyxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsUUFBUSxFQUFFO29CQUNOLGtCQUFrQjtpQkFDckI7YUFDSjtZQUNELFNBQVMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFO2dCQUNGO29CQUNJLEVBQUUsRUFBRSxNQUFNO29CQUNWLElBQUksRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFXLEVBQUUsRUFBRTt3QkFDaEMsT0FBTyxNQUFNLENBQUMsWUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLENBQUM7b0JBQ0QsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSwyQkFBMkI7d0JBQ2pFLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxpQ0FBaUM7cUJBQzFFO2lCQUNKO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxNQUFNO29CQUNWLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLE1BQU0sRUFBRTt3QkFDSixLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sNkNBQTZDO3FCQUN0RjtpQkFDSjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQWtDO1FBQzlFLE1BQU0sWUFBWSxHQUEwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxDQUFDO1FBQ3BGLE1BQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFdEMsTUFBTSxHQUFHLEdBQVksTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFZLEVBQUU7YUFDakUsU0FBUyxDQUFDLGNBQWMsSUFBSSxHQUFHLENBQUM7YUFDaEMsUUFBUSxDQUFDLFFBQVEsQ0FBQzthQUNsQixjQUFjLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxxQkFBcUIsSUFBSSxLQUFLLENBQUM7YUFDL0QsU0FBUyxDQUFDLGVBQWUsQ0FBQzthQUMxQixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2pCLENBQUM7UUFDRixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhCLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDaEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2QixPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDZixHQUFHLEVBQUUsR0FBRztTQUNYLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWix5QkFBZSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUNKO0FBMURELGtDQTBEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IG1zIGZyb20gXCJtc1wiO1xyXG5cclxuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCB7IEdpdmVhd2F5cyB9IGZyb20gXCIuLi8uLi9vdGhlci9HaXZlYXdheXNcIjtcclxuaW1wb3J0IHsgZGJOYW1lIH0gZnJvbSBcIi4uLy4uL0NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IEdpdmVhd2F5TWFuYWdlciBmcm9tIFwiLi4vLi4vc3RydWN0dXJlcy9naXZlYXdheXMvR2l2ZWF3YXlNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHaXZlYXdheUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcImdpdmVhd2F5XCIsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogW1wiZ2l2ZWF3YXlcIiwgXCJjcmVhdGUtZ2l2ZWF3YXlcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIm15Q29tbWFuZHNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiTWFrZSBhIGdpdmVhd2F5IVwiLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2U6IFwiZ2l2ZWF3YXkgW3RpbWVdIFtpdGVtXVwiLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcImdpdmVhd2F5IDIwbSBWSVBcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDAsXHJcbiAgICAgICAgICAgIGFyZ3M6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ0aW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogKG1zZzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihtcyhzdHIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByb21wdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKG1zZzogTWVzc2FnZSkgPT4gYCR7bXNnLmF1dGhvcn0sIHlvdSBtdXN0IGdpdmUgYSB0aW1lLi4uYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnk6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCB5b3UgbXVzdCBnaXZlIGEgdmFsaWQgdGltZS4uLmBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIml0ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiBcInJlc3RcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtc2c6IE1lc3NhZ2UpID0+IGAke21zZy5hdXRob3J9LCB5b3UgbXVzdCBwcm92aWRlIHNvbWV0aGluZyB0byBnaXZlYXdheS4uLmBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHsgdGltZSwgaXRlbSB9OiB7IHRpbWU6IG51bWJlciwgaXRlbTogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGdpdmVhd2F5UmVwbzogUmVwb3NpdG9yeTxHaXZlYXdheXM+ID0gdGhpcy5jbGllbnQuZGIuZ2V0UmVwb3NpdG9yeShHaXZlYXdheXMpO1xyXG4gICAgICAgIGNvbnN0IGVuZDogbnVtYmVyID0gRGF0ZS5ub3coKSArIHRpbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IG1zZzogTWVzc2FnZSA9IGF3YWl0IG1lc3NhZ2UuY2hhbm5lbC5zZW5kKG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRBdXRob3IoYEdpdmVhd2F5IHwgJHtpdGVtfSFgKVxyXG4gICAgICAgIC5zZXRDb2xvcihcIlJBTkRPTVwiKVxyXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbihgJHttZXNzYWdlLmF1dGhvcn0gaXMgZ2l2aW5nIGF3YXkgKioke2l0ZW19KiohYClcclxuICAgICAgICAuc2V0Rm9vdGVyKFwiR2l2ZWF3YXkgRW5kc1wiKVxyXG4gICAgICAgIC5zZXRUaW1lc3RhbXAoZW5kKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbXNnLnJlYWN0KFwi8J+OgVwiKTtcclxuXHJcbiAgICAgICAgZ2l2ZWF3YXlSZXBvLmluc2VydCh7XHJcbiAgICAgICAgICAgIGNoYW5uZWw6IG1zZy5jaGFubmVsLmlkLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBtc2cuaWQsXHJcbiAgICAgICAgICAgIGVuZDogZW5kXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBHaXZlYXdheU1hbmFnZXIuZW5kKGdpdmVhd2F5UmVwbywgbXNnKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuICAgIH1cclxufSJdfQ==