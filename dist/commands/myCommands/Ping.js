"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'latency'],
            description: {
                content: 'An example command that gets the bot\'s ping in ms.'
            },
            category: 'myCommands',
            ratelimit: 0,
        });
    }
    async exec(message) {
        const progressembed = new discord_js_1.MessageEmbed()
            .setDescription(`Pinging...`);
        const m = await message.util.send(progressembed);
        const resultembed = new discord_js_1.MessageEmbed()
            .setDescription(`Pong! **${this.client.ws.ping}**ms`)
            .setColor("RANDOM");
        return m.edit(resultembed);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9teUNvbW1hbmRzL1BpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBRW5ELE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM1QztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO1lBQzVCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUscURBQXFEO2FBQ2pFO1lBQ0QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUM5QixNQUFNLGFBQWEsR0FBRyxJQUFJLHlCQUFZLEVBQUU7YUFDdkMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzdCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEQsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQ3JDLGNBQWMsQ0FBQyxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDO2FBQ3BELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNKO0FBckJELDhCQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XHJcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VFbWJlZCB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGluZ0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncGluZycsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogWydwaW5nJywgJ2xhdGVuY3knXSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBbiBleGFtcGxlIGNvbW1hbmQgdGhhdCBnZXRzIHRoZSBib3RcXCdzIHBpbmcgaW4gbXMuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogJ215Q29tbWFuZHMnLFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oYFBpbmdpbmcuLi5gKVxyXG4gICAgICAgIGNvbnN0IG0gPSBhd2FpdCBtZXNzYWdlLnV0aWwhLnNlbmQocHJvZ3Jlc3NlbWJlZCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcclxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oYFBvbmchICoqJHt0aGlzLmNsaWVudC53cy5waW5nfSoqbXNgKVxyXG4gICAgICAgIC5zZXRDb2xvcihcIlJBTkRPTVwiKVxyXG4gICAgICAgIHJldHVybiBtLmVkaXQocmVzdWx0ZW1iZWQpO1xyXG4gICAgfVxyXG59Il19