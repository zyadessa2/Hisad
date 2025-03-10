import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';


let routers = createBrowserRouter([
  {path:'' , element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:'/' , element:<Home/>},
    {path:'about' , element:<About/>},

  ]},

])




function App() {


    return  <RouterProvider router={routers}></RouterProvider>
  
}

export default App;
