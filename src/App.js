import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';


let routers = createBrowserRouter([
  {path:'' , element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:'/' , element:<Home/>},

  ]},

])




function App() {


    return  <RouterProvider router={routers}></RouterProvider>
  
}

export default App;
