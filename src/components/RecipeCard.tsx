import axios from "axios";
import { apiBaseUrl } from "./apiBaseUrl";
import { useEffect } from "react";
export function RecipeCard(): JSX.Element {
    async function getAllRecipes() {
        try {
            const response = await axios.get(apiBaseUrl + "/recipes");
            const allRecipes = response.data;
            console.log(allRecipes);
        } catch (error) {
            console.error(error);
        }
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
