import React from 'react';
import PropTypes from 'prop-types'


function Card({children,reverse}) {

//   return <div className={`card ${ reverse && 'reverse'}`}>{children}</div>;
   return (
 
     <div className="card_one"
     
      style={{backgroundColor: reverse ? '' : '',
     
        color: reverse ? '#ffff':'#000',
        
    }}
     
     >{children}</div>

   )

}

Card.defaultProps = {

 reverse: false,

}
Card.propTypes = {

  children: PropTypes.node.isRequired,
  reverse:PropTypes.bool,

}


export default Card;
