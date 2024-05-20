import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {createBrowserRouter, createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import RootLayout from './components/RootLayout.jsx';
import Dashboard from './components/Dashboard.jsx';
import Cart from "./components/Cart.jsx"
function App() {

   const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}> 
     <Route index element={<Dashboard />}></Route>
     <Route path ='/cart' element={<Cart />}></Route>

    </Route>
   ))

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
