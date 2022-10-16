import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
 
     const handleAddCatgories = (e) => {
    if(categories.includes(e)){
        return;
    }else{

        setCategories(
           [e,...categories]
          )
    }
        
     }
   
  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory  
    handleAddCatgories={ handleAddCatgories } 
    />
   
    
   {
    categories.map((c)=>{
        return (
            <GifGrid key={c}  category={c}/>
        )
    })
   }
   
    </>
  )
}
