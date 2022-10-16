import React from 'react'
import PropTypes from 'prop-types'
export const GifItem = ({id,title,img,handleEliminate}) => {
   
  return (
    <div className='card'>
        <img src={ img } alt='imagen'></img>
        <p>{title}</p>
        <button onClick={(e)=>handleEliminate(id)}>Eliminar</button>
    </div>
  )
}

 GifItem.propTypes = {
   title: PropTypes.string.isRequired,
   img  : PropTypes.string.isRequired,
 }