import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Order from './components/Order';

function App() {
  return (
    <div className="mainWrapper">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/account' element={<Account />} />
            <Route path='/orders/:id' element={<Order />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
