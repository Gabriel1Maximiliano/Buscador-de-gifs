import React from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import {GifItem} from './GifItem';
import PropTypes from 'prop-types';
export const GifGrid = ({ category }) => {

    
const {images,isLoading,handleEliminate}=useFetchGifs(category);
 




    return (
        <div key={category}>

            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
    <div className='card-grid'>     
 {
      images.map(i=>{
        return(
            <GifItem 
               key={i.id}
               {...i}
               handleEliminate={handleEliminate}
            />
        )
      })
 }
  </div>
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}