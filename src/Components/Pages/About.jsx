import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="container1">
        <div className="left_side">
          <h2>About Ambula</h2>
          <p>
            Ambula is an App based on UHI(Unified Health Interface) popularly
            known as 'Ayushman Bharat Digital Mission' envisioned by our
            honourable Prime Minister which connects patients live with the
            unified health network across India for all healthcare needs. Ambula
            is committed to bridge all the communication gaps prevalent in
            healthcare delivery and Ambula will impart it's contribution to this
            Noble Vision. We are always available there for you if you find any
            discomfort of health. Your trust empowers us to serve you more.
          </p>
        </div>

        <div className="right_side">
          <div className="term_condition">
            <span className="number">5.0</span>
            <h5>Review average at our Google profile</h5>
          </div>

          <p>Our viewers have shown enormous trust in our product</p>

          <div className="term_condition">
            <span className="number">24*7</span>
            <h5>live online connectivity</h5>
          </div>

          <p>
            Get to know available live healthcare services near you all the
            time.
          </p>

          <div className="term_condition">
            <span className="number">₹0.00</span>
            <h5>everything is FREE</h5>
          </div>

          <p>No Cost Engagement</p>
        </div>
      </div>
    </>
  );
}
