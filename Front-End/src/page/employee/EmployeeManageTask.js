//employee manage tasks - in hear this ui shows the all the task that added by the admin to all employees
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "../../css/employee/EmployeeManageTask.css";

import Navbar from '../../components/templetes/Navbar';
import Footer from '../../components/templetes/Footer';
import Sidebar from '../../components/templetes/ESideBar';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeManageTask = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    // Fetch tasks from the API
    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8800/employee/task/tasks'); //chenge this to proper employee routes
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };


    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="apwgr-manage-tasks-container">
                <nav className="breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="text-decoration-none" href="/employee-Dashboard">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Manage Task</li>
                    </ol>
                </nav>

                <div className="apwgr-tasks-container">
                    <div className='apwgr-headManage'>
                        <h1 className="text-center">Manage Tasks</h1>
                    </div>

                    <header className="apwgr-tasks-header">
                        <button className="apwgr-add-task-btn" onClick={() => navigate('/employee-progress-task')}>Send Progress</button>
                        <button className="apwgr-progress-btn" onClick={() => navigate('/employee-recived-task')}>Received Tasks</button>
                    </header>

                    <div className="apwgr-tasks-table-container">
                        <table className="apwgr-tasks-table">
                            <thead>
                                <tr>
                                    <th>Task ID</th>
                                    <th>Employee ID</th>
                                    <th>Task Name</th>
                                    <th>Budget Info</th>
                                    <th>Description</th>
                                    <th>Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.TaskID}>
                                        <td>{task.TaskID}</td>
                                        <td>{task.EmployeeID}</td>
                                        <td>{task.TaskName}</td>
                                        <td>{task.BudgetInfo}</td>
                                        <td>{task.Description}</td>
                                        <td>{new Date(task.Deadline).toISOString().split('T')[0]}</td>
                
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button className="apwgr-sidebar-toggle" onClick={toggleSidebar}>☰</button>
            <div className={`flex-grow-1 d-flex ${sidebarVisible ? 'show-sidebar' : ''}`}>
                <Sidebar sidebarVisible={sidebarVisible} />
            </div>
            <div className="container3">
                <Footer />
            </div>
        </div>
    );
};

export default EmployeeManageTask;
