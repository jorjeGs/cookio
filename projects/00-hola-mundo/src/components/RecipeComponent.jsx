import './RecipeComponent.css';
import { useState, useEffect } from 'react';
import { FaHeart, FaPlus } from "react-icons/fa";
import useUser from '../hooks/useUser';


const RecipeComponent = ({ recipeId, imgSrc , title, description, initialIsLiked, initialLikes }) => {

    
    //TO DO
    //leaving all the primary like functionality, now we will use a new hook to get the id of the liked recipes
    //to initialize the liked state we need to check if the recipe is in the user liked recipes array   
    //first, we need to create the hook from the user context
    //then we get the array from the useLikes hook
    //then we check if the recipe id is in the array userLikes
    //if it is, we set the initialIsLiked state to true
    //else we set it to false


    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(initialLikes);

    //get the user id from the user provider
    const { user, addLike, disLike, userLikes } = useUser();

    //check in useEffect if the recipe is in the userLikes array
    //if it is, set the initialIsLiked state to true
    //else set it to false
    useEffect(() => {
        if (userLikes.includes(recipeId)) {
            setLiked(true);
        } else {
            setLiked(false);
        }
        console.log(userLikes);
    }, [userLikes, recipeId]);

    //function to handle the like button
    const handleLike = () => {
        //if the recipe is liked we call the unlikeRecipe function
        //else we call the likeRecipe function
        if (liked) {
            disLike({recipeId});
            setLikes(likes - 1);
        } else {
            addLike({recipeId});
            setLikes(likes + 1);
        }
    };

    //text for the like button if it is liked or not
    const likeStyle = liked ? 'text-yellow-500' : 'text-white hover:text-yellow-500';

    //on click we change the state of the liked button
    return (
        <div className="recipe-card w-3/4 max-h-fit rounded-2xl mx-auto">
            <div className='recipe-card-image-container flex-row w-full h-auto justify-center items-center overflow-hidden rounded-2xl'>
                <img src={imgSrc} alt={title} className='recipe-card-img' />
            </div>
            <div className='flex flex-row justify-center items-center w-full mt-3'>
            <h2 className='recipe-title w-2/3 ml-8 text-yellow-500 text-4xl'><strong>{title}</strong></h2>
            <p className='text-white w-1/3 text-xl'><strong>By: Silene</strong></p>
            </div>
            <p className='recipe-description flex flex-row ml-8 mt-3 text-white items-center text-xl'>{description}</p>
            <div className="button-container flex flex-row mt-3 justify-between w-full items-center mb-3 text-3xl">
                <div className='w-1/3 flex justify-center items-center gap-3'>
                    <button className="Like-button" onClick={handleLike} ><FaHeart className={likeStyle} /></button>
                    <p className='text-white text-2xl'><strong>{likes}</strong></p>
                </div>
                <div className='w-1/3 flex justify-center items-center'>
                    <button className="text-white hover:text-yellow-500">Comment</button>
                </div>
                <div className='w-1/3 flex justify-center items-center'>
                    <button className="add-button text-white hover:text-yellow-500"><FaPlus /></button>
                </div>
            </div>
        </div>
    );
};

export default RecipeComponent;
