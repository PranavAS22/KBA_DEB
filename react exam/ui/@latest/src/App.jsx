
import './App.css'
import Home from './page/Home'
import AddProduct from './page/AddProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route></Route>
      <Route path='/' element={<Home />} />
      <Route path='/addproduct' element={<AddProduct />} />
    </Routes>
    </BrowserRouter>
    
     </>
  )
}

export default App
