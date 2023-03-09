"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactRoutes = (0, express_1.Router)();
const contact_model_1 = require("../schemas/contact.model");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
contactRoutes.get('/create', (req, res) => {
    res.render("createStudent");
});
contactRoutes.post('/create', upload.none(), async (req, res) => {
    try {
        const contactNew = new contact_model_1.Contact(req.body);
        const contact = await contactNew.save();
        if (contact) {
            res.render("success", { contact });
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
contactRoutes.get('/update/:id', async (req, res) => {
    try {
        const contact = await contact_model_1.Contact.findOne({ _id: req.params.id });
        if (contact) {
            res.render("updateStudent", { contact: contact });
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
contactRoutes.post('/update', upload.none(), async (req, res) => {
    try {
        const contact = await contact_model_1.Contact.findOne({ _id: req.body.id });
        contact.fullName = req.body.fullName;
        contact.studentCode = req.body.studentCode;
        contact.heoreticalScore = req.body.heoreticalScore;
        contact.executionScore = req.body.executionScore;
        contact.describe = req.body.describe;
        contact.evaluate = req.body.evaluate;
        contact.class = req.body.class;
        await contact.save();
        if (contact) {
            res.render("update", { contact });
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
contactRoutes.get('/list', async (req, res) => {
    try {
        const contacts = await contact_model_1.Contact.find();
        res.render("lists", { contacts: contacts });
    }
    catch (_a) {
        res.render("error");
    }
});
contactRoutes.get('/showStudent/:id', async (req, res) => {
    try {
        const contacts = await contact_model_1.Contact.findOne({ _id: req.params.id });
        res.render("student", { contacts: contacts });
    }
    catch (_a) {
        res.render("error");
    }
});
contactRoutes.get('/delete/:id', async (req, res) => {
    try {
        const contact = await contact_model_1.Contact.findOneAndDelete({ _id: req.params.id });
        if (contact) {
            res.redirect("/contacts/list");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
exports.default = contactRoutes;
//# sourceMappingURL=contact.router.js.map