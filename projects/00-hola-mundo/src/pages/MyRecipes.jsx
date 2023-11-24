import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser';
import RecipeComponent from '../components/RecipeComponent';
import './Feed.css';
import { BiSolidBookHeart } from "react-icons/bi";
import { FaSearch, FaUser } from "react-icons/fa";

const MyRecipes = () => {
    //by userprovider to get liked recipes,
    const { user } = useUser();

    //sample recipes for testing
    const recipes = [
        {
            title: 'Brownie saved',
            description: 'Chocolate brownie',
            imgSrc: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
            initialIsLiked: true
        },
        {
            title: 'Brownie saved',
            description: 'Chocolate brownie',
            imgSrc: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
            initialIsLiked: true
        },
        {
            title: 'Brownie saved',
            description: 'Chocolate brownie',
            imgSrc: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
            initialIsLiked: true
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
                    <Link to='/home/recipes'>
                        <button className='feed-button flex flex-row w-3/4 mx-auto p-2 items-center justify-center rounded-2xl'><BiSolidBookHeart className='misRecetasIcon w-20 h-auto ml-8 text-yellow-500'/><h1 className=' text-white w-2/3 text-4xl mx-3'><strong><i>Mis Recetas</i></strong></h1></button>
                    </Link>
                    <Link to='/home/search'>
                        <button className='feed-button flex flex-row w-3/4 mx-auto p-2 items-center justify-center rounded-2xl'><FaSearch className='busquedaIcon w-20 h-auto  ml-8 text-yellow-500' /><h1 className=' text-white text-4xl w-2/3 mx-3'><strong><i>Buscar</i></strong></h1></button>
                    </Link>
                    <Link to='/home/profile'>
                        <button className='feed-button flex flex-row w-3/4 mx-auto p-2 items-center justify-center rounded-2xl'><FaUser className='usuarioIcon w-20 h-auto  ml-8 text-yellow-500' /><h1 className=' text-white text-4xl w-2/3 mx-3'><strong><i>Cuenta</i></strong></h1></button>
                    </Link>
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
                                    imgSrc={recipe.imgSrc}
                                />
                            );
                        })
                    }
                </div>
                <div className='feed-buttons-container sm:w-1/2 xl:w-1/3 sm:flex sm:flex-col sm:h-fit hidden'>
                    <h1 className='text-white text-4xl text-center mt-5'><strong><i>Mis Recetas</i></strong></h1>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default MyRecipes;