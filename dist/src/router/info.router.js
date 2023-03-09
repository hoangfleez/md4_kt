"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const infoRoutes = (0, express_1.Router)();
const info_model_1 = require("../schemas/info.model");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
infoRoutes.get('/create', (req, res) => {
    res.render("createStudent");
});
infoRoutes.post('/create', upload.none(), async (req, res) => {
    try {
        const infoNew = new info_model_1.Info(req.body);
        const info = await infoNew.save();
        if (info) {
            res.render("success", { info });
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
infoRoutes.get('/update/:id', async (req, res) => {
    try {
        const info = await info_model_1.Info.findOne({ _id: req.params.id });
        if (info) {
            res.render("updateStudent", { info: info });
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
infoRoutes.post('/update', upload.none(), async (req, res) => {
    try {
        const info = await info_model_1.Info.findOne({ _id: req.body.id });
        info.fullName = req.body.fullName;
        info.studentCode = req.body.studentCode;
        info.heoreticalScore = req.body.heoreticalScore;
        info.executionScore = req.body.executionScore;
        info.describe = req.body.describe;
        info.evaluate = req.body.evaluate;
        info.class = req.body.class;
        await info.save();
        if (info) {
            res.render("update", { info });
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
infoRoutes.get('/list', async (req, res) => {
    try {
        const infos = await info_model_1.Info.find();
        res.render("lists", { infos: infos });
    }
    catch (_a) {
        res.render("error");
    }
});
infoRoutes.get('/showStudent/:id', async (req, res) => {
    try {
        const infos = await info_model_1.Info.findOne({ _id: req.params.id });
        res.render("student", { infos: infos });
    }
    catch (_a) {
        res.render("error");
    }
});
infoRoutes.get('/delete/:id', async (req, res) => {
    try {
        const info = await info_model_1.Info.findOneAndDelete({ _id: req.params.id });
        if (info) {
            res.redirect("/infos/list");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
exports.default = infoRoutes;
//# sourceMappingURL=info.router.js.map