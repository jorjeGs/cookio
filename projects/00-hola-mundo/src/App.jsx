import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState(null);
  console.log(user)

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login user={user} setUser={setUser} />} />
          <Route path='/login' element={
            user ? <Navigate to='/home' /> :  (<Login user={user} setUser={setUser} />)
          } />
          <Route path='/home' element={<Home user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;