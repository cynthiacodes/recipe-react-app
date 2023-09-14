import { Heading } from "@chakra-ui/react";
import "./App.css";
import { RecipeCard } from "./RecipeCard";

function App() {
    return (
        <div className="App">
            <Heading as="h1" size="4xl" noOfLines={1}>
                Cynthia's Recipe App
            </Heading>
            <RecipeCard />
        </div>
    );
}

export default App;
