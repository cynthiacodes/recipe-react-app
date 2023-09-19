import { useState } from "react";
import { Recipe } from "./Interface";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";
import React from "react";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

export function NewRecipe() {
    const [newRecipe, setNewRecipe] = useState<Recipe>({
        title: "",
        meal_type: "",
        cuisine: "",
        video_url: "",
    });

    const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;

        setNewRecipe({
            ...newRecipe,
            [e.target.name]: input,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(newRecipe);
    };

    return (
        <form onChange={handleSubmit}>
            <FormControl isRequired>
                <FormLabel>Add New Recipe</FormLabel>
                <Input
                    placeholder="Recipe name"
                    name="title"
                    value={newRecipe.title}
                    onChange={handleFormInput}
                />
            </FormControl>
            <Select
                placeholder="Select Meal Type"
                name="meal_type"
                value={newRecipe.meal_type}
            >
                {mealTypes.map((mealtype, index) => (
                    <option key={index}>{mealtype}</option>
                ))}
            </Select>
            <FormControl isRequired>
                <Input
                    placeholder="Cuisine"
                    name="cuisine"
                    value={newRecipe.cuisine}
                    onChange={handleFormInput}
                />
            </FormControl>
            <FormControl isRequired>
                <Input
                    placeholder="Video Url"
                    name="video_url"
                    value={newRecipe.video_url}
                    onChange={handleFormInput}
                />
            </FormControl>
            <Button type="submit" mt={4} colorScheme="teal">
                Submit
            </Button>
        </form>
    );
}
