import React, { useState } from 'react';
import './App.css';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#">Request a Quote</a>
                    <a href="#">Visit Our Showroom</a>
                    <div className="dropdown">
                        <a href="#">Countertops</a>
                        <div className="dropdown-menu">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a href="#">Architectural</a>
                        <div className="dropdown-menu">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                        </div>
                    </div>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>

            <div className="hero-section">
                <div className="hero-content">
                    <h1>ENJOY EVERYDAY LUXURY</h1>
                    <p>It's never been easier to design and achieve your ideal outcome.</p>
                    <button>Request a Quote</button>
                </div>
            </div>
            <div className="h">
                <h1>Start Your Journey</h1>
                <br />
                <p>What Type Of Project Do you have?</p>
                </div>
        </div>
    );
}

export default App;
