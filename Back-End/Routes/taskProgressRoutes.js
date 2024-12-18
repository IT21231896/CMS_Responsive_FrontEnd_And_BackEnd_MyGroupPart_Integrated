import express from "express";
import multer from 'multer';
import path from 'path';

import { getAllTasks,upload,handleTaskProgress,downloadAttachment } from "../controllers/taskProgressControllers.js";

const router =express.Router();



  


// router.post('/task-progress', upload.single('Attachment'), createTaskProgress); 

router.post('/task-progress', upload.single('Attachment'), handleTaskProgress);

router.get('/task-progress/download/:TaskProgressID', downloadAttachment); // Download attachment


router.get('/adminRecivedTasks',getAllTasks);

export default router;
