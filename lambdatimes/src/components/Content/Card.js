import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';





const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here  -> */props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={ props.card.img} alt={props.card.author} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
 card: PropTypes.object,
 tab: PropTypes.string, 
 headline: PropTypes.string,
 img: PropTypes.string,
 author: PropTypes.string
};

export default Card;
