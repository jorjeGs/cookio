import './RecipeComponent.css';
import { useState } from 'react';

const RecipeComponent = ({ imgSrc='https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg' , title, description, initialIsLiked }) => {

    //destructuring the props for the state
    // this is called internal state
    const [liked, setLiked] = useState(initialIsLiked);

    //text for the like button if it is liked or not
    const likeText = liked ? 'Liked' : 'Like';
    const buttonClass = liked ? 'like-button liked' : 'like-button';

    //on click we change the state of the liked button
    const handleClick = () => {
        setLiked(!liked);
    }

    return (
        <div className="recipe-card w-auto max-h-96 px-20 rounded-2xl">
            <img src={imgSrc} alt={title} className='recipe-card-img flex-row- w-auto' />
            <div className='flex flex-col justify-between content-center'>
            <h2 className='recipe-title'>{title}</h2>
            <p className='text-white'>By: <span className='text-blue-500'>User</span></p>
            </div>
            <p className='recipe-description flex-row'>{description}</p>
            <div className="button-container flex-row">
                <button className={buttonClass} onClick={handleClick} >
                    <span className='likeText'>{likeText}</span>
                    <span className='dislike'>Dislike</span>
                </button>
                <button className="comment-button">Comment</button>
                <button className="add-button">Add</button>
            </div>
        </div>
    );
};

export default RecipeComponent;
