import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/admin/(apwgr)adminRecivedTask.css'
import { IoDownloadOutline } from "react-icons/io5";

import Navbar from '../../components/templetes/Navbar';
import Footer from '../../components/templetes/Footer';
import Sidebar from '../../components/templetes/SideBar';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function AdminReceivedTask() {

  const navigate = useNavigate();

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/admin-recived-tasks-progress');
        setTasks(response.data);

      } catch (error) {
        console.error('Error fetching tasks :', error);
        setLoading(false);
      }
    }
    fetchTasks()
  }, [])

  return (

    <div>
      <Navbar />


      <div class='apwgr-container1'>
        <nav className="breadcrumb " aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a class="text-decoration-none" href="#">Home</a></li>
            <li class="breadcrumb-item"><a class="text-decoration-none" href="#">Task</a></li>
            <li class="breadcrumb-item active" aria-current="page">Received Task progress</li>
          </ol>
        </nav>
      </div>


      <div class='apwgr-container2  '>
        <div>
          <h1 class="text-center">Received Task </h1>
        </div>
        <div>
          <button class="btn apwgr-back-btn my-3" onClick={() => navigate('/admin-manage-task')}>
            <span class="bi bi-arrow-left-circle m-0 text-white"></span>
            <span class="ms-2">Back</span>
          </button>
        </div>

        <div class="apwgr-table-container">
          <div className="apwgr-table-responsive">
            <table className="table  table-bordered">
              <thead>
                <tr class="apwgr-table-light">
                  <th className="small-width">Task ID</th>
                  <th className="small-width">Employer ID</th>
                  <th className="large-width">Task Name</th>
                  <th className="large-width">Description</th>
                  <th className="small-width">Attachment</th>

                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.TaskProgressID}>
                    <td>{task.TaskID}</td>
                    <td>{task.EmployeeID}</td>
                    <td>{task.TaskName}</td>
                    <td>{task.Description}</td>

                    <td>
                      <div className="text-center">
                        <span className="d-block mt-1">
                          {task.Attachment
                            ? task.Attachment.split('/').pop().split('-').slice(1).join('-')  // Skip timestamp part
                            : 'No Attachment'}
                        </span>
                        {task.Attachment ? (
                          <a
                            href={`http://localhost:8800/api/task-progress/download/${task.TaskProgressID}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IoDownloadOutline size={20} />
                          </a>
                        ) : (
                          'No Attachment'
                        )}
                      </div>
                    </td>


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
  )
}

