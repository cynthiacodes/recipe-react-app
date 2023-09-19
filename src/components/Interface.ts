export interface Recipe {
    title: string;
    meal_type: string;
    cuisine: string;
    video_url: string;
}
export interface RecipeWithId extends Recipe {
    id: number;
}
