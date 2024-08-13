import React from 'react'
import PropTypes from 'prop-types'
import { MdLightMode } from "react-icons/md";


function Header({text= 'Feedback UI', bgColor= 'rgba(0,0,0)', textColor = '#ff6a95'}) {
  const headerStyles = {
     backgroundColor: bgColor, 
     color:textColor
  }
  
    return (

    <header style={ headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
        <button onClick={() => console.log("light up")}>
          <MdLightMode />
        </button>
        
    </header>   
  )
}



Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header
