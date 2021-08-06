const mongoose = require("mongoose");
const conn_str = "mongodb://dbTcet:ShreyasAnup1327@cluster0-shard-00-00.5yefd.mongodb.net:27017,cluster0-shard-00-01.5yefd.mongodb.net:27017,cluster0-shard-00-02.5yefd.mongodb.net:27017/tcet_users?ssl=true&replicaSet=atlas-ysv9zr-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected successfully..."))
    .catch((error) => console.log(error));

const teacherSchema = new mongoose.Schema({
    name: String,
    ref_id: String,
    age: Number,
    city: String,
    contact_no: Number
})

const studentSchema = new mongoose.Schema({
    name: String,
    ref_id: String,
    class: String,
    age: Number,
    city: String,
    contact_no: Number
})

const Teacher = new mongoose.model("teachers", teacherSchema);

const Student = new mongoose.model("students", studentSchema);

exports.teacher = Teacher;
exports.student = Student;

//inseting documents in different collections
//const t1 = new Teacher({ name: "Shailesh", ref_id: "COMP1234", age: 34, city: "mumbai", contact_no: 9021988774 });
//t1.save();

//const s1 = new Student({ name: "Shreyas", ref_id: "COMP1234", class: "SECIVIL", age: 34, city: "mumbai", contact_no: 9021988774 });
//s1.save();