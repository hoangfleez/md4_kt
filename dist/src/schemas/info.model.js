"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = void 0;
const mongoose_1 = require("mongoose");
const infoSchema = new mongoose_1.Schema({
    fullName: String,
    studentCode: String,
    heoreticalScore: String,
    executionScore: String,
    describe: String,
    evaluate: String,
    class: String
});
const Info = (0, mongoose_1.model)('Info', infoSchema);
exports.Info = Info;
//# sourceMappingURL=info.model.js.map