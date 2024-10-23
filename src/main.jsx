import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx';
import App from './App.jsx'
import Create from './components/Create.jsx';
import Trip from './components/Trip.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "map",
    element: <App />
  },
  {
    path: "create",
    element: <Create />
  },
  {
    path: "trip",
    element: <Trip />
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
