import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser';
import RecipeComponent from '../components/RecipeComponent';
import './Feed.css';

const Feed = () => {
    //user state from useUser hook to check if user is logged in
    //and to get user data like if the recipe is liked or not
    //to get if the recipe is liked or not we need to make a call to the API
    //and check if the recipe is in the user liked recipes array
    //then we can pass the liked state to the RecipeComponent
    const { user } = useUser();
    const [recipes, setRecipes] = useState(null);
   
    useEffect(() => {
        //this function can be loaded from a service file or from a hook
        const getRecipes = async () => {
            //get url from .env file
            const url = import.meta.env.VITE_API_URL
            const response = await axios.get( url + '/recipes').then((response) => {
                setRecipes(response.data);
            })
                .catch((error) => {
                    console.log(error);
                });
        }
        getRecipes();
    }, [setRecipes]);

    return (
        <>
            <div className='feed-container flex mt-5'>
                <div className='feed-buttons-container flex flex-col w-1/3 '>
                    <button className='feed-button'>All</button>
                    <button className='feed-button'>Liked</button>
                    <button className='feed-button'>My Recipes</button>
                </div>
                <div className="recipes-container flex flex-col w-1/3 justify-center items-center">
                    {
                        //if recipes is null show loading
                        recipes === null ? <p className='text-white'>Loading...</p> :
                        recipes.map((recipe, index) => {
                            return (
                                <RecipeComponent
                                    key={index}
                                    title={recipe.title}
                                    description={recipe.description}
                                />
                            );
                        })
                    }
                </div>
                <div className='feed-buttons-container flex flex-col w-1/3'>
                    <button className='feed-button'>All</button>
                    <button className='feed-button'>Liked</button>
                    <button className='feed-button'>My Recipes</button>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Feed;
