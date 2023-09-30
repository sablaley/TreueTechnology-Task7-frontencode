import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import './App.css';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddPro from './components/AddPro';
import ProductList from './components/ProductList';
import Update from './components/Update';

const App = () => {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path='/' element={<ProductList />}></Route>
              <Route path='/add' element={<AddPro/>}></Route>
              <Route path='/update/:id' element={<Update />}></Route>
              <Route path='/profile' element={<h1>Profile</h1>}></Route>
              <Route path='/logout' element={<h1>logout</h1>}></Route>
            </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
