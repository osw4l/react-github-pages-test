import { useState } from "react";
import React from "react";
import Proptypes from "prop-types";


export const AddCategory = ({ setCategories }) => {
    const  [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    };

    return (
       <form onSubmit={ handleSubmit }>
           <input
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }
            />
       </form>
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
};