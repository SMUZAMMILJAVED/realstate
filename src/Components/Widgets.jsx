import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <footer className="footer">
            <div className="footer-section footer-left">
                <img src="logo.png" alt="Logo" className="footer-logo" />
                <p>CALL: 555-555-9855</p>
                <p>EMAIL: INFO@PLUMBUILDERS.COM</p>
                <p>MAIN SLAB SHOWROOM:</p>
                <p>106 PURDY AVE.</p>
                <p>PORT CHESTER, NY, 10573</p>
                <p>FACTORY LOCATION:</p>
                <p>28 NURSERY LANE,</p>
                <p>RYE, NY, 10580</p>
                <div className="footer-privacy">
                    <a href="#">PRIVACY POLICY</a>
                    <a href="#">TERMS AND CONDITIONS</a>
                </div>
            </div>
            <div className="footer-section">
                <h4>DESIGN ASSISTANCE</h4>
                <ul>
                    <li><a href="#">MEASUREMENTS</a></li>
                    <li><a href="#">FREE DESIGN GUIDE</a></li>
                    <li><a href="#">DESIGN CONSULTATION</a></li>
                    <li><a href="#">VISUALIZER</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>ABOUT US</h4>
                <ul>
                    <li><a href="#">WHO WE ARE</a></li>
                    <li><a href="#">WHAT WE DO</a></li>
                    <li><a href="#">HOW WE DO IT</a></li>
                    <li><a href="#">SHOWROOM</a></li>
                    <li><a href="#">TRADE PROFESSIONALS</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>COMPANY INFO</h4>
                <ul>
                    <li><a href="#">FINANCING</a></li>
                    <li><a href="#">CAREERS</a></li>
                    <li><a href="#">MADE IN USA</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">RESOURCES</a></li>
                </ul>
            </div>
            <div className="footer-social">
                <a href="#">FACEBOOK</a>
                <a href="#">INSTAGRAM</a>
            </div>
            <p className="footer-copyright">© 2023 PLUM BUILDERS. ALL RIGHTS RESERVED. POWERED BY XYZ</p>
        </footer>
    );
}

export default Widgets;
