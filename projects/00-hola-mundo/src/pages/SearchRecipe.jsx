import { Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";

const CreateRecipe = () => {
    const { user } = useUser();
    return (
        <>
            <div>
                <h1>CreateRecipe de {user.name} </h1>
            </div>

            <Outlet />
        </>

    );
}

export default CreateRecipe;