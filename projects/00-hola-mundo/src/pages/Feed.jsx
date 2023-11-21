import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser';
import RecipeComponent from '../components/RecipeComponent';
import './Feed.css';
import { BiSolidBookHeart } from "react-icons/bi";
import { FaSearch, FaUser } from "react-icons/fa";

const Feed = () => {
    //user state from useUser hook to check if user is logged in
    //and to get user data like if the recipe is liked or not
    //to get if the recipe is liked or not we need to make a call to the API
    //and check if the recipe is in the user liked recipes array
    //then we can pass the liked state to the RecipeComponent
    const { user } = useUser();

    //sample recipes for testing
    const recipes = [
        {
            title: 'Brownie',
            description: 'Chocolate brownie',
            imgSrc: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
            isLiked: true
        },
        {
            title: 'Brownie',
            description: 'Chocolate brownie',
            imgSrc: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
            isLiked: true
        },
        {
            title: 'Brownie',
            description: 'Chocolate brownie',
            imgSrc: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
            isLiked: true
        },
        {
            title: 'Brownie',
            description: 'Chocolate brownie',
            imgSrc: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
            isLiked: true
        },
    ];

    // const [recipes, setRecipes] = useState(null);
   
    // useEffect(() => {
    //     this function can be loaded from a service file or from a hook
    //     const getRecipes = async () => {
    //         get url from .env file
    //         const url = import.meta.env.VITE_API_URL
    //         const response = await axios.get( url + '/recipes').then((response) => {
    //             setRecipes(response.data);
    //         })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }
    //     getRecipes();
    // }, [setRecipes]);

    return (
        <>
            <div className='flex w-full mt-5 h-full'>
                <div className='feed-buttons-container xl:w-1/3 xl:flex xl:flex-col xl:h-fit xl:justify-center xl:gap-5 hidden'>
                    <button className='feed-button flex flex-row w-3/4 mx-auto p-2 items-center justify-center rounded-2xl'><BiSolidBookHeart className='misRecetasIcon w-20 h-auto ml-8 text-yellow-500'/><h1 className=' text-white w-2/3 text-4xl mx-3'><strong><i>Mis Recetas</i></strong></h1></button>
                    <button className='feed-button flex flex-row w-3/4 mx-auto p-2 items-center justify-center rounded-2xl'><FaSearch className='busquedaIcon w-20 h-auto  ml-8 text-yellow-500' /><h1 className=' text-white text-4xl w-2/3 mx-3'><strong><i>Buscar</i></strong></h1></button>
                    <button className='feed-button flex flex-row w-3/4 mx-auto p-2 items-center justify-center rounded-2xl'><FaUser className='usuarioIcon w-20 h-auto  ml-8 text-yellow-500' /><h1 className=' text-white text-4xl w-2/3 mx-3'><strong><i>Cuenta</i></strong></h1></button>
                </div>
                <div className="recipes-container sm:w-1/2 xl:w-1/3 sm:flex sm:flex-col gap-7 w-full overflow-y-scroll h-screen no-scrollbar">
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
                <div className='feed-buttons-container sm:w-1/2 xl:w-1/3 sm:flex sm:flex-col sm:h-fit hidden'>
                    
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Feed;
