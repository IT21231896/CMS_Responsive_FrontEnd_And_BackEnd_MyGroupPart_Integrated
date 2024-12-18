import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './page/mainPage';
import SigninPage from './page/signinPage';
import AdminDashboard from './page/admin/adminDashboardPage';
import EmployeeDashboard from './page/employee/employeeDashboard';
import AdminManageTask from './page/admin/adminManageTask';
import AdminAddTask from './page/admin/AdminAddTask';
import AdminReceivedTask from './page/admin/AdminReceivedTask';
import EmployeeReceivedTask from './page/employee/EmployeeReceivedTask';
import EmployeeManageTask from './page/employee/EmployeeManageTask';
import EmployeeAddTaskProgress from './page/employee/EmployeeAddTaskProgress';
function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={< MainPage/>} />
        <Route path="/login" element={<SigninPage/>} />

        {/* Admin-Side Routes */}
        <Route path="/admin-Dashboard" element={<AdminDashboard/>} />

        <Route path="/admin-manage-task" element={<AdminManageTask/>}/>
        <Route path="/admin-add-task" element={<AdminAddTask/>}/>
        <Route path="/admin-recived-task" element={<AdminReceivedTask/>}/>
       

        {/* Employee-Side Routes */}
        <Route path="/employee-dashboard" element={<EmployeeDashboard/>}/>
        <Route path="/employee-progress-task" element={<EmployeeAddTaskProgress/>}/>
        <Route path="/employee-recived-task" element={<EmployeeReceivedTask/>}/>
        <Route path="/employee-manage-task-prgress" element={<EmployeeManageTask/>}/>

      </Routes>
    </Router>
  );
}

export default App;
