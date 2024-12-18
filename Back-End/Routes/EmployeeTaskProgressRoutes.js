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




export default router;

