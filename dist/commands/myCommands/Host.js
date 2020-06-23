"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class HostCommand extends discord_akairo_1.Command {
    constructor() {
        super('host', {
            aliases: ['host', 'bothost'],
            description: {
                content: 'Find out where this bot was hosted.'
            },
            category: 'myCommands',
            ratelimit: 0,
        });
    }
    async exec(message) {
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(`${this.client.user.username} | Bot Host`)
            .setDescription(`Hey **${message.author.username}**!\n\nI was hosted by: DanHosting!\nWhcih was made by: DanTechBoy \n\n If you want to know DanTechBoy has a website! \n Click [here](https://www.dantechboy.com/) to go on it! \n\n I was created/programmed by: iMemez! \nHe has a YouTube Channel! Click [here](https://www.youtube.com/channel/UCGid_mQ8_0eG14l38ANYPAA/) to go on it! `)
            .setColor("RANDOM");
        return message.util.send(embed);
    }
}
exports.default = HostCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9teUNvbW1hbmRzL0hvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBRW5ELE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM1QztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO1lBQzVCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUscUNBQXFDO2FBQ2pEO1lBQ0QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUM5QixNQUFNLEtBQUssR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDL0IsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxhQUFhLENBQUM7YUFDcEQsY0FBYyxDQUFDLFNBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLDZVQUE2VSxDQUFDO2FBQzdYLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDSjtBQWxCRCw4QkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvc3RDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2hvc3QnLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnaG9zdCcsICdib3Rob3N0J10sXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnRmluZCBvdXQgd2hlcmUgdGhpcyBib3Qgd2FzIGhvc3RlZC4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnbXlDb21tYW5kcycsXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogMCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgICAgICBjb25zdCBlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxyXG4gICAgICAgIC5zZXRBdXRob3IoYCR7dGhpcy5jbGllbnQudXNlci51c2VybmFtZX0gfCBCb3QgSG9zdGApXHJcbiAgICAgICAgLnNldERlc2NyaXB0aW9uKGBIZXkgKioke21lc3NhZ2UuYXV0aG9yLnVzZXJuYW1lfSoqIVxcblxcbkkgd2FzIGhvc3RlZCBieTogRGFuSG9zdGluZyFcXG5XaGNpaCB3YXMgbWFkZSBieTogRGFuVGVjaEJveSBcXG5cXG4gSWYgeW91IHdhbnQgdG8ga25vdyBEYW5UZWNoQm95IGhhcyBhIHdlYnNpdGUhIFxcbiBDbGljayBbaGVyZV0oaHR0cHM6Ly93d3cuZGFudGVjaGJveS5jb20vKSB0byBnbyBvbiBpdCEgXFxuXFxuIEkgd2FzIGNyZWF0ZWQvcHJvZ3JhbW1lZCBieTogaU1lbWV6ISBcXG5IZSBoYXMgYSBZb3VUdWJlIENoYW5uZWwhIENsaWNrIFtoZXJlXShodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDR2lkX21ROF8wZUcxNGwzOEFOWVBBQS8pIHRvIGdvIG9uIGl0ISBgKVxyXG4gICAgICAgIC5zZXRDb2xvcihcIlJBTkRPTVwiKVxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChlbWJlZCk7XHJcbiAgICB9XHJcbn0iXX0=