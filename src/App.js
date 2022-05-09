import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItems/MyItems';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/User/Login/Login';
import Register from './Components/User/Register/Register';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ViewProduct from './Components/Products/ViewProduct';
import UpdateProduct from './Components/Products/UpdateProduct';
import AddProduct from './Components/AddProduct/AddProduct';
import AllProducts from './Components/AllProducts/AllProducts';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/inventory' element={<ProtectedRoute><ManageInventory></ManageInventory></ProtectedRoute>}></Route>
            <Route path='/myItems' element={<ProtectedRoute> <MyItems></MyItems></ProtectedRoute>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/*' element={<NotFound></NotFound>}></Route>
            <Route path="/update/:id" element={<UpdateProduct></UpdateProduct>}></Route>
            <Route path="/view/:id" element={<ViewProduct></ViewProduct>}></Route>
            <Route path='/add' element={<AddProduct></AddProduct>}></Route>
            <Route path='/product' element={<AllProducts></AllProducts>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
