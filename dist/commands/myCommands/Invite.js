"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class InviteCommand extends discord_akairo_1.Command {
    constructor() {
        super('invite', {
            aliases: ['invite'],
            description: {
                content: 'Get the bot\'s invite link'
            },
            category: 'myCommands',
            ratelimit: 0,
        });
    }
    async exec(message) {
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(`${this.client.user.username} | Invite`)
            .setDescription(`Hey **${message.author.username}**! You can invite me [here](https://discord.com/oauth2/authorize?client_id=723414837975318540&permissions=8&scope=bot) \n\nI hope you like the bot!`)
            .setColor("RANDOM");
        return message.util.send(embed);
    }
}
exports.default = InviteCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL215Q29tbWFuZHMvSW52aXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUVuRCxNQUFxQixhQUFjLFNBQVEsd0JBQU87SUFDOUM7UUFDSSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ25CLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsNEJBQTRCO2FBQ3hDO1lBQ0QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUM5QixNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDL0IsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxXQUFXLENBQUM7YUFDbEQsY0FBYyxDQUFDLFNBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLHNKQUFzSixDQUFDO2FBQ3RNLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDSjtBQWxCRCxnQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludml0ZUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignaW52aXRlJywge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ2ludml0ZSddLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0dldCB0aGUgYm90XFwncyBpbnZpdGUgbGluaydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdteUNvbW1hbmRzJyxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIGNvbnN0IGVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXHJcbiAgICAgICAgLnNldEF1dGhvcihgJHt0aGlzLmNsaWVudC51c2VyLnVzZXJuYW1lfSB8IEludml0ZWApXHJcbiAgICAgICAgLnNldERlc2NyaXB0aW9uKGBIZXkgKioke21lc3NhZ2UuYXV0aG9yLnVzZXJuYW1lfSoqISBZb3UgY2FuIGludml0ZSBtZSBbaGVyZV0oaHR0cHM6Ly9kaXNjb3JkLmNvbS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD03MjM0MTQ4Mzc5NzUzMTg1NDAmcGVybWlzc2lvbnM9OCZzY29wZT1ib3QpIFxcblxcbkkgaG9wZSB5b3UgbGlrZSB0aGUgYm90IWApXHJcbiAgICAgICAgLnNldENvbG9yKFwiUkFORE9NXCIpXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGVtYmVkKTtcclxuICAgIH1cclxufSJdfQ==