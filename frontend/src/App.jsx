import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductForm from './productForm'
import ProductListing from './ProductListing'
import { AppProvider } from './AppContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StoreListing from './StoreListing'
import StockForm  from './StockForm'
import StockListing from './StockListing'
import SalesForm from './SalesForm'
import NavbarWrap from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './views/AddProduct'
import AddStock from './views/AddStock'
import Sales from './views/Sales'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppProvider>
        
      <Router>
        <NavbarWrap></NavbarWrap>
        <Routes>
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/addStock" element={<AddStock />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/stores" element={<StoreListing />} />
        </Routes>
      </Router>
      </AppProvider>

      {/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  )
}

export default App
