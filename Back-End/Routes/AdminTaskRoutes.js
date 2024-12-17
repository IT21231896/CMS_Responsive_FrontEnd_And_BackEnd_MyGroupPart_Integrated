//All the admin side task ui CRUD routes here

import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';

import {db} from '../utils/db.js';

const router = express.Router();


// Middleware to parse JSON
router.use(bodyParser.json());

// Add Task Route
router.post('/add-task', (req, res) => {
    const { EmployeeID, TaskName, BudgetInfo, Description, Deadline } = req.body;

    if (!EmployeeID || !TaskName || !BudgetInfo || !Deadline) {
        return res.status(400).json({ message: 'All required fields must be filled.' });
    }

    const sql = `INSERT INTO Task (EmployeeID, TaskName, BudgetInfo, Description, Deadline) VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [EmployeeID, TaskName, BudgetInfo, Description, Deadline], (err, result) => {
        if (err) {
            console.error('Error inserting task:', err);
            return res.status(500).json({ message: 'Failed to add task.' });
        }
        res.status(200).json({ message: 'Task added successfully.', taskID: result.insertId });
    });
});


// Fetch All Tasks Route
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

// Delete Task Route
router.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM Task WHERE TaskID = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting task:', err);
            return res.status(500).json({ message: 'Failed to delete task.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Task not found.' });
        }
        res.status(200).json({ message: 'Task deleted successfully.' });
    });
});


// Fetch All Tasks Progress Route - Jeno
router.get('/adminRecivedTasks', (req, res) => {
    const query = `SELECT * FROM TaskProgress`; // Adjust table name
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching tasks:', err);
        return res.status(500).json({ error: 'Failed to fetch tasks' });
      }
      res.json(results);
    });
});




export default router;
