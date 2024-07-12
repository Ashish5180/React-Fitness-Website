import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/Pages/AboutUs.jsx';
import Home from './components/Pages/Home.jsx';
import ContactUs from './components/Pages/ContactUs.jsx';
import Products from './components/Pages/Products.jsx';
import Exercise from './components/Pages/Exercise.jsx';
import Nutrition from './components/Pages/Nutrition.jsx';
import Cart from './components/Pages/Cart.jsx';
import { Provider } from 'react-redux';
import store from './components/React-Redux/store.js';
import Login from './components/Authentication/Login.jsx';
import SignUp from './components/Authentication/SignUp.jsx';
import { UserAuthContextProvider } from './components/Context/UserAuthContext.jsx';
import Protected from './components/Authentication/Protected.jsx';
import Blog from './components/Blogs/Blogs.jsx';
import Checkout from './components/Pages/Checkout.jsx';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Products" element={<Products />} />
        <Route path="Exercise" element={<Protected><Exercise /></Protected>} />
        <Route path="Nutrition" element={<Protected><Nutrition /></Protected>} />
        <Route path="BlogPage" element={<Blog />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Route>
    </Routes>
  </Router>
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </UserAuthContextProvider>
  </React.StrictMode>
)
