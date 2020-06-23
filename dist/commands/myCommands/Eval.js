"use strict";
// This command is DANGEROUS. Only the bot owners can use this comamnd. Only give people owner permissions in your bot if you trust them
// because they could execute any JS code in your bot.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const util = __importStar(require("util"));
const common_tags_1 = require("common-tags");
const NL = '!!NL!!';
const NL_PATTERN = new RegExp(NL, 'g');
class EvalCommand extends discord_akairo_1.Command {
    constructor() {
        super('eval', {
            aliases: ['eval'],
            description: {
                content: 'Evaluates JavaScript code. This command is owner only.',
                usage: '<code>'
            },
            category: 'myCommands',
            ownerOnly: true,
            ratelimit: 0,
            args: [
                {
                    id: 'code',
                    match: 'rest',
                    type: 'sring',
                    prompt: {
                        start: (message) => `${message.author}, what code would you like to evaluate?`
                    }
                },
                {
                    id: 'noreturn',
                    type: 'boolean',
                    match: 'flag',
                    flag: ['--noreturn', '-nr'],
                },
            ],
        });
        this.lastResult = null;
    }
    async exec(message, { code, noreturn }) {
        let hrDiff;
        try {
            const hrStart = process.hrtime();
            this.lastResult = eval(code);
            hrDiff = process.hrtime(hrStart);
        }
        catch (error) {
            return message.util.send(`<:error:724577128104067103> Error while evaluating: \`${error}\``);
        }
        this.hrStart = process.hrtime();
        const result = this._result(this.lastResult, hrDiff, code);
        if (noreturn)
            return message.util.send(`*Executed in **${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.***`);
        if (Array.isArray(result))
            return result.map(async (res) => message.util.send(res));
        return message.util.send(result);
    }
    _result(result, hrDiff, input = null) {
        const inspected = util.inspect(result, { depth: 0 })
            .replace(NL_PATTERN, '\n')
            .replace(this.sensitivePattern, '--snip--');
        const split = inspected.split('\n');
        const last = inspected.length - 1;
        const prependPart = inspected[0] !== '{' && inspected[0] !== '[' && inspected[0] !== '\'' ? split[0] : inspected[0];
        const appendPart = inspected[last] !== '}' && inspected[last] !== ']' && inspected[last] !== '\'' ? split[split.length - 1] : inspected[last];
        const prepend = `\`\`\`javascript\n${prependPart}\n`;
        const append = `\n${appendPart}\n\`\`\``;
        if (input) {
            return discord_js_1.Util.splitMessage(common_tags_1.stripIndents `
				*Executed in **${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.***
				\`\`\`javascript
				${inspected}
				\`\`\`
			`, { maxLength: 1900, prepend, append });
        }
        return discord_js_1.Util.splitMessage(common_tags_1.stripIndents `
            *Callback executed after **${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.***
            \`\`\`javascript
            ${inspected}
            \`\`\`
        `, { maxLength: 1900, prepend, append });
    }
    get sensitivePattern() {
        if (!this._sensitivePattern) {
            const token = this.client.token.split('').join('[^]{0,2}');
            const revToken = this.client.token.split('').reverse().join('[^]{0,2}');
            Object.defineProperty(this, '_sensitivePattern', { value: new RegExp(`${token}|${revToken}`, 'g') });
        }
        return this._sensitivePattern;
    }
}
exports.default = EvalCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9teUNvbW1hbmRzL0V2YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdJQUF3STtBQUN4SSxzREFBc0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxtREFBeUM7QUFDekMsMkNBQTJDO0FBQzNDLDJDQUE2QjtBQUM3Qiw2Q0FBMkM7QUFHM0MsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDO0FBQ3BCLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUV2QyxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFPNUM7UUFDSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsd0RBQXdEO2dCQUNqRSxLQUFLLEVBQUUsUUFBUTthQUNsQjtZQUNELFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLE1BQU07b0JBQ1YsS0FBSyxFQUFFLE1BQU07b0JBQ2IsSUFBSSxFQUFFLE9BQU87b0JBQ2IsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSxDQUFDLE9BQWdCLEVBQVUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0seUNBQXlDO3FCQUNsRztpQkFDSjtnQkFDRDtvQkFDSSxFQUFFLEVBQUUsVUFBVTtvQkFDZCxJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsTUFBTTtvQkFDYixJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO2lCQUM5QjthQUNKO1NBQ0osQ0FBQyxDQUFDO1FBOUJBLGVBQVUsR0FBUSxJQUFJLENBQUM7SUErQjlCLENBQUM7SUFFTSxLQUFLLENB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QUFDO0lBQ2xDLENBQUM7Q0FDSjtBQTFGRCw4QkEwRkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGNvbW1hbmQgaXMgREFOR0VST1VTLiBPbmx5IHRoZSBib3Qgb3duZXJzIGNhbiB1c2UgdGhpcyBjb21hbW5kLiBPbmx5IGdpdmUgcGVvcGxlIG93bmVyIHBlcm1pc3Npb25zIGluIHlvdXIgYm90IGlmIHlvdSB0cnVzdCB0aGVtXHJcbi8vIGJlY2F1c2UgdGhleSBjb3VsZCBleGVjdXRlIGFueSBKUyBjb2RlIGluIHlvdXIgYm90LlxyXG5cclxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcclxuaW1wb3J0IHsgTWVzc2FnZSwgVXRpbCB9IGZyb20gJ2Rpc2NvcmQuanMnO1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJ3V0aWwnO1xyXG5pbXBvcnQgeyBzdHJpcEluZGVudHMgfSBmcm9tICdjb21tb24tdGFncyc7XHJcblxyXG5cclxuY29uc3QgTkwgPSAnISFOTCEhJztcclxuY29uc3QgTkxfUEFUVEVSTiA9IG5ldyBSZWdFeHAoTkwsICdnJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmFsQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xyXG4gICAgcHVibGljIGhyU3RhcnQ6IFtudW1iZXIsIG51bWJlcl0gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHVibGljIGxhc3RSZXN1bHQ6IGFueSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2Vuc2l0aXZlUGF0dGVybiE6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2V2YWwnLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnZXZhbCddLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0V2YWx1YXRlcyBKYXZhU2NyaXB0IGNvZGUuIFRoaXMgY29tbWFuZCBpcyBvd25lciBvbmx5LicsXHJcbiAgICAgICAgICAgICAgICB1c2FnZTogJzxjb2RlPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdteUNvbW1hbmRzJyxcclxuICAgICAgICAgICAgb3duZXJPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDAsXHJcbiAgICAgICAgICAgIGFyZ3M6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2NvZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoOiAncmVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IChtZXNzYWdlOiBNZXNzYWdlKTogc3RyaW5nID0+IGAke21lc3NhZ2UuYXV0aG9yfSwgd2hhdCBjb2RlIHdvdWxkIHlvdSBsaWtlIHRvIGV2YWx1YXRlP2BcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAnbm9yZXR1cm4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogJ2ZsYWcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsYWc6IFsnLS1ub3JldHVybicsICctbnInXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwgeyBjb2RlLCBub3JldHVybiB9OiB7IGNvZGU6IHN0cmluZywgbm9yZXR1cm46IGJvb2xlYW4gfSk6IFByb21pc2U8TWVzc2FnZSB8IE1lc3NhZ2VbXSB8IFByb21pc2U8TWVzc2FnZSB8IE1lc3NhZ2VbXT5bXT4ge1xyXG4gICAgICAgIGxldCBockRpZmY7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaHJTdGFydCA9IHByb2Nlc3MuaHJ0aW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFJlc3VsdCA9IGV2YWwoY29kZSk7XHJcbiAgICAgICAgICAgIGhyRGlmZiA9IHByb2Nlc3MuaHJ0aW1lKGhyU3RhcnQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwhLnNlbmQoYDw6ZXJyb3I6NzI0NTc3MTI4MTA0MDY3MTAzPiBFcnJvciB3aGlsZSBldmFsdWF0aW5nOiBcXGAke2Vycm9yfVxcYGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oclN0YXJ0ID0gcHJvY2Vzcy5ocnRpbWUoKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9yZXN1bHQodGhpcy5sYXN0UmVzdWx0LCBockRpZmYsIGNvZGUpO1xyXG5cclxuICAgICAgICBpZiAobm9yZXR1cm4pIHJldHVybiBtZXNzYWdlLnV0aWwhLnNlbmQoYCpFeGVjdXRlZCBpbiAqKiR7aHJEaWZmWzBdID4gMCA/IGAke2hyRGlmZlswXX1zIGAgOiAnJ30ke2hyRGlmZlsxXSAvIDEwMDAwMDB9bXMuKioqYCk7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkgcmV0dXJuIHJlc3VsdC5tYXAoYXN5bmMgKHJlcyk6IFByb21pc2U8TWVzc2FnZSB8IE1lc3NhZ2VbXT4gPT4gbWVzc2FnZS51dGlsIS5zZW5kKHJlcykpO1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwhLnNlbmQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9yZXN1bHQocmVzdWx0OiBhbnksIGhyRGlmZjogW251bWJlciwgbnVtYmVyXSwgaW5wdXQ6IHN0cmluZyB8IG51bGwgPSBudWxsKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IGluc3BlY3RlZCA9IHV0aWwuaW5zcGVjdChyZXN1bHQsIHsgZGVwdGg6IDAgfSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoTkxfUEFUVEVSTiwgJ1xcbicpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHRoaXMuc2Vuc2l0aXZlUGF0dGVybiwgJy0tc25pcC0tJyk7XHJcbiAgICAgICAgY29uc3Qgc3BsaXQgPSBpbnNwZWN0ZWQuc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIGNvbnN0IGxhc3QgPSBpbnNwZWN0ZWQubGVuZ3RoIC0gMTtcclxuICAgICAgICBjb25zdCBwcmVwZW5kUGFydCA9IGluc3BlY3RlZFswXSAhPT0gJ3snICYmIGluc3BlY3RlZFswXSAhPT0gJ1snICYmIGluc3BlY3RlZFswXSAhPT0gJ1xcJycgPyBzcGxpdFswXSA6IGluc3BlY3RlZFswXTtcclxuICAgICAgICBjb25zdCBhcHBlbmRQYXJ0ID0gaW5zcGVjdGVkW2xhc3RdICE9PSAnfScgJiYgaW5zcGVjdGVkW2xhc3RdICE9PSAnXScgJiYgaW5zcGVjdGVkW2xhc3RdICE9PSAnXFwnJyA/IHNwbGl0W3NwbGl0Lmxlbmd0aCAtIDFdIDogaW5zcGVjdGVkW2xhc3RdO1xyXG4gICAgICAgIGNvbnN0IHByZXBlbmQgPSBgXFxgXFxgXFxgamF2YXNjcmlwdFxcbiR7cHJlcGVuZFBhcnR9XFxuYDtcclxuICAgICAgICBjb25zdCBhcHBlbmQgPSBgXFxuJHthcHBlbmRQYXJ0fVxcblxcYFxcYFxcYGA7XHJcbiAgICAgICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsLnNwbGl0TWVzc2FnZShzdHJpcEluZGVudHNgXHJcblx0XHRcdFx0KkV4ZWN1dGVkIGluICoqJHtockRpZmZbMF0gPiAwID8gYCR7aHJEaWZmWzBdfXMgYCA6ICcnfSR7aHJEaWZmWzFdIC8gMTAwMDAwMH1tcy4qKipcclxuXHRcdFx0XHRcXGBcXGBcXGBqYXZhc2NyaXB0XHJcblx0XHRcdFx0JHtpbnNwZWN0ZWR9XHJcblx0XHRcdFx0XFxgXFxgXFxgXHJcblx0XHRcdGAsIHsgbWF4TGVuZ3RoOiAxOTAwLCBwcmVwZW5kLCBhcHBlbmQgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gVXRpbC5zcGxpdE1lc3NhZ2Uoc3RyaXBJbmRlbnRzYFxyXG4gICAgICAgICAgICAqQ2FsbGJhY2sgZXhlY3V0ZWQgYWZ0ZXIgKioke2hyRGlmZlswXSA+IDAgPyBgJHtockRpZmZbMF19cyBgIDogJyd9JHtockRpZmZbMV0gLyAxMDAwMDAwfW1zLioqKlxyXG4gICAgICAgICAgICBcXGBcXGBcXGBqYXZhc2NyaXB0XHJcbiAgICAgICAgICAgICR7aW5zcGVjdGVkfVxyXG4gICAgICAgICAgICBcXGBcXGBcXGBcclxuICAgICAgICBgLCB7IG1heExlbmd0aDogMTkwMCwgcHJlcGVuZCwgYXBwZW5kIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IHNlbnNpdGl2ZVBhdHRlcm4oKTogYW55IHtcclxuICAgICAgICBpZiAoIXRoaXMuX3NlbnNpdGl2ZVBhdHRlcm4pIHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmNsaWVudC50b2tlbiEuc3BsaXQoJycpLmpvaW4oJ1teXXswLDJ9Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldlRva2VuID0gdGhpcy5jbGllbnQudG9rZW4hLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignW15dezAsMn0nKTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdfc2Vuc2l0aXZlUGF0dGVybicsIHsgdmFsdWU6IG5ldyBSZWdFeHAoYCR7dG9rZW59fCR7cmV2VG9rZW59YCwgJ2cnKSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZW5zaXRpdmVQYXR0ZXJuO1xyXG4gICAgfVxyXG59Il19