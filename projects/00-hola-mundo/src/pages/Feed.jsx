import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser';
import RecipeComponent from '../components/RecipeComponent';
import './Feed.css';
import { BiSolidBookHeart } from "react-icons/bi";
import { FaSearch, FaUser } from "react-icons/fa";
import { getAllRecipes } from "../services/recipeService";
import UserCard from '../components/UserCard';

const Feed = () => {
    //user state from useUser hook to check if user is logged in
    //and to get user data like if the recipe is liked or not
    //to get if the recipe is liked or not we need to make a call to the API
    //and check if the recipe is in the user liked recipes array
    //then we can pass the liked state to the RecipeComponent
    const { user, getUserLikes, userLikes } = useUser();

    //sample recipes for testing
    //now, we can use the service function to get all the recipes and save them in "recipes"
    // const recipes = [
    //     {
    //         id: 1,
    //         title: 'Brownie',
    //         description: 'Chocolate brownie',
    //         imgSrc: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
    //         initialIsLiked: false,
    //         likes: 5
    //     },
    //     {
    //         id: 2,
    //         title: 'Quesadillas',
    //         description: 'With meat and vegetables',
    //         imgSrc: 'https://mandolina.co/wp-content/uploads/2023/06/quesadilla.png',
    //         initialIsLiked: true,
    //         likes: 10
    //     },
    //     {
    //         id: 3,
    //         title: 'Brownie',
    //         description: 'Chocolate brownie',
    //         imgSrc: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
    //         initialIsLiked: false,
    //         likes: 5
    //     },
    //     {
    //         id: 4,
    //         title: 'Quesadillas',
    //         description: 'With meat and vegetables',
    //         imgSrc: 'https://mandolina.co/wp-content/uploads/2023/06/quesadilla.png',
    //         initialIsLiked: true,
    //         likes: 10
    //     },
    // ];

    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        //get user likes from function service getUserLikes
        const setUserLikes = async () => {
            await getUserLikes(user);
        };

        //get recipes from function service getAllRecipes
        const getRecipes = async () => {
            await getAllRecipes().then((response) => {
                setRecipes(response);
            })
        };
        getRecipes();
        setUserLikes();
    }, [setRecipes]);

    return (
        <>
            <div className='flex w-full mt-5 h-full'>
                <div className='feed-buttons-container xl:w-1/3 xl:flex xl:flex-col xl:h-fit xl:justify-center xl:gap-5 hidden'>
                    <UserCard name={user.name} imgSrc={"https://i.pinimg.com/736x/b9/23/e3/b923e3546251621205662f3cbd1cb402.jpg"} likes={user.likes} />
                </div>
                <div className="recipes-container sm:w-1/2 xl:w-1/3 sm:flex sm:flex-col gap-7 w-full no-scrollbar">
                    {
                        //if recipes is null show loading
                        recipes === null ? <p className='text-white'>Loading...</p> :
                            recipes.map((recipe, index) => {
                                return (
                                    <RecipeComponent
                                        key={index}
                                        recipeId={recipe.id}
                                        title={recipe.title}
                                        description={recipe.description}
                                        imgSrc={recipe.imgSrc}
                                        initialLikes={recipe.likes}
                                    />
                                );
                            })
                    }
                </div>
                <div className='feed-buttons-container sm:w-1/2 xl:w-1/3 sm:flex sm:flex-col sm:h-fit gap-5 hidden'>
                    <Link to='/home/recipes'>
                        <button className='feed-button flex flex-row w-3/4 mx-auto p-2 items-center justify-center rounded-2xl'><BiSolidBookHeart className='misRecetasIcon w-20 h-auto ml-8 text-yellow-500' /><h1 className=' text-white w-2/3 text-4xl mx-3'><strong><i>Mis Recetas</i></strong></h1></button>
                    </Link>
                    <Link to='/home/search'>
                        <button className='feed-button flex flex-row w-3/4 mx-auto p-2 items-center justify-center rounded-2xl'><FaSearch className='busquedaIcon w-20 h-auto  ml-8 text-yellow-500' /><h1 className=' text-white text-4xl w-2/3 mx-3'><strong><i>Buscar</i></strong></h1></button>
                    </Link>
                    <Link to='/home/profile'>
                        <button className='feed-button flex flex-row w-3/4 mx-auto p-2 items-center justify-center rounded-2xl'><FaUser className='usuarioIcon w-20 h-auto  ml-8 text-yellow-500' /><h1 className=' text-white text-4xl w-2/3 mx-3'><strong><i>Cuenta</i></strong></h1></button>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Feed;
