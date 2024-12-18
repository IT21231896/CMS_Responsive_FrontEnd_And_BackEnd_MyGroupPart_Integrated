import {db} from '../utils/db.js';
import path from 'path';
import fs from 'fs';
import multer from 'multer';


export const getAllTasks = (req, res) => {
  const query = `SELECT * FROM TaskProgress`; // Adjust table name
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching tasks:', err);
      return res.status(500).json({ error: 'Failed to fetch tasks' });
    }
    res.json(results);
  });
};

// Download Task Progress Attachment

export const downloadAttachment = (req, res) => {
  const { TaskProgressID } = req.params; // Task Progress ID

  // Query to get the file path from the database
  const query = `SELECT Attachment FROM TaskProgress WHERE TaskProgressID = ?`;

  db.query(query, [TaskProgressID], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.length === 0) {
      console.error('File not found for TaskProgressID:', TaskProgressID);
      return res.status(404).json({ error: 'File not found' });
    }

    const filePath = results[0].Attachment;

    // Validate file path
    if (!filePath || !fs.existsSync(filePath)) {
      console.error('Invalid file path:', filePath);
      return res.status(404).json({ error: 'File not found on the server' });
    }

    // Resolve the file path to prevent path traversal attacks
    const resolvedPath = path.resolve(filePath);

    // Send the file to the client
    res.download(resolvedPath, (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).json({ error: 'Failed to download file' });
      }
    });
  });
};


// Configure multer to save files to a directory
export const upload = multer({
  storage: multer.diskStorage({
      destination: (req, file, cb) => {
          const uploadDir = './uploads';
          if (!fs.existsSync(uploadDir)) {
              fs.mkdirSync(uploadDir, { recursive: true });
          }
          cb(null, uploadDir);
      },
      filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`);
      }
  })
});

// Function to insert task progress into the database
 const addTaskProgress = (taskData, callback) => {
  const { TaskID, EmployeeID, TaskName, TaskDescription, Attachment } = taskData;
  const sql = `
      INSERT INTO TaskProgress (TaskID, EmployeeID, TaskName, TaskDescription, Attachment)
      VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, [TaskID, EmployeeID, TaskName, TaskDescription, Attachment], callback);
};

// Handle task progress submissions
export const handleTaskProgress = (req, res) => {
  const { TaskID, EmployeeID, TaskName, TaskDescription } = req.body;
  const file = req.file ? path.join('uploads', req.file.filename) : null;

  const taskData = {
      TaskID,
      EmployeeID: EmployeeID,
      TaskName,
      TaskDescription: TaskDescription,
      Attachment: file
  };

  addTaskProgress(taskData, (err) => {
      if (err) {
          console.error('Error inserting task progress:', err);
          return res.status(500).send('Error saving task progress.');
      }
      res.send('Task progress added successfully.');
  });
};




