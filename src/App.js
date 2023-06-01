import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Components/Detail/ItemDetailContainer";
import ItemListContainer from "./Components/List/ItemListContainer/ItemListContainer";
import CartContextProvider from "./Context/CartContext";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Cart from './Components/Cart/Cart';
import FormCart from './Components/Form/FormCart';



function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/form" element={<FormCart />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>error 404: Not found</h1>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
