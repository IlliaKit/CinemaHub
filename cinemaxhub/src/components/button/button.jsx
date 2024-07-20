import React from 'react'
import PropTypes from 'prop-types'

const button = props => {
  return (
    <button 
            className={`btn ${props.className}`} 
            onClick={props.onClick ? () => props.onClick() : null}>
      {props.children}
    </button>
  )
}


const OutlineButton = props => {
    return(
        <Button 
            className={`btn-outline ${props.className}`} 
            onClick={props.onClick ? () => props.onClick() : null}
        >

        </Button>
    )
}

button.propTypes = {
    onClick: PropTypes.func
}

export default button
