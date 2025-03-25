const dotenv = require("dotenv");
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const sharp = require("sharp");
const bcrypt = require("bcryptjs")
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const slugify = require('slugify');
dotenv.config();

/*Models Import */
const User = require("./models/user");
const Test = require("./models/test");
const Question = require("./models/question");
const Response = require("./models/response");
const Option = require("./models/options");
const Notification = require("./models/notification");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with  React app's URL
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const bucketName = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const crypto = require('crypto');
const jwt = require("jsonwebtoken");


const s3Client = new S3Client({
    region,
    credentials: {
        accessKeyId,
        secretAccessKey
    }
})
// const mongodbURL = 'mongodb://127.0.0.1:27017/klansin';
const mongodbURL = process.env.MONGODB_DATABASE_URI;





async function main() {
    try {

        await mongoose.connect(mongodbURL, { dbName: "eksaina" });
        console.log("***connected***");
    } catch (err) {
        console.log(err);
    }
}
main();

const port = 9090;
const host = 'http://127.0.0.1:' + port;


const authenticate = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ message: "Access Denied" });
    }

    try {
        const verified = jwt.verify(token, "your_jwt_secret_key");
        req.user = verified; // Attach user info from token payload
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};



app.get("/", async (req, res, next) => {
    res.send("All stations! This is your commander.");

});
app.post("/signup", async (req, res, next) => {


    const generateUserId = (bytes = 8) => {
        const randomString = crypto.randomBytes(bytes).toString('hex');
        const timenow = Date.now().toString();

        return (`userid-${randomString}-${timenow}`);

    }
    try {

        const enteredpassword = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(enteredpassword, salt);
        const data = 
            {
                "firstname": req.body.firstname,
                "lastname": req.body.lastname,
                "userid": generateUserId(),
                "email": req.body.email,
                "password": hashedPassword,

            }

        
        const result = await User.create(data);
        res.json({ registered: 'true', userid : result.userid })
    }
    catch (err) {
        console.error("Signup Error:", err);
        res.status(500).send("Internal Server error during signup");
    }




})

app.post("/login",async(req,res)=>{
    const { email, password } = req.body;
    try {
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email", "login" : "failure"  });
        }

        // Verify password
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password", "login" : "failure"  });
        }

        // Generate JWT token
        const token = jwt.sign({ userid: user.userid }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "24h" });

        // Respond with token
        res.json({ "token" : token, "login" : "success" });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }




})









app.post("/image/upload", upload.single('image'), async (req, res) => {
    const generateFileName = (bytes = 32) => {
        const randomString = crypto.randomBytes(bytes).toString('hex');
        const timenow = Date.now().toString();

        return (`${randomString}-${timenow}`);

    }
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ error: "No file uploaded", });
        }
        const fileBuffer = file.buffer;
        const fileName = generateFileName();
        const uploadParams = {
            Bucket: bucketName,
            Body: fileBuffer,
            Key: fileName,
            ContentType: file.mimetype,
        };
        await s3Client.send(new PutObjectCommand(uploadParams));

        res.json({
            imageKey: fileName,

            error: "No Error, Sucess",

        })

    }
    catch (err) {
        res.status(500).json({
            error: "Internal Server Error",

        })

    }
})
app.listen(port, () => console.log(`Server is running on port ${port} and host is ${host}`));