import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Home from './components/header/Home';
import Gallery from './components/header/Gallery';
import Shop from './components/header/Shop';
import Blog from './components/header/Blog';
import About from './components/header/About';
import Team from './components/header/Team';
import Contact from './components/header/Contact';
import Cart from './components/header/Cart';
import LandgingPage from './components/header/LandgingPage';
const Applayout=()=>{
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}


const appRouter =createBrowserRouter([{
  path:'/',
  element:<Applayout/> ,
  children:[{
    path:'/',
    element:<LandgingPage/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/gallery',
    element:<Gallery/>
  },
  {
    path:'/shop',
    element:<Shop/>
  },
  {
    path:'/blog',
    element:<Blog/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/team',
    element:<Team/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },

]
}])



function App() {
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  );
}

export default App;
