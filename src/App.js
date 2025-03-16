import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products'
import CategoryDetails from './pages/CategoryDetails';
import ProductDetails from './pages/ProductDetails';
import Sitemap from './pages/Sitemap';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contactUs", element: <ContactUs /> },
      { path: "products", element: <Products /> },
      { path: "category/:category", element: <CategoryDetails /> },
      { path: "product/:id", element: <ProductDetails /> },
    ],
  },
  {
    path: "/sitemap.xml", // مسار الـ Sitemap
    element: <Sitemap />,
  },
]);




function App() {


    return  <RouterProvider router={routers}></RouterProvider>
  
}

export default App;
