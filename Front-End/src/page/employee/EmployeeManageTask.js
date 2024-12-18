//employee manage tasks progress - this ui shows the all the task progress that send by the employee
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
    const [TaskProgress, setTasks] = useState([]);

    // Fetch tasks from the API
    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/adminRecivedTasks'); //chenge this to proper employee routes
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
                        <li className="breadcrumb-item active" aria-current="page">Task Progress</li>
                    </ol>
                </nav>

                <div className="apwgr-tasks-container">
                    <div className='apwgr-headManage'>
                        <h1 className="text-center">Tasks Progresses</h1>
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
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TaskProgress.map((TaskProgress) => (
                                    <tr key={TaskProgress.TaskProgressID}>
                                        <td>{TaskProgress.TaskID}</td>
                                        <td>{TaskProgress.EmployeeID}</td>
                                        <td>{TaskProgress.TaskName}</td>
                                        <td>{TaskProgress.TaskDescription}</td>
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
