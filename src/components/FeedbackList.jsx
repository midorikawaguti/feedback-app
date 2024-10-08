import React from 'react'
import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ reverse }) {

  const{feedback, isLoading} = useContext(FeedbackContext)

if(!isLoading && (!feedback || feedback.length === 0)){
    return <p>No feedback yet.</p>
}

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} reverse={reverse}/>
  //     ))}
  //   </div>
  // )

  return isLoading ? <Spinner/> : 
  (<div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
          key={item.id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity: 0}}>
              <FeedbackItem item={item} reverse={reverse}/>
          </motion.div>
      ))}
      </AnimatePresence>
    </div>)
}


export default FeedbackList
