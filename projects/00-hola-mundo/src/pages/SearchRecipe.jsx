import { Outlet } from "react-router-dom";
import { useUser } from "../hooks/UserContext";


const SearchRecipe = () => {
    const { user } = useUser();
    const username = user.name;

    return (
        <>
            <div>
                <h1>SearchRecipe de {username}</h1>
            </div>

            <Outlet />
        </>

    );
}

export default SearchRecipe;