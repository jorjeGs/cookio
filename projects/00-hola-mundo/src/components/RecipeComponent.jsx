import './RecipeComponent.css';
import { useState } from 'react';

const RecipeComponent = ({ imgSrc, title, description, initialIsLiked }) => {

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
        <div className="recipe-card">
            <img src={imgSrc} alt={title} className='recipe-image' />
            <h2 className='recipe-title'>{title}</h2>
            <p className='recipe-description'>{description}</p>
            <div className="button-container">
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
