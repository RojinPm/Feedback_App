import React from 'react';
import { FaTimes, FaEdit} from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { useContext } from 'react'

import FeedbackContext from '../Context/FeedbackContext';

 
function FeedbackItem({ item }) {

 const {deleteFeedback, editFeedback } = useContext(FeedbackContext)

// const handleClick = () =>{
// setRating((previous) => {
//    console.log(previous)
//     return previous + 1
// });

    return (
  
               <Card>

                   <div className="num-display">{item.rating}</div> 
                    <button onClick={() => deleteFeedback(item.id)} className="close">
                    <FaTimes color='yellow' />
                    </button>
                    <button onClick={() => editFeedback(item)} className="edit">

                      <FaEdit color='yellow' />

                     </button>

                    <div className="text-display">{item.text}</div>
                   
               </Card>
            
   )


}

FeedbackItem.propTypes = {
 
 item: PropTypes.object.isRequired,
 

}




export default FeedbackItem;

