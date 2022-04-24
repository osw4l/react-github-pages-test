import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    // const categories = ['One punch', 'samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState([]);
    
    /* const handleAdd = () => {
        setCategories([
            ...categories,
            `Item # ${categories.length}`
        ]);
    }; */

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                { 
                    categories.map((category, index) => (
                        <GifGrid 
                            key={index} 
                            category={category}
                         />
                    ))
                }
            </ol>
        </>
    )
};

export default GifExpertApp;