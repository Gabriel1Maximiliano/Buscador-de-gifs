import React, {  useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({handleAddCatgories}) => {
    const [value, setValue] = useState('');

    const handleInputChange = ({target}) => {
      setValue(target.value);
    }
    
    const handleSubmit =(e) => {
  let reGex= /[a-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ0-9]/
        if(value.trim().length <= 1) return alert('Inserte un nombre');
        if(!reGex.test(value)) return alert('Caracteres inválidos')
        e.preventDefault();
        handleAddCatgories(value)
       // setCategories((categories)=>[...categories,value])
        setValue('')
    }
  return (
   <form onSubmit={handleSubmit} aria-label='form' >
        <input
        type='text'
        placeholder='buscar gifs'
        value={value}
        onChange={handleInputChange}
        />
    </form>
  )
}

AddCategory.propTypes ={
  handleAddCatgories: PropTypes.func.isRequired
}