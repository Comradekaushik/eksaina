const dotenv = require("dotenv");
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const sharp = require("sharp");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const slugify = require('slugify');
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());;
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

app.get("/", async (req, res, next) => {
    res.send("All stations! This is your commander.");

});
app.listen(port, () => console.log(`Server is running on port ${port} and host is ${host}`));