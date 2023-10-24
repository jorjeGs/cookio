const RecipeComponent = ({ imgSrc, title, description }) => {
    return (
        <div className="recipe-card">
            <img src={imgSrc} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="button-container">
                <button className="like-button">Like</button>
                <button className="comment-button">Comment</button>
                <button className="add-button">Add</button>
            </div>
        </div>
    );
};

export default RecipeComponent;
