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

function App() {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <Grid placeItems="center" minHeight="100vh">
            <Box>
                <Heading as="h1" size="4xl" noOfLines={1}>
                    Recipe App
                </Heading>
                <Stack align={"center"}>
                    <Button onClick={onOpen}>Add New Recipe</Button>
                </Stack>
                <NewRecipe isOpen={isOpen} onClose={onClose} />
            </Box>
            <RecipeCard />
        </Grid>
    );
}

export default App;
