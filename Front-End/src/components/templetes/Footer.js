import React from 'react'
import '../../css/Footer.css';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    
    <div>
<footer className="text-white text-center" style={{ backgroundColor: '#d7d7d7', color: '#ffffff', position: 'fixed',
        bottom: '0',
        left: '0',
        position:'relative',
        right: '0',
        width: '100%',
        zIndex: '1000' }}>
  <div className="container pt-3">


    {/* Content section */}
    <div className="container ">
      <div className="row d-flex justify-content-start flex-wrap">
        {/* Left side: Industries */}
        <div className=" col-12 col-sm-6 col-md-2 mb-1 industries-partner"  style={{ textAlign: 'left' }}>
          <h5 className="text-dark mb-3">Industries</h5>
          <ul className="list-unstyled">
            <li><span className="text-dark">Shipping/Freight</span></li>
            <li><span className="text-dark">Hospitality</span></li>
            <li><span className="text-dark">Information Technology</span></li>
            <li><span className="text-dark">Human Resources</span></li>
          </ul>
        </div>

        {/* Left side: Our Partners */}
        <div className="col-12 col-sm-6 col-md-2 mb-1 industries-partner"  style={{ textAlign: 'left',fontSize: '1.5 rem' }}>
          <h5 className="text-dark mb-3">Our Partners</h5>
          <ul className="list-unstyled" style={{ textAlign: 'left' }}>
            <li><span className="text-dark">CBL</span></li>
            <li><span className="text-dark">Union Assurance</span></li>
            <li><span className="text-dark">Solex</span></li>
            <li><span className="text-dark">Meedro</span></li>
          </ul>
        </div>

        {/* Center: Social Media Links */}
        <div className="col-12 col-md-4 mb-1">
          <h5 className="text-dark mb-3">GET SOCIAL WITH US</h5>
          <div className="d-flex justify-content-center">
            <a href="https://www.facebook.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a href="https://www.twitter.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter-x" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a href="https://www.instagram.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a href="https://wa.me/your-phone-number" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a href="https://www.linkedin.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
            </a>
          </div>
        </div>

        {/* Right side: Logo */}
        
        <div className="col-md-1 d-none d-md-block ">
        
        <img src={logo} alt="Company Logo" style={{ width: '50px' }} />
        </div>

        {/* Right side: Contact Us */}
        <div className="col-md-3 mb-1 d-none d-md-block " style={{ textAlign: 'left' }}>
              <h5 className="text-dark mb-3">Contact Us</h5>
               <p className="footer-contact-text text-dark contact-item">
               <i className="bi bi-geo-alt" style={{ fontSize: '0.70rem' }}></i> {/* Location pin icon */}
                   <span style={{ marginLeft: '5px' }}>676/1 Colombo - galle main Rd,Panandura</span>
               </p>
                   <p className="footer-contact-text text-dark contact-item">
                  <i className="bi bi-telephone" style={{ fontSize: '0.70rem' }}></i> {/* Phone icon */}
                   <span style={{ marginLeft: '5px' }}>(+94)77 479 5371</span>
                  </p>
               <p className="footer-contact-text text-dark contact-item d-flex align-items-center">
                   <i className="bi bi-envelope" style={{ fontSize: '0.70rem' }}></i> {/* Email icon */}
                   <span style={{ marginLeft: '5px'}}>gamagerecruiters@gmail.com</span>
                   </p>
              </div>


      </div>
    </div>

    {/* Bottom part for copyright */}
    <div className="mt-1 fs-6 fs-md-5 d-none d-md-block" style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      backgroundColor: '#7a7a7a',
      color: '#ffffff',
      padding: '1px 0',
      margin: '0',
    }}>
      <p className="text-white mb-0" style={{ paddingBottom: '0', marginBottom: '0' }}>&copy; 2024 Gamage Recruiters. All rights reserved.</p>
    </div>
  </div>
</footer>
</div>


  )
}
