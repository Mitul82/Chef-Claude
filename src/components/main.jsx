import React from 'react';
import Recepie from './clauderecepie';
import IngredientList from './ingredients';
import getRecipeFromMistral from './ai.js';

function Main() {
    const [ ingredients, setIngredients ] = React.useState([]);

    const [ recepie, setRecepie ] = React.useState("");

    const recepieSection = React.useRef(null);

    React.useEffect(() => {
        if (recepie && recepieSection.current != null) {
            recepieSection.current.scrollIntoView({behavior: "smooth"});
        }
    }, [ recepie ]);

    const handleSubmit = (formData) => {
        const newIngredient = formData.get('ingredient');
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    const getRecepie = async () => {
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients);
            setRecepie(recipeMarkdown);
        } catch(error) {
            console.log(error);
        }
    }
    
    return (
        <main>
            <form action={ handleSubmit } className='add-ingredient-form'>
                <input
                    type='text'
                    placeholder='e.g. Milk'
                    aria-label='Add Ingredient'
                    name='ingredient'
                />
                <button type='submit'>Add Ingredient</button>
            </form>
            { ingredients.length ? 
                <IngredientList 
                    ingredients={ ingredients }
                    getRecepie={ getRecepie }
                    ref={ recepieSection }
                /> : null }
            { recepie ? <Recepie recipe={ recepie }/> : null }
        </main>
    );
}

export default Main;