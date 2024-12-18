import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../../css/admin/adminAddTask.css";

import Navbar from '../../components/templetes/Navbar';
import Footer from '../../components/templetes/Footer';
import Sidebar from '../../components/templetes/SideBar';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminAddTask = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [taskData, setTaskData] = useState({
        EmployeeID: '',
        TaskName: '',
        BudgetInfo: '',
        Description: '',
        Deadline: '',
    });

    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8800/admin/task/add-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(taskData),
            });
            const result = await response.json();
            if (response.ok) {
                alert('Task added successfully!');
                navigate('/admin-manage-task');
            } else {
                alert(result.message || 'Failed to add task.');
            }
        } catch (error) {
            console.error('Error adding task:', error);
            alert('Something went wrong.');
        }
    };

    return (
        <div>
            <Navbar />

            <div className="apwgr-main-tasks-container">
                <nav className="breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="text-decoration-none" href="/admin-Dashboard">Home</a></li>
                        <li className="breadcrumb-item"><a className="text-decoration-none" href="/admin-manage-task">Manage Tasks</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Task</li>
                    </ol>
                </nav>

                <div className="apwgr-head">
                    <h1 className="text-center">Add Tasks</h1>
                </div>

                <div className="apwgr-back-button-area">
                    <div className="apwgr-but-inside">
                        <button className="btn apwgr-back-btn my-3" onClick={() => navigate('/admin-manage-task')}>
                            <span className="bi bi-arrow-left m-3"> Back </span>
                        </button>
                    </div>
                </div>

                <div className="apwgr-add-task-container">
                    <div className="apwgr-content">
                        <form className="apwgr-task-form" onSubmit={handleSubmit}>
                            <label>
                                <input type="text" name="EmployeeID" placeholder="Employee ID" value={taskData.EmployeeID} onChange={handleInputChange} required />
                            </label>
                            <label>
                                <input type="text" name="TaskName" placeholder="Task Name" value={taskData.TaskName} onChange={handleInputChange} required />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="Deadline"
                                    placeholder="Deadline"
                                    onFocus={(e) => (e.target.type = 'date')}
                                    onBlur={(e) => (e.target.type = 'text')}
                                    value={taskData.Deadline}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                <input type="text" name="BudgetInfo" placeholder="Budgetary Information" value={taskData.BudgetInfo} onChange={handleInputChange} required />
                            </label>
                            <label>
                                <textarea name="Description" placeholder="Task Description" value={taskData.Description} onChange={handleInputChange}></textarea>
                            </label>
                            <div className="apwgr-back-button-area">
                                <button type="submit" className="apwgr-send-btn">Send</button>
                            </div>
                        </form>
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

export default AdminAddTask;
