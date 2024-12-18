import express from "express";

import { getAllTaskProgress, upload, handleTaskProgress, downloadAttachment } from "../controllers/taskProgressControllers.js";

const router = express.Router();


router.post('/task-progress', upload.single('Attachment'), handleTaskProgress);

router.get('/task-progress/download/:TaskProgressID', downloadAttachment); // Download attachment

router.get('/admin-recived-tasks-progress', getAllTaskProgress); //show all the task Progress to Admin side

router.get('/employee-sended-tasks-progress', getAllTaskProgress); //show all the task Progress to client side


export default router;
