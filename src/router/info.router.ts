import { Router } from 'express';
const infoRoutes = Router();
import { Info } from "../schemas/info.model";
import multer from 'multer';
const upload = multer();




infoRoutes.get('/create', (req, res) => {
    res.render("createStudent");
});

infoRoutes.post('/create', upload.none(), async (req, res) => {
    try {
        const infoNew = new Info(req.body);
        const info = await infoNew.save();
        if (info) {
            res.render("success", {info})
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error");
    }
});


infoRoutes.get('/update/:id', async (req, res) => {
    try {
        const info = await Info.findOne({ _id: req.params.id });
        if (info) {
            res.render("updateStudent", {info: info})
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error");
    }
});

infoRoutes.post('/update', upload.none(), async (req, res) => {
    try {
        const info = await Info.findOne({ _id: req.body.id });
        info.fullName = req.body.fullName;
        info.studentCode = req.body.studentCode;
        info.heoreticalScore = req.body.heoreticalScore;
        info.executionScore = req.body.executionScore;
        info.describe = req.body.describe;
        info.evaluate = req.body.evaluate;
        info.class = req.body.class;
        await info.save();
        if (info) {
            res.render("update",{info})
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error");
    }
});


infoRoutes.get('/list', async (req, res) => {
    try {
        const infos = await Info.find()
        res.render("lists", { infos: infos });
    } catch {
        res.render("error");
    }
});
infoRoutes.get('/showStudent/:id', async (req, res) => {
    try {
        const infos = await Info.findOne({ _id: req.params.id })
        res.render("student", { infos: infos });
    } catch {
        res.render("error");
    }
});


infoRoutes.get('/delete/:id', async (req, res) => {
    try {
        const info = await Info.findOneAndDelete({ _id: req.params.id });
        if (info) {
            res.redirect("/infos/list")
        } else {
            res.render("error");
        }
    } catch (err) {
        res.render("error");
    }
});


export default infoRoutes;
