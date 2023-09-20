import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Recipe } from "./Interface";
import { apiBaseUrl } from "./apiBaseUrl";
import axios from "axios";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

interface NewRecipeProps {
    isOpen: boolean;
    onClose: () => void;
    getAllRecipes(): Promise<void>;
}
export function NewRecipe({ isOpen, onClose, getAllRecipes }: NewRecipeProps) {
    const [newRecipe, setNewRecipe] = useState<Recipe>({
        title: "",
        meal_type: "",
        cuisine: "",
        video_url: "",
    });

    const handleFormInput = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        const input = e.target.value;

        setNewRecipe({
            ...newRecipe,
            [e.target.name]: input,
        });
        console.log("Form Input", newRecipe);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("The recipe has been submitted 🍽");
        const newRecipeData: Recipe = {
            title: newRecipe.title,
            meal_type: newRecipe.meal_type,
            cuisine: newRecipe.cuisine,
            video_url: newRecipe.video_url,
        };
        await axios.post(`${apiBaseUrl}/recipes`, newRecipeData);
        getAllRecipes();
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody>
                        <form id="new-recipe" onSubmit={handleSubmit}>
                            <FormControl isRequired>
                                <FormLabel>Add New Recipe</FormLabel>
                                <Input
                                    placeholder="Recipe name"
                                    name="title"
                                    value={newRecipe.title}
                                    onChange={handleFormInput}
                                />

                                <Select
                                    placeholder="Select Meal Type"
                                    name="meal_type"
                                    value={newRecipe.meal_type}
                                    onChange={handleFormInput}
                                >
                                    {mealTypes.map((mealtype, index) => (
                                        <option key={index}>{mealtype}</option>
                                    ))}
                                </Select>

                                <Input
                                    placeholder="Cuisine"
                                    name="cuisine"
                                    value={newRecipe.cuisine}
                                    onChange={handleFormInput}
                                />

                                <Input
                                    placeholder="Video Url"
                                    name="video_url"
                                    value={newRecipe.video_url}
                                    onChange={handleFormInput}
                                />
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            form="new-recipe"
                            type="submit"
                            mt={4}
                            colorScheme="teal"
                        >
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
