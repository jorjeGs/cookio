import { Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";

const SearchRecipe = () => {
    const { user } = useUser();
    return (
        <>
            <div>
                <h1>SearchRecipe de {user.name} </h1>
            </div>

            <Outlet />
        </>

    );
}

export default SearchRecipe;