"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Associate {
    constructor() {
        this.id = 0;
        this.associateName = "";
        this.shares = 0;
    }
    getAssociateId() {
        return this.id;
    }
    setAssociateId(associateId) {
        this.id = associateId;
    }
    getAssociateName() {
        return this.associateName;
    }
    setAssociateName(associateName) {
        this.associateName = associateName;
    }
    getShares() {
        return this.shares;
    }
    setShares(shares) {
        this.shares = shares;
    }
}
exports.default = Associate;
