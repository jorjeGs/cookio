import Context from "../context/UserContext";
import { useCallback, useContext } from "react";

export default function useUser () {
    const { user, setUser, token, setToken } = useContext(Context);
    //add token validation logic here

    const login = useCallback((user) => {
        //login logic
        const token = user.token;
        const data = user.data;

        //set token and user data in local storage (hybrid storage)
        //we save the user data as a string because local storage only stores strings
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('token', JSON.stringify(token))
        setUser(data);
        setToken(token);
    }, [setUser, setToken]);
    
    const logout = useCallback(() => {
        //logout logic
        setUser(null);
        setToken(null);
    }, [setUser, setToken]);


    return {
        isLogged: Boolean(token),
        login,
        logout,
        user
    };
}