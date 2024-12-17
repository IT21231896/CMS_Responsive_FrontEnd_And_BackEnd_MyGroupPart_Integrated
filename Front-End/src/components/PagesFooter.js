import React from 'react';
import '../css/PagesFooter.css';
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer-container text-white text-center fixed-bottom">
      <div className="container pt-3">
        {/* Content section */}
        <div className="container d-none d-md-block">
          <div className="row">
            {/* Left side: Industries */}
            <div className="col-md-2 mb-1" style={{ textAlign: 'left' }}>
              <h5 className="text-dark mb-3">Industries</h5>
              <ul className="list-unstyled">
                <li><span className="text-dark">Shipping/Freight</span></li>
                <li><span className="text-dark">Hospitality</span></li>
                <li><span className="text-dark">Information Technology</span></li>
                <li><span className="text-dark">Human Resources</span></li>
              </ul>
            </div>

            {/* Left side: Our Partners */}
            <div className="col-md-2 mb-1" style={{ textAlign: 'left', fontSize: '1.5rem' }}>
              <h5 className="text-dark mb-3">Our Partners</h5>
              <ul className="list-unstyled" style={{ textAlign: 'left' }}>
                <li><span className="text-dark">CBL</span></li>
                <li><span className="text-dark">Union Assurance</span></li>
                <li><span className="text-dark">Solex</span></li>
                <li><span className="text-dark">Meedro</span></li>
              </ul>
            </div>

            {/* Center: Social Media Links */}
            <div className="col-md-4 mb-1">
              <h5 className="text-dark mb-3">Get Social with Us</h5>
              <div className="d-flex justify-content-center">
                <a href="https://www.facebook.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook footer-social-icon"></i>
                </a>
                <a href="https://www.twitter.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter-x footer-social-icon"></i>
                </a>
                <a href="https://www.instagram.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram footer-social-icon"></i>
                </a>
                <a href="https://wa.me/your-phone-number" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp footer-social-icon"></i>
                </a>
                <a href="https://www.linkedin.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin footer-social-icon"></i>
                </a>
              </div>
            </div>

            {/* Right side: Logo */}
            <div className="col-md-1">
              <img src={logo} alt="Company Logo" style={{ width: '40px' }} />
            </div>

            {/* Right side: Contact Us */}
            <div className="col-md-3 mb-1 ml-1" style={{ textAlign: 'left' }}>
              <h5 className="text-dark mb-3">Contact Us</h5>
              <p className="footer-contact-text text-dark contact-item">
                <i className="bi bi-geo-alt" style={{ fontSize: '0.75rem' }}></i>
                <span style={{ marginLeft: '5px' }}>676/1 Colombo - galle main Rd,Panandura</span>
              </p>
              <p className="footer-contact-text text-dark contact-item">
                <i className="bi bi-telephone" style={{ fontSize: '0.75rem' }}></i>
                <span style={{ marginLeft: '5px' }}>(+94)77 479 5371</span>
              </p>
              <p className="footer-contact-text text-dark contact-item">
                <i className="bi bi-envelope" style={{ fontSize: '0.75rem' }}></i>
                <span style={{ marginLeft: '5px' }}> gamagerecruiters@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom part for copyright */}
        <div className="mt-1 fs-6 fs-md-5 footer-bottom">
          <p className="text-white mb-0">&copy; 2024 Gamage Recruiters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}