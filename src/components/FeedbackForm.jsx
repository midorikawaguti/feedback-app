import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'


function FeedbackForm( {reverse} ) {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

  return (
    <Card reverse={reverse} >
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className='input-group'>
            <input
            onChange={handleTextChange}
            typr='text'
            placeholder='Write a review'
            value = {text}
            />
            <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
