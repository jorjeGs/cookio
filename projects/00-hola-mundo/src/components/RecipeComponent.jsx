import './RecipeComponent.css';
import { useState } from 'react';
import { FaHeart, FaPlus } from "react-icons/fa";

const RecipeComponent = ({ imgSrc='https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg' , title, description, initialIsLiked }) => {

    //destructuring the props for the state
    // this is called internal state
    const [liked, setLiked] = useState(initialIsLiked);

    //text for the like button if it is liked or not
    const likeText = liked ? 'Liked' : 'Like';
    const buttonClass = liked ? 'like-button liked' : 'like-button';

    //on click we change the state of the liked button
    return (
        <div className="recipe-card w-3/4 max-h-fit rounded-2xl mx-auto">
            <img src={imgSrc} alt={title} className='recipe-card-img flex-row w-full h-72 rounded-2xl' />
            <div className='flex flex-row justify-center items-center w-full mt-3'>
            <h2 className='recipe-title w-2/3 ml-8 text-yellow-500 text-4xl'><strong>{title}</strong></h2>
            <p className='text-white w-1/3 text-xl'><strong>By: Silene</strong></p>
            </div>
            <p className='recipe-description flex flex-row ml-8 mt-3 text-white items-center text-xl'>{description}</p>
            <div className="button-container flex flex-row mt-3 justify-between w-full items-center mb-3 text-3xl text-white">
                <button className="Like-button w-1/3 flex justify-center hover:text-yellow-500"><FaHeart /></button>
                <button className="comment-button w-1/3  hover:text-yellow-500">Comment</button>
                <button className="add-button w-1/3 flex justify-center hover:text-yellow-500"><FaPlus /></button>
            </div>
        </div>
    );
};

export default RecipeComponent;
