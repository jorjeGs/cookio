import './App.css'
import Login from './components/Login';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';

const recipes = [
  {
    imgSrc: 'https://unavatar.io/facebook',
    title: 'tortilla harina',
    description: 'tortilla de harina muy rica',
    initialIsLiked: true
  },
  {
    imgSrc: 'https://unavatar.io/twitter',
    title: 'tortilla maiz',
    description: 'tortilla de maiz mas o menos',
    initialIsLiked: false
  }
]

function App() {
  return (
    <div className='App'>
      <header className='App-header p-2'>
        <Menu />
      </header>
      <div className='App-body'>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/login' element={<h1>Login</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;