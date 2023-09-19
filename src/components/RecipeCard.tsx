import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { RecipeWithId } from "./Interface";
import { apiBaseUrl } from "./apiBaseUrl";

export function RecipeCard(): JSX.Element {
    const [recipes, setRecipes] = useState<RecipeWithId[]>([]);
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

    const handleVideoUrl = (videoUrl: string) => {
        window.open(videoUrl);
    };
    const maxCardWidth = useBreakpointValue({ base: "sm", md: "md", lg: "xl" });
    const recipeCards = recipes.map((recipe) => (
        <Card maxW={maxCardWidth} key={recipe.id}>
            <CardBody>
                <Stack mt="6" spacing="3">
                    <Heading size="md">{recipe.title}</Heading>
                    <Text>{recipe.meal_type}</Text>
                    <Text color="teal.600" fontSize="xl">
                        {recipe.cuisine}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Button
                        variant="link"
                        colorScheme="teal"
                        onClick={() => handleVideoUrl(recipe.video_url)}
                    >
                        Tutorial
                    </Button>
                    <Button variant="ghost" colorScheme="teal" px={2} mx={1}>
                        Edit
                    </Button>
                    <Button variant="ghost" colorScheme="teal" px={2} mx={1}>
                        Delete
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    ));
    return (
        <>
            <SimpleGrid
                spacing={4}
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            >
                {recipeCards}
            </SimpleGrid>
        </>
    );
}
