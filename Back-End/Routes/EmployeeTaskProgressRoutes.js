import express from 'express';
import mysql from 'mysql';
import multer from 'multer';
import { db } from '../utils/db.js';


const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Configure multer for file uploads

// get All Tasks Route - EmployeeManageTask.js UI
router.get('/tasks', (req, res) => {
    const sql = `SELECT * FROM Task`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching tasks:', err);
            return res.status(500).json({ message: 'Failed to fetch tasks.' });
        }
        res.status(200).json(results);
    });
});

/*
// get All Tasks Progress Route - EmployeeManageTask.js UI
router.get('/sended-progress', (req, res) => {
    const sql = `SELECT * FROM TaskProgress`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching tasks:', err);
            return res.status(500).json({ message: 'Failed to fetch tasks.' });
        }
        res.status(200).json(results);
    });
});*/

/*
// Add Task Progress Route
router.post('/task-progress', upload.single('Attachment'), (req, res) => {
    const { TaskName,EmployeeID, TaskID, TaskDescription } = req.body;
    const Attachment = req.file ? req.file.filename : null; // Get the uploaded file's name or null if no file uploaded

    // Check for required fields
    if (!TaskName || !TaskID || !TaskDescription) {
        return res.status(400).json({ message: 'All required fields must be filled.' });
    }

    // Insert the data into the database
    const sql = `INSERT INTO TaskProgress (TaskName,EmployeeID, TaskID, TaskDescription, Attachment) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [TaskName,EmployeeID, TaskID, TaskDescription, Attachment], (err, result) => {
        if (err) {
            console.error('Error inserting task progress:', err);
            return res.status(500).json({ message: 'Please Check The TaskID is correct ; Failed to update task progress,.' });
        }
        res.status(200).json({ message: 'Task progress updated successfully.', progressID: result.insertId });
    });
});*/

export default router;

