import { Box, Button, Grid, Heading, Stack } from "@chakra-ui/react";
import "./App.css";
import { RecipeCard } from "./RecipeCard";

function App() {
    return (
        <Grid placeItems="center" minHeight="100vh">
            <Box>
                <Heading as="h1" size="4xl" noOfLines={1}>
                    Recipe App
                </Heading>
                <Stack align={"center"}>
                    <Button>Add New Recipe</Button>
                </Stack>
            </Box>
            <RecipeCard />
        </Grid>
    );
}

export default App;
