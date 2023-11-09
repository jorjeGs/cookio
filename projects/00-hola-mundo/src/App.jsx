import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import Feed from './pages/Feed';
import SearchRecipe from './pages/SearchRecipe';
import Account from './pages/Account';
import ProtectRoute from './components/ProtectRoute';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NotFound from './pages/NotFound';
//we can create a component who provides the user to all the components of the app instead of passing it as a prop 
import { UserProvider, useUser } from './hooks/UserContext';

function App() {
  //state and hook for user
  //initialize must come from local storage or from a cookie or from a session storage
  //initialization of user state from local storage with useEffect hook because it is a side effect of the component mounting 
  //and is not part of the component rendering
   
  return (
    <div className='App'>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path='login' element={<Login /> } />
            <Route element={<ProtectRoute redirectTo='/login' />}>
              <Route path='home/*' element={<Home />}>
                <Route index element={<Feed />} />
                <Route path='feed' element={<Feed />} />
                <Route path='search' element={<SearchRecipe />} />
                <Route path='profile' element={<Account />} />
                <Route path='*' element={<NotFound />} />
              </Route> 
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;