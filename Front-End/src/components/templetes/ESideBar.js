import React from 'react';
import '../../css/Sidebar.css';
import attendence from '../../assets/attendence.png';
import mail from '../../assets/mail.png';
import task from '../../assets/task.png';
import payment from '../../assets/payment.png';
import invoice from '../../assets/invoice.png';

const Sidebar = ({ sidebarVisible }) => {
  return (
    <div className={`sidebar ${sidebarVisible ? 'show-sidebar' : ''}`}>
      <h2>Dashboard</h2>
      <ul>
        <li><a href="#attendance"><img src={attendence} alt="Attendance" style={{ width: '20px', marginRight: '14px' }} /> Attendance</a></li>
        <li><a href="#invoice"><img src={invoice} alt="Attendance" style={{ width: '20px', marginRight: '14px' }} /> Invoice</a></li>
        <li><a href="#payment"><img src={payment} alt="Attendance" style={{ width: '20px', marginRight: '14px' }} /> Payment</a></li>
        <li><a href="/employee-manage-task-prgress"><img src={task} alt="Attendance" style={{ width: '20px', marginRight: '14px' }} /> Task</a></li>
        <li><a href="#mailbox"><img src={mail} alt="Attendance" style={{ width: '20px', marginRight: '14px' }} /> Mail-Box</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;