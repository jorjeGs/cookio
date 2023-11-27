import React, { useState } from 'react';
import LoadingButton from './LoadingButton';
import useUser from '../hooks/useUser';

const FormRecipeComponent = () => {
    const { user } = useUser()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Perform form submission logic here

        setLoading(false);
    };

    return (
        <form className="form-recipe"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
                type="file"
                placeholder="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <input type="hidden" name="created_by" value={user.username} />
            <LoadingButton type="submit" loading={loading} disabled={loading} >
                Submit
            </LoadingButton>
        </form>
    );
};

export default FormRecipeComponent;
