import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { configureStore } from '@reduxjs/toolkit';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Catalog from './Components/Catalog';
import ItemPage from './Components/ItemPage';
import AddItem from './Components/AddItem';
import Checkout from './Components/Checkout';
import Register from './Components/Register';
import Success from './Components/Success';
// import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Components/Login';
import Footer from './Components/Footer';
import cartReducer from './features/cartSlice';
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from './Nav';
import PrivateRoutes from './utils/PrivateRoutes'
// import PrivateRoutes from ''



const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Home />} />
                {/* <Route path="/catalog" element={isAuthenticated ? <Catalog /> : <Login />} /> */}
                <Route path="/item/:id" element={<ItemPage />} />
                <Route path="/additem" element={<AddItem />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
                <Route path="/catalog" element={<Catalog />} />
                {/* <Route path="/register" element={<Register />} /> */}
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

            </Routes>

            <ToastContainer />
            <Footer />
          </div>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
