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

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
export function NewRecipe(props: ModalProps) {
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted", newRecipe);
    };

    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}>
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
                            </FormControl>
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
