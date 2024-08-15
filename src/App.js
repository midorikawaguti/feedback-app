import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import FeedbackData from './data/FeedbackData'
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'

function App(){
    
const [feedback, setFeedback] = useState(FeedbackData)
const [reverse, setReverse] = useState(false)

const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter((item)=> item.id !== id))
    }
}

const changeColors = () =>{
    setReverse((prev) => !prev);
}

const addFeedback = (newFeedback) => {
    newFeedback.id = +uuidv4()
    setFeedback([newFeedback,...feedback])

}


    return (
        <>
            <Header handleReverse={changeColors}/>
            <div className="container">
            <FeedbackForm reverse={reverse} handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback}
            reverse={reverse}/>
            </div>
        </>
    ) 
}
export default App