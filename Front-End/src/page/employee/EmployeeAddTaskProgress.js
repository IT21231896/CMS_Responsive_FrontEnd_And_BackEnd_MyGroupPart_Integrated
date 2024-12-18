import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../css/employee/EmployeeAddTaskProgress.css';

import Navbar from '../../components/templetes/Navbar';
import Footer from '../../components/templetes/Footer';
import Sidebar from '../../components/templetes/ESideBar';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const EmployeeAddTaskProgress = () => {
    
    const navigate = useNavigate();

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [TaskName, setTaskTitle] = useState('');
    const [TaskID, setTaskID] = useState('');
    const [TaskDescription, setTaskDescription] = useState('');
    const [file, setFile] = useState(null);
  
    const EmployeeID = 5; // manual EmployeeID creation, PLZ change this when the login/authentication process has been implemented
  
    const handleFormSubmit = async (e) => { // Handle form submission (send task progress data to the server)
      e.preventDefault();
  
      const formData = new FormData(); // Create a new FormData object to send data, including file if any
      formData.append('TaskID', TaskID);
      formData.append('EmployeeID', EmployeeID);
      formData.append('TaskName', TaskName);
      formData.append('Description', TaskDescription);
  
      if (file) { // If a file is selected, append it to the FormData
        formData.append('Attachment', file);
      }
  
      try { // Send the form data to the server using axios POST request
        const response = await axios.post('http://localhost:8800/api/task-progress', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        if (response.status === 200) { // If the request is successful, clear the form and show a success message
          alert('Task Progress Updated Successfully!');
          setTaskTitle('');
          setTaskID('');
          setTaskDescription('');
          setFile(null);
        } else {
          alert('Failed to Update the Task Progress.');
        }
      } catch (error) { // Handle any errors that occur during the request
        console.error('Error Updating the Task:', error);
        alert('An Error Occurred while Updating the Task Progress.');
      }
    };
  
    const toggleSidebar = () => { // Toggle the visibility of the sidebar
      setSidebarVisible(!sidebarVisible);
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
                        <form className="apwgr-task-form" onSubmit={handleFormSubmit}>

                            <label>
                                <input type="text" name="TaskName" id="TaskName" placeholder="Task Name" value={TaskName} onChange={(e) => setTaskTitle(e.target.value)} required />
                            </label>
                            <label>
                                <input type="text" name="TaskID" id="TaskID" placeholder="Task ID" value={TaskID} onChange={(e) => setTaskID(e.target.value)} required />
                            </label>
                            <label>
                                <textarea name="TaskDescription" id="TaskDescription" placeholder="Task Description" value={TaskDescription} onChange={(e) => setTaskDescription(e.target.value)} required></textarea>
                            </label>
                            <label>
                                <input type="file" id="fileUpload" name="Attachment" onChange={(e) => setFile(e.target.files[0])}  />
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

/*
import React, { useState } from 'react';
import Navbar from '../../components/templetes/Navbar';
import Footer from '../../components/PagesFooter';
import Sidebar from '../../components/templetes/ESideBar';
import axios from 'axios';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../../css/employee/ETP(apvgr).css';

function EmployeeAddTaskProgress() { // State variables to manage task details and sidebar visibility
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [TaskName, setTaskTitle] = useState('');
  const [TaskID, setTaskID] = useState('');
  const [TaskDescription, setTaskDescription] = useState('');
  const [file, setFile] = useState(null);

  const EmployeeID = 5; // manual EmployeeID creation, PLZ change this when the login/authentication process has been implemented

  const handleFormSubmit = async (e) => { // Handle form submission (send task progress data to the server)
    e.preventDefault();

    const formData = new FormData(); // Create a new FormData object to send data, including file if any
    formData.append('TaskID', TaskID);
    formData.append('EmployeeID', EmployeeID);
    formData.append('TaskName', TaskName);
    formData.append('Description', TaskDescription);

    if (file) { // If a file is selected, append it to the FormData
      formData.append('Attachment', file);
    }

    try { // Send the form data to the server using axios POST request
      const response = await axios.post('http://localhost:8800/api/task-progress', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) { // If the request is successful, clear the form and show a success message
        alert('Task Progress Updated Successfully!');
        setTaskTitle('');
        setTaskID('');
        setTaskDescription('');
        setFile(null);
      } else {
        alert('Failed to Update the Task Progress.');
      }
    } catch (error) { // Handle any errors that occur during the request
      console.error('Error Updating the Task:', error);
      alert('An Error Occurred while Updating the Task Progress.');
    }
  };

  const toggleSidebar = () => { // Toggle the visibility of the sidebar
    setSidebarVisible(!sidebarVisible);
  };

  const handleGoBack = () => { // Go back to the previous page
    window.history.back();
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Navbar />
      <button className="btn btn-primary sidebar-toggle" onClick={toggleSidebar}>☰</button>

      <div className={`flex-grow-1 d-flex ${sidebarVisible ? 'show-sidebar' : ''}`} style={{ flexGrow: 1 }}>
        <Sidebar sidebarVisible={sidebarVisible} />
        
        <div className="main-content-wrap">
          <div className="container mb-4 d-none d-md-flex breadcrumb-wrap">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Tasks
                </li>
              </ol>
            </nav>
          </div>

          <div className="main-content flex-grow-1 align-items-center justify-content-center">
            <div className="centered-div">
              <h2>Send Progress</h2>
            </div>
            
            <div className="container">
              <div className="justify-content-start mb-3">
                <button className="btn btn-secondary back-button" onClick={handleGoBack}>
                  <img src={require('../../assets/back-button.png')} alt="Back Icon" className="back-icon" />
                  Back
                </button>
              </div>
            </div>

            <div className="card shadow-sm p-4">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    id="TaskName"
                    className="form-control"
                    placeholder="Task Title"
                    value={TaskName}
                    onChange={(e) => setTaskTitle(e.target.value)} // Update task title on change
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="TaskID"
                    className="form-control"
                    placeholder="Task ID"
                    value={TaskID}
                    onChange={(e) => setTaskID(e.target.value)} // Update task ID on change
                  />
                </div>
                <div className="mb-0">
                  <textarea
                    id="TaskDescription"
                    className="form-control"
                    rows="8"
                    placeholder="Task Description"
                    value={TaskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)} // Update task description on change
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input type="file"
                    id="fileUpload"
                    className="form-control"
                    onChange={(e) => setFile(e.target.files[0])} // Update file state on file selection
                  /> 
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary send-button">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default EmployeeAddTaskProgress;
*/