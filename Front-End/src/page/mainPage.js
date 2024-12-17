import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/templetes/MainNav'
import Footer from '../components/templetes/Footer';
import WelcomePage from './welcomePage';
function MainPage() {
  return (
    <div className="d-flex flex-column"style={{ minHeight: '100vh' }}>
     <Navbar /> 
     <div className="flex-grow-1">
        <WelcomePage/>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;