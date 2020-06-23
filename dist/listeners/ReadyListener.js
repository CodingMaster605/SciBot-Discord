"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    exec() {
        console.log(`${this.client.user.tag} has started and should be online.`);
        console.log(`Thank you for using Bot-Template by DanTechBoy!`);
        console.log(`Nodejs version: ${process.version}`);
        this.client.user.setPresence({
            activity: {
                name: `TreeBot 360°/Version 1.0.0 | Type .help for commands!`,
                type: 'PLAYING'
            },
            status: 'online'
        });
    }
}
exports.default = ReadyListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZHlMaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0ZW5lcnMvUmVhZHlMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUEwQztBQUUxQyxNQUFxQixhQUFjLFNBQVEseUJBQVE7SUFDL0M7UUFDSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ1gsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ00sSUFBSTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLG9DQUFvQyxDQUFDLENBQUE7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFBO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN6QixRQUFRLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLHVEQUF1RDtnQkFDN0QsSUFBSSxFQUFFLFNBQVM7YUFDbEI7WUFDRCxNQUFNLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFwQkQsZ0NBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXIgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWR5TGlzdGVuZXIgZXh0ZW5kcyBMaXN0ZW5lciB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJyZWFkeVwiLCB7XHJcbiAgICAgICAgICAgIGVtaXR0ZXI6IFwiY2xpZW50XCIsXHJcbiAgICAgICAgICAgIGV2ZW50OiBcInJlYWR5XCIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcImNsaWVudFwiXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBleGVjKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY2xpZW50LnVzZXIudGFnfSBoYXMgc3RhcnRlZCBhbmQgc2hvdWxkIGJlIG9ubGluZS5gKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGFuayB5b3UgZm9yIHVzaW5nIEJvdC1UZW1wbGF0ZSBieSBEYW5UZWNoQm95IWApXHJcbiAgICAgICAgY29uc29sZS5sb2coYE5vZGVqcyB2ZXJzaW9uOiAke3Byb2Nlc3MudmVyc2lvbn1gKVxyXG4gICAgICAgIHRoaXMuY2xpZW50LnVzZXIuc2V0UHJlc2VuY2Uoe1xyXG4gICAgICAgICAgICBhY3Rpdml0eToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogYFRyZWVCb3QgMzYwwrAvVmVyc2lvbiAxLjAuMCB8IFR5cGUgLmhlbHAgZm9yIGNvbW1hbmRzIWAsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUExBWUlORydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzOiAnb25saW5lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59ICJdfQ==