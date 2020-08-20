import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';

import Alias from '../../containers/Alias';
import Log from '../../containers/Log';

import PropTypes from "prop-types";


const Home = ({ connected }) => {
  return (
    <div className="home">
      <span className="title-game">
        <h1>Enquête CLUED'O</h1>
      </span>

      <Link to={`/play`} >
        <button
          className="play"
          type="button">
          Jouer
        </button>
      </Link>

      <div className="tolog">
        {connected ? <Alias /> : <Log />}
        {console.log(connected)}
      </div>
    </div>
  );
};

Home.propTypes = {
  connected: PropTypes.bool.isRequired
};


export default Home;
