"use client";
import React from 'react';
import './indicator.css';
import Image from 'next/image';
import profile1 from '../../../public/assests/man.png';
const PerformanceDashboard = () => {
  return (
    <div className="performance-dashboard">
      {/* Background Pattern */}
      <div className="background-pattern"></div>
      
      <div className="container">
        <div className="content-wrapper">
          {/* Left Section */}
          <div className="left-section">
            <div className="indicator-badge">
              <span className="indicator-dot"></span>
              Indicator
              <span className="indicator-dot"></span>
            </div>
            
            <h1 className="main-heading">
              We are proud to have<br />
              strong<br />
              <span className="highlight">Performance indicators.</span>
            </h1>
            
            <div className="rating-section">
              <div className="profile-images">
                <Image src={profile1} alt="Profile 1" className="profile-img" />
                <img src="/api/placeholder/32/32" alt="Profile 2" className="profile-img" />
              </div>
              <div className="rating-info">
                <div className="stars">
                  <span className="rating-number">4.9/5</span>
                  <div className="star-icons">
                    {'★★★★★'.split('').map((star, index) => (
                      <span key={index} className="star">{star}</span>
                    ))}
                  </div>
                </div>
                <p className="rating-text">Based on 24 reviews on Clutch</p>
              </div>
            </div>
          </div>
          
          <div className="right-section">
            <div className="metrics-grid">
              <div className="metric-card blue">
                <h2 className="metric-value">11.5M+</h2>
                <p className="metric-label">Clients Revenue</p>
              </div>
              
              <div className="metric-card light-blue">
                <h2 className="metric-value">21.9M+</h2>
                <p className="metric-label">Profit Increase</p>
              </div>
              
              <div className="metric-card pink">
                <h2 className="metric-value">21.9M+</h2>
                <p className="metric-label">Transactions Recorded</p>
              </div>
              
              <div className="metric-card purple">
                <h2 className="metric-value">300+</h2>
                <p className="metric-label">Cost Reduction</p>
              </div>
              
              <div className="metric-card purple-pink full-width">
                <h2 className="metric-value">300+</h2>
                <p className="metric-label">Revenue Increase</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Text */}
        <div className="bottom-text">
          <p>Your preferred ERP for stone and marble companies in South Florida</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
