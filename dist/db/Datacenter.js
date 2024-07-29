"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Datacenter {
    constructor() {
        this.mainOffices = [];
        this.branches = [];
    }
    addNewMainOffice(main) {
        this.mainOffices.push(main);
    }
}
exports.default = Datacenter;
