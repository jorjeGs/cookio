import './App.css'
import RecipeComponent from './RecipeComponent'
import Login from './Login';

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
    <section className='App'>
      <Login />
    </section>
  );
}

export default App;