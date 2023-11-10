import Context from "../context/UserContext";
import { useCallback, useContext } from "react";

export default function useUser () {
    const { user, setUser } = useContext(Context);
    //add token validation logic here

    const login = useCallback((user) => {
        //login logic
        const token = user.token;
        const data = user.data;
        setUser({ data });
    }, [setUser]);
    
    const logout = useCallback(() => {
        //logout logic
        setUser(null);
    }, [setUser]);


    return {
        isLogged: Boolean(user),
        login,
        logout,
        user
    };
}