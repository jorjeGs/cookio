import React, { createContext, useContext, useReducer } from 'react';

// Define un contexto y un proveedor
const UserContext = createContext();

// Define un proveedor personalizado que almacena la información del usuario
export function UserProvider({ children }) {
  const [user, setUser] = useReducer(userReducer, null); // userReducer es una función que maneja el estado del usuario

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Crea un hook personalizado para acceder al contexto
export function useUser() {
  return useContext(UserContext);
}

// Esta función (userReducer) se usa para manejar el estado del usuario
function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}