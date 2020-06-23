"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Giveaways = void 0;
const typeorm_1 = require("typeorm");
let Giveaways = class Giveaways {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Giveaways.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 22 }),
    __metadata("design:type", String)
], Giveaways.prototype, "channel", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 22 }),
    __metadata("design:type", String)
], Giveaways.prototype, "message", void 0);
__decorate([
    typeorm_1.Column({ type: "integer" }),
    __metadata("design:type", Number)
], Giveaways.prototype, "end", void 0);
Giveaways = __decorate([
    typeorm_1.Entity("givaways")
], Giveaways);
exports.Giveaways = Giveaways;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZWF3YXlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL290aGVyL0dpdmVhd2F5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBaUU7QUFHakUsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztDQVlyQixDQUFBO0FBVkc7SUFEQyxnQ0FBc0IsRUFBRTs7cUNBQ2I7QUFHWjtJQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQzs7MENBQ3RCO0FBR2pCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDOzswQ0FDdEI7QUFHakI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOztzQ0FDZjtBQVhKLFNBQVM7SUFEckIsZ0JBQU0sQ0FBQyxVQUFVLENBQUM7R0FDTixTQUFTLENBWXJCO0FBWlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIENvbHVtbiwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcblxyXG5ARW50aXR5KFwiZ2l2YXdheXNcIilcclxuZXhwb3J0IGNsYXNzIEdpdmVhd2F5cyB7XHJcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXHJcbiAgICBpZCE6IG51bWJlcjtcclxuXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogMjJ9KVxyXG4gICAgY2hhbm5lbCE6IHN0cmluZztcclxuXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogJ3ZhcmNoYXInLCBsZW5ndGg6IDIyfSlcclxuICAgIG1lc3NhZ2UhOiBzdHJpbmc7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwiaW50ZWdlclwiIH0pXHJcbiAgICBlbmQhOiBudW1iZXI7XHJcbn0iXX0=