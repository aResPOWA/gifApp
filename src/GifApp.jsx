import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {

    // useState rastrea el estado de la función y actualiza cuando hay algún cambio en el estado de la función
    const [categories, setCategories] = useState([]);

    // PROHIBIDO PONER CONDINCIONALES A LOS HOOKS !!

    const handleAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gif App</h1>

            <hr /> <br />

            <div className='content-form'>
                <AddCategory
                    onNewCategory = {handleAddCategory} 
                    // setCategories={setCategories} 
                    // categories={categories}
                />

                {/* <button onClick={handleAddCategory}>
                    Agregar categoría
                </button> */}
            </div>

            <div className='grid'>

                {categories.map(category => <GifGrid key={category} category={category} /> )}

            </div>
        </>
    );
}