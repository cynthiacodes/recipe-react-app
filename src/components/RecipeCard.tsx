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
import { RecipeWithId } from "./Interface";
import { apiBaseUrl } from "./apiBaseUrl";

interface RecipeCardProps {
    recipes: RecipeWithId[];
    getAllRecipes(): Promise<void>;
}
export function RecipeCard({
    recipes,
    getAllRecipes,
}: RecipeCardProps): JSX.Element {
    const handleVideoUrl = (videoUrl: string) => {
        window.open(videoUrl);
    };

    const handleDelete = async (recipeId: number) => {
        try {
            const response = await axios.delete(
                `${apiBaseUrl}/recipes/${recipeId}`
            );
            getAllRecipes();
            console.log("Deleted recipe", response.data);
        } catch (error) {
            console.error(error);
        }
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
                    <Button
                        variant="ghost"
                        colorScheme="teal"
                        px={2}
                        mx={1}
                        onClick={() => handleDelete(recipe.id)}
                    >
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
