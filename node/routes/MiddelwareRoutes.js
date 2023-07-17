import express from 'express';
import { uploadImage } from '../middelware/middelware.js';

const router = express.Router()


router.post('/upload', uploadImage);


export default router