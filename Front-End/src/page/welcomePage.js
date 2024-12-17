import React from 'react'
import '../css/welcomePage.css'

export default function welcomePage() {
  const handleSignIn = () => {
    window.location.href = '/login';
  };
  return (
    <div
    style={{
        minHeight: '100vh', // Ensure the height takes up at least the full viewport height
        backgroundImage: 'url(./welcome.jpg)', // Set the background image
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundPosition: 'center', // Center the image
        backgroundAttachment: 'fixed', // Keep the background fixed while scrolling
       // filter: 'brightness(0.7)',
        //color: 'white', // Optional: text color for visibility
        display: 'flex', // Flexbox for centering content
     //   justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
      }}
      onClick={handleSignIn}
    > 
    <div 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0, 0.5)',
      
    }}
  />
 

 <div className="container">
        <div className="row justify-content-start">
         
          <div className="col-12 col-md-6 col-lg-4">
  <div className="card"style={{ 
  backgroundColor: 'white', 
  borderTopRightRadius: '20px',  // Curving the top-left corner
  borderBottomRightRadius: '20px',  // Curving the bottom-right corner
  backgroundColor: 'rgba(255, 255, 255, 0.4)',  // Light overlay effect
  padding: '23px' , // Optional: padding inside the card
  width:'350px',
  height:'360px',
  borderTopLeftRadius:'0px',
  borderBottomLeftRadius:'0px'
  
}}>
    <div className="card-body">
    <h5 className="card-title" style={{color:'white' , fontFamily:" 'Suez One','serif'", fontSize: "40px", fontWeight: "bold"}}>
  Welcome!
</h5>
      <p className="card-text fs-6"  style={{color:'white' , fontFamily:" 'Cabin',''", fontSize: "20px", marginTop:'30px'}}>We're here to offer excellent services and provide the support you need.</p>
      <button type="button" className="btn" style={{ backgroundColor: '#24757e', color: 'white', marginTop:'50px' , width:"100px" }}>SIGN IN</button>

 </div>
 </div>
 </div>
  </div>
  </div>
 
  </div>
  )
}
