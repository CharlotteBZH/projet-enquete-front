import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
import './style.scss';
import './headBand.scss';
import './buttonNext.scss';
import './text.scss';
import './selection.scss';
import './tag.scss';
import PropTypes from "prop-types";


//import Connexion from '../../containers/Connexion';
//import Menu from '../Menu';

function Game({game}) {
  return (
    <div className="game">
      <h1>Composant Game</h1>
      <Tag {...game}/>
      <Headband {...game} />
    </div>
  );
}

export default Game;


function Tag({tagName}) {
  return (
    <div className="tag">
      <h2>{tagName}</h2>
      <Icon name='user' className='userLogo' />
    </div>
  );
}

function Headband({narration}) {
  return (
    <div className="headband">
      <Text narration={narration}/>
      <Selection />
      <ButtonNext />
    </div>
  );
}

function Text({narration}) {
  return (
    <div className="text">
      <p>{narration}</p>
    </div>
  );
}

function Selection({question}) {
  return (
    <div className="selection">
      <p className="selection_para">{question}</p>
      <p className="selection_para">{question}</p>
      <p className="selection_para">{question}</p>
      <p className="selection_para">{question}</p>
    </div>
  );
}

function ButtonNext() {
  return (
    <div className="buttonNext">
      <Icon circular inverted color='grey' name='play' size='big' /> 
    </div>
  );
}

Tag.propTypes = {
  tagName: PropTypes.string.isRequired
};


Text.propTypes = {
  narration: PropTypes.string.isRequired
};


Selection.propTypes = {
  question: PropTypes.string.isRequired
};

