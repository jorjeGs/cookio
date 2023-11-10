import { Outlet } from 'react-router-dom';
import useUser from '../hooks/useUser';

const Feed = () => {
    const { user } = useUser();
    
    return (
        <>
            <div>
                <h1>Feed de {user.data.name}</h1>
            </div>
            <Outlet />
        </>
    );
}

export default Feed;
