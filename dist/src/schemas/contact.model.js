"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    fullName: String,
    studentCode: String,
    heoreticalScore: String,
    executionScore: String,
    describe: String,
    evaluate: String,
    class: String
});
const Contact = (0, mongoose_1.model)('Contact', contactSchema);
exports.Contact = Contact;
//# sourceMappingURL=contact.model.js.map