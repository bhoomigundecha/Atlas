import './App.css';
import { CreateBrowserRouter, RouterProvider } from "react-router-dom";

import {About} from './pages/About';
import {Home} from './pages/Home';
import {Country} from './pages/Country';
import {Contact} from './pages/Contact';

const router = CreateBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "country",
    element: <Country />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
])



const App = () => {
  return <RouterProvider> </RouterProvider>
}

export default App;