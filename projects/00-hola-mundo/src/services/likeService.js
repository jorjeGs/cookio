import axios from 'axios';

export const likeRecipe = (recipeId, userId) => {
    //call to the API with axios with url from dotenv
    return axios.path(`${process.env.REACT_APP_API_URL}/recipes/like/${recipeId}/${userId}`)
        .then(response => {
            return response.likes;
        }
    )
}

export const unlikeRecipe = (recipeId, userId) => {
    //call to the API with axios with url from dotenv
    return axios.path(`${process.env.REACT_APP_API_URL}/recipes/unlike/${recipeId}/${userId}`)
        .then(response => {
            return response.likes;
        }
    )
}