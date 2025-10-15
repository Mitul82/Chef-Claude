function IngredientList(props) {
        const ingredientsListItems = props.ingredients.map(ingredient => 
        <li key={ ingredient }>{ ingredient }</li>
    );

    const GetRecipe = () => {
        return(
            <div className="get-recipe-container">
                <div ref={ props.ref }>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={ props.getRecepie }>Get a recipe</button>
            </div>
        );
    }

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ ingredientsListItems }</ul>
            {props.ingredients.length > 3 ? <GetRecipe/> : null }
        </section>
    );
}

export default IngredientList;