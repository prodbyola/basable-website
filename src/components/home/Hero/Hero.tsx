import React from 'react';
import './Hero.scss';
import backgroundPattern from './assets/Background-pattern.svg';
import dashboard from './assets/dashboard.svg';
import table from './assets/table.svg';
import profileBar from './assets/profile-bar.svg';
import vUp from './assets/v-up.svg';
import vDown from './assets/v-down.svg';
import colorBar from './assets/Vector.svg';

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div
        className="grid-pattern"
        style={{ backgroundImage: `url(${backgroundPattern.src})` }}
      ></div>
      <img src={colorBar.src} alt="Color Bar" className="color-bar-image" />
      <div className="hero-content">
        <h1>
          <span className="highlight">Unleash</span>{' '}
          <span>
            the Power <br /> of Your Data
          </span>
        </h1>
        <p>
          Open-source data management, visualization, and business insights for
          everyone.
        </p>
        <button className="btn primary-btn">Join Waiting List</button>
      </div>
      <div className="hero-image">
        <img src={dashboard.src} alt="Dashboard" className="dashboard-image" />
        <img src={table.src} alt="Table" className="table-image" />
        <img src={profileBar.src} alt="Profile Bar" className="profile-bar-image" />
        <img src={vDown.src} alt="Visualize Bar Down" className="v-down-image" />
        <img src={vUp.src} alt="Visualize Bar Up" className="v-up-image" />
      </div>
    </section>
  );
};

export default Hero;
