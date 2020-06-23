"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class HelpCommand extends discord_akairo_1.Command {
    constructor() {
        super('help', {
            aliases: ['help', 'info'],
            description: {
                content: 'Want help? Just use this command!'
            },
            category: 'myCommands',
            ratelimit: 0,
        });
    }
    async exec(message) {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`${this.client.user.username} | Help`)
            .setDescription(`**ℹ Help:** Get a list of commands.\n  **Usage:** .help or .info\n\n**🏓 Ping:** Get the ping/latency of the bot.\n   **Usage:** .ping or .latency\n\n**🐱‍💻 Invite:** Get the bot\'s invite link\n   **Usage:** .invite\n\n**🧑 Avatar:** Find the Avatar of a specific member/user\n  **Usage:** .avatar or .getavatar\n  **Examples:** .avatar TreeBot or .avatar @TreeBot#5194\n\n💻 Host: Find out where TreeBot was hosted! \n Usage: .host or .bothost\n\nI hope this helped you... 😎`)
            .setColor("RANDOM");
        return message.util.send(embed);
    }
}
exports.default = HelpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9teUNvbW1hbmRzL0hlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBRW5ELE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM1QztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQ3pCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsbUNBQW1DO2FBQy9DO1lBQ0QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUM5QixNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDL0IsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxTQUFTLENBQUM7YUFDL0MsY0FBYyxDQUFDLGdlQUFnZSxDQUFDO2FBQ2hmLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDSjtBQWxCRCw4QkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2hlbHAnLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnaGVscCcsICdpbmZvJ10sXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnV2FudCBoZWxwPyBKdXN0IHVzZSB0aGlzIGNvbW1hbmQhJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ215Q29tbWFuZHMnLFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICAgICAgY29uc3QgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0VGl0bGUoYCR7dGhpcy5jbGllbnQudXNlci51c2VybmFtZX0gfCBIZWxwYClcclxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oYCoq4oS5IEhlbHA6KiogR2V0IGEgbGlzdCBvZiBjb21tYW5kcy5cXG4gICoqVXNhZ2U6KiogLmhlbHAgb3IgLmluZm9cXG5cXG4qKvCfj5MgUGluZzoqKiBHZXQgdGhlIHBpbmcvbGF0ZW5jeSBvZiB0aGUgYm90LlxcbiAgICoqVXNhZ2U6KiogLnBpbmcgb3IgLmxhdGVuY3lcXG5cXG4qKvCfkLHigI3wn5K7IEludml0ZToqKiBHZXQgdGhlIGJvdFxcJ3MgaW52aXRlIGxpbmtcXG4gICAqKlVzYWdlOioqIC5pbnZpdGVcXG5cXG4qKvCfp5EgQXZhdGFyOioqIEZpbmQgdGhlIEF2YXRhciBvZiBhIHNwZWNpZmljIG1lbWJlci91c2VyXFxuICAqKlVzYWdlOioqIC5hdmF0YXIgb3IgLmdldGF2YXRhclxcbiAgKipFeGFtcGxlczoqKiAuYXZhdGFyIFRyZWVCb3Qgb3IgLmF2YXRhciBAVHJlZUJvdCM1MTk0XFxuXFxu8J+SuyBIb3N0OiBGaW5kIG91dCB3aGVyZSBUcmVlQm90IHdhcyBob3N0ZWQhIFxcbiBVc2FnZTogLmhvc3Qgb3IgLmJvdGhvc3RcXG5cXG5JIGhvcGUgdGhpcyBoZWxwZWQgeW91Li4uIPCfmI5gKVxyXG4gICAgICAgIC5zZXRDb2xvcihcIlJBTkRPTVwiKVxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChlbWJlZCk7XHJcbiAgICB9XHJcbn1cclxuIl19