import express from 'express';
import AdminTaskRoutes from './Routes/AdminTaskRoutes.js'; // Import AdminRoutes.
import EmployeeTaskProgressRoutes from './Routes/EmployeeTaskProgressRoutes.js';

import cors from 'cors';

const app = express();  // Initialize the express app first

// Use CORS middleware
app.use(cors());

const port = 8800;

// Middleware for JSON parsing
app.use(express.json());

// Use the AdminRoutes for task management
app.use('/admin/task', AdminTaskRoutes);

app.use('/uploads', express.static('uploads')); 
app.use('/employee/task', EmployeeTaskProgressRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
