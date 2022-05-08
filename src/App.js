import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItems/MyItems';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
            <Route path='/myItems' element={<MyItems></MyItems>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
