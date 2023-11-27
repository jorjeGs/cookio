import axios from "axios";
const url = import.meta.env.VITE_API_URL;

export const getUserRecipes = async (userId) => {
    //call to the api to get recipes liked by the user
    //return array of recipes to us in myRecipes page
}

export const getAllRecipes = async () => {
    //call to the api to get all recipes using axios and dotenv
    try {
        const response = await axios.get(url + '/recipes');
        return response.data;
    }
    catch(error) {
        console.log(error);
    }
}