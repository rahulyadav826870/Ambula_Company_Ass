import React from "react";
import Navbar from "../Navbar/Navbar";
import Todo from "../Todo/Todo";
import "./Home.css"

export default function Home() {
  return( 
  <>
  <Navbar />
  {/* <Todo /> */}
  
  <div className="main_container">
    <div className="logo">

    <img src="https://ambula.app/assets/images/Icon.png" alt="ambul_logo" />
    </div>
    <h2>Welcome To Our Website</h2>
    <div className="home-content">
    <p  className="home-text">At Ambula, we are deeply committed to the belief that every person deserves access to high-quality healthcare services. We believe in a democratic approach to health, and through the use of technology, we strive to make emergency and trauma care assistance more transparent, easily accessible, and user-friendly for all individuals in India. By bridging the communication gap in healthcare delivery, we hope to empower individuals to take control of their health and well-being.</p>
    </div>
    
  </div>
  </>

  )
}
