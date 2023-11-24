import axios from 'axios';
// const url = import.meta.env.VITE_API_URL;
//test url for local host
const url = 'http://localhost:3000/api';

export const likeRecipe = async (recipeId, userId) => {
    //call to the API with axios with url from dotenv
    const response = await axios.patch(`${url}/recipes/like/${recipeId}/${userId}`);
    return response.data;
}

export const unlikeRecipe = async (recipeId, userId) => {
    //call to the API with axios with url from dotenv
    const response = await axios.patch(`${url}/recipes/unlike/${recipeId}/${userId}`);
    return response.data;
}

export const getLikes = async (userId) => {
    // call to the api with axios to new endpoint who gets data from tr table
    const response = await axios.get(`${url}/recipes/liked/${userId}`);
    console.log(response.data);
    return response.data;
}