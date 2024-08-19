import React from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({ feedback, handleDelete, reverse }) {
if(!feedback || feedback.length === 0){
    return <p>No feedback yet.</p>
}

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} reverse={reverse}/>
  //     ))}
  //   </div>
  // )

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity: 0}}>
              <FeedbackItem item={item} handleDelete={handleDelete} reverse={reverse}/>
          </motion.div>
      ))}
      </AnimatePresence>
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  reverse: PropTypes.bool,
}

export default FeedbackList
