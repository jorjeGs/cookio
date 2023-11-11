import React, {useState} from "react";

const Context = React.createContext({});

export function UserContextProvider({children}) {
    //state and hook for user
    //initialize must come from local storage or from a cookie or from a session storage
    //state is being initialized with an arrow function because it is a side effect of the component mounting
    //and is not part of the component rendering, this way we avoid the state to be initialized every time the component renders
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null
    });

    //also, we can add an state for the token and initialize it with the same logic as the user state
    const [token, setToken] = useState(() => {
        return JSON.parse(localStorage.getItem('token')) || null
    });

    //then, send it to the provider
    return <Context.Provider value={{user, setUser, token, setToken }}>
        {children}
    </Context.Provider>
}

export default Context;