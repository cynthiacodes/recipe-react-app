import axios from "axios";
import { apiBaseURL } from "./apiBaseUrl";
import { useEffect } from "react";
export function RecipeCard(): JSX.Element {
    async function getAllRecipes() {
        const response = await axios.get(`${apiBaseURL}/recipes`);
        const allRecipes = response.data;
        console.log(allRecipes);
    }
    useEffect(() => {
        getAllRecipes();
    }, []);
    return (
        <>
            <h1>Recipe card</h1>
        </>
    );
}
