const express = require("express");
const port = 8080;

const tcet_model = require("./tcet_module");
const teacher = tcet_model.teacher;
const student = tcet_model.student;

const app = express();
app.use(express.json());

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello friends...");
});

app.get("/teachers", async (req, res) => {
    console.log(req.params.id);
    let data = await teacher.find({ "_id": req.params.id });
    res.send(data[0]);
});

app.get("/students", async (req, res) => {
    console.log(req.params.id);
    let data = await student.find({ "_id": req.params.id });
    res.send(data[0]);
});

app.post("/teachers", async (req, res) => {
    req_data = req.query;
    let obj = new user(req.query)
    let result = await obj.save();
    res.send(result);
});

app.post("/students", async (req, res) => {
    req_data = req.query;
    let obj = new user(req.query)
    let result = await obj.save();
    res.send(result);
});

app.put("/teachers", async (req, res) => {
    console.log(req.body);

    //model.updateOne({where}, {set});
    let u_data = await teacher.updateOne({ "_id": req.body._id }, {
        "$set": {
            name: req.body.name,
            ref_id: req.body.ref_id,
            age: req.body.age,
            city: req.body.city,
            contact_no: req.body.contact_no
        }
    });
    res.send(u_data);
})

app.put("/students", async (req, res) => {
    console.log(req.body);

    //model.updateOne({where}, {set});
    let u_data = await student.updateOne({ "_id": req.body._id }, {
        "$set": {
            name: req.body.name,
            ref_id: req.body.ref_id,
            class: req.body.class,
            age: req.body.age,
            city: req.body.city,
            contact_no: req.body.contact_no
        }
    });
    res.send(u_data);
})

app.delete("teachers", async (req, res) => {
    let d_data = await teacher.deleteOne({ "_id": req.body._id });
    res.send(d_data);
});

app.delete(async (req, res) => {
    let d_data = await student.deleteOne({ "_id": req.body._id });
    res.send(d_data);
});

app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`);
});