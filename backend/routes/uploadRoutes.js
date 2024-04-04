import express from 'express';
import { v2 as cloudinary } from 'cloudinary'; //using version 2 cloudinary
import streamifier from 'streamifier';
import multer from 'multer';
import { isAdmin, isAuth } from '../utils.js';

const upload = multer(); // a package that handles uploading files to the server

const uploadRouter = express.Router();

// [1]
uploadRouter.post(
  '/',
  isAuth,
  isAdmin,
  upload.single('file'),
  async (req, res) => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    const result = await streamUpload(req);
    res.send(result);
  }
);

export default uploadRouter;

/* 


[1] component breakdowns

.post --> in the http method
'/' --> is the address
isAuth, isAdmin, upload.single('file') --> is the middleware
async(req, res) --> is the handler for the API


*/
