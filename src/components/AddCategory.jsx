import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    };

    const handleSubmitInput = (e) => { 
        e.preventDefault();

        const newCategory = inputValue.trim();
        
        if(newCategory.length <= 0) return;

        onNewCategory(newCategory);

        // setCategories(categories => [inputValue, ...categories]);

        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmitInput}>
            <input
                type="text"
                placeholder="Buscar gifs"
                onChange={handleInputChange}
                value={inputValue}
            />
        </form>
    )
}
