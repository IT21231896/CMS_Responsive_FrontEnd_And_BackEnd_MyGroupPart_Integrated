import React from 'react';
import '../../css/Sidebar.css';
import attendence from '../../assets/attendence.png';
import mail from '../../assets/mail.png';
import task from '../../assets/task.png';
import payment from '../../assets/payment.png';
import invoice from '../../assets/invoice.png';
import employee from '../../assets/employee.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><a href="#attendence"><img src={attendence} alt="Attendance" style={{ width: '20px', marginRight: '14px' }} /><span>Attendance</span></a></li>
        <li><a href="#invoice"><img src={invoice} alt="Attendance" style={{ width: '25px', marginRight: '10px' }}/><span>Invoice</span></a></li>
        <li><a href="#clients"><img src={employee} alt="Attendance" style={{ width: '25px', marginRight: '10px',boxShadow: 'none' }}/><span>Employers</span></a></li>
        <li><a href="#payment"><img src={payment} alt="Attendance" style={{ width: '25px', marginRight: '10px' }}/><span>Payment</span></a></li>
        <li><a href="admin-manage-task"><img src={task} alt="Attendance" style={{ width: '25px', marginRight: '10px' }}/><span>Task</span></a></li>
        <li><a href="#mailbox"><img src={mail} alt="Attendance" style={{ width: '25px', marginRight: '10px' }}/><span>Mail-Box</span></a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
