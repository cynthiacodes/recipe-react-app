import {
    Box,
    Button,
    Grid,
    Heading,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import "./App.css";
import { NewRecipe } from "./NewRecipe";
import { RecipeCard } from "./RecipeCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { RecipeWithId } from "./Interface";
import { apiBaseUrl } from "./apiBaseUrl";

function App() {
    const [recipes, setRecipes] = useState<RecipeWithId[]>([]);
    const { isOpen, onClose, onOpen } = useDisclosure();
    async function getAllRecipes() {
        try {
            const response = await axios.get(apiBaseUrl + "/recipes");
            const allRecipes = response.data;
            setRecipes(allRecipes);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getAllRecipes();
    }, []);

    return (
        <Grid placeItems="center" minHeight="100vh">
            <Box>
                <Heading as="h1" size="4xl" noOfLines={1}>
                    Recipe App
                </Heading>
                <Stack align={"center"}>
                    <Button onClick={onOpen}>Add New Recipe</Button>
                </Stack>
                <NewRecipe
                    isOpen={isOpen}
                    onClose={onClose}
                    getAllRecipes={getAllRecipes}
                />
            </Box>
            <RecipeCard getAllRecipes={getAllRecipes} recipes={recipes} />
        </Grid>
    );
}

export default App;
