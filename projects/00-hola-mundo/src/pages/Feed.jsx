import { Outlet } from 'react-router-dom';
import { useUser } from '../hooks/UserContext';

const Feed = () => {
    const { user } = useUser();
    const username = user.name;
    return (
        <>
            <div>
                <h1>Feed de {username}</h1>
            </div>
            <Outlet />
        </>
    );
}

export default Feed;
