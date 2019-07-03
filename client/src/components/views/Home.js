import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/testio-logo-light.png';
import './Home.scss';

const Home = () => {
  return (
    <div className="Home view">
      <img src={logo} alt="logo" />
      <Link to="/servers" className="button-green">servers</Link>
    </div>
  )
}

export default Home;