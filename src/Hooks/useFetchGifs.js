import  { useEffect, useState } from 'react'
import { getGifs } from '../Helpers/getGifs';

export const useFetchGifs = (category) => {
    const [image, setImage] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImage = async() => {
       const imagen = await  getGifs(category);
       setImage(imagen);
       setIsLoading(false)

    
    }
    
    useEffect(() => {
        getImage()
    }, [])
    
    const handleEliminate = (id) => {
     setImage(image.filter(g=>g.id!==id))
     
    }
  return {
    images:image,
    isLoading:isLoading,
    handleEliminate:handleEliminate
  }
}
 
