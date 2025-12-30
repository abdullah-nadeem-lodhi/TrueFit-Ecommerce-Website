const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://ashuchaudhry005_db_user:<db_password>@cluster0.mfs8iaf.mongodb.net/")
//api creation
app.get('/', (req, res) => {
    res.send("Hello from Backend");
}
);
//image storage engine
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage
});
//upload end point for image 
app.use('/images', express.static('upload/images'));
app.post('/upload', upload.single('product'), (req, res) => {
    res.json({ success: 1, image_url:``});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server is Successfully Running,and App is listening on port " + port)
    }
    else console.log("Error occurred, server can't start", error);
});