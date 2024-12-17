import React, { useState } from 'react';
import Navbar from '../../components/templetes/Navbar';
import Footer from '../../components/templetes/Footer';
import Sidebar from '../../components/templetes/ESideBar';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../../css/employee/ETP(apvgr).css';

function EmployeeTaskProg() {
  const [sidebarVisible, setSidebarVisible] = useState(false); // Default to hidden on mobile
  const [taskData, setTaskData] = useState({
    TaskName: '',
    EmployeeID: '6',
    TaskID: '',
    TaskDescription: '',
    Attachment: null,
  });

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

  const handleFormSubmit = async (e) => {
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
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Navbar />

      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`flex-grow-1 d-flex ${sidebarVisible ? 'show-sidebar' : ''}`}>
        <Sidebar sidebarVisible={sidebarVisible} />

        <div className="main-content-wrap-employee-task">
          <div className="progcrums">
            <nav className="breadcrumb" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="text-decoration-none" href="/admin-Dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Send Tasks Progress
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
                <button
                  className="btn btn-secondary back-button"
                  onClick={() => window.history.back()}
                >
                  <img
                    src={require('../../assets/back-button.png')}
                    alt="Back Icon"
                    className="back-icon"
                  />
                  Back
                </button>
              </div>
            </div>

            <div className="card shadow-sm p-4">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="TaskName"
                    className="form-control"
                    placeholder="Task Name"
                    value={taskData.TaskName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="TaskID"
                    className="form-control"
                    placeholder="Task ID"
                    value={taskData.TaskID}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-0">
                  <textarea
                    name="TaskDescription"
                    className="form-control"
                    rows="8"
                    placeholder="Task Description"
                    value={taskData.TaskDescription}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    type="file"
                    name="Attachment"
                    className="form-control"
                    onChange={handleFileChange}
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

      <div className="container3">
        <Footer />
      </div>
    </div>
  );
}

export default EmployeeTaskProg;
