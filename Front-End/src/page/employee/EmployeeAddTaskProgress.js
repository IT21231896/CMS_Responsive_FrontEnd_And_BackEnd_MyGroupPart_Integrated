import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../css/employee/EmployeeAddTaskProgress.css';

import Navbar from '../../components/templetes/Navbar';
import Footer from '../../components/templetes/Footer';
import Sidebar from '../../components/templetes/ESideBar';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const EmployeeAddTaskProgress = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [taskData, setTaskData] = useState({
        EmployeeID: '5', /* this is the already registed in the DB in employee table(employeeID7 alredy their in the db = ), default employee id, after integrate we need to send that perticuler ligged in exmployee ID - EmployeeID: '', */
        TaskName: '',
        TaskID: '',
        TaskDescription: '',
        Attachment: null,
    });

    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
    };

    const handleFileChange = (e) => {
        setTaskData({ ...taskData, Attachment: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('TaskName', taskData.TaskName);
        formData.append('TaskID', taskData.TaskID);
        formData.append('TaskDescription', taskData.TaskDescription);
        if (taskData.Attachment) {
            formData.append('Attachment', taskData.Attachment);
        }
        formData.append('EmployeeID', taskData.EmployeeID);

        try {
            const response = await fetch('http://localhost:8800/employee/task/task-progress', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (response.ok) {
                alert('Task Progress Updated Successfully!');
                setTaskData({
                    TaskName: '',
                    TaskID: '',
                    TaskDescription: '',
                    Attachment: null,
                    EmployeeID: '', 
                });
            } else {
                alert(result.message || 'Failed to Update the Task Progress.');
            }
        } catch (error) {
            console.error('Error Updating the Task:', error);
            alert('An Error Occurred while Updating the Task Progress.');
        }
    };

    return (
        <div>
            <Navbar />

            <div className="apwgr-main-tasks-container">
                <nav className="breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="text-decoration-none" href="/employee-dashboard">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Send Task Progress</li>
                    </ol>
                </nav>

                <div className="apwgr-head">
                    <h1 className="text-center">Send Tasks Progress</h1>
                </div>

                <div className="apwgr-back-button-area">
                    <div className="apwgr-but-inside">
                        <button className="btn apwgr-back-btn my-3" onClick={() => navigate('/employee-manage-task-prgress')}>
                            <span className="bi bi-arrow-left m-3"> Back </span>
                        </button>
                    </div>
                </div>

                <div className="apwgr-add-task-container">
                    <div className="apwgr-content">
                        <form className="apwgr-task-form" onSubmit={handleSubmit}>
                            {/*<label>
                                <input type="text" name="EmployeeID" placeholder="Employee ID" value={taskData.EmployeeID} onChange={handleInputChange} required />
                            </label>*/}
                            <label>
                                <input type="text" name="TaskName" placeholder="Task Name" value={taskData.TaskName} onChange={handleInputChange} required />
                            </label>
                            <label>
                                <input type="text" name="TaskID" placeholder="Task ID" value={taskData.TaskID} onChange={handleInputChange} required />
                            </label>
                            <label>
                                <textarea name="TaskDescription" placeholder="Task Description" value={taskData.TaskDescription} onChange={handleInputChange} required></textarea>
                            </label>
                            <label>
                                <input type="file" name="Attachment" onChange={handleFileChange} />
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

export default EmployeeAddTaskProgress;
