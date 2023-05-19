import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Components/Detail/ItemDetailContainer";
import ItemListContainer from "./Components/List/ItemListContainer/ItemListContainer";
import CartContextProvider from "./Context/CartContext";
import CategoryContainer from "./Components/Category/CategoryContainer";
import NavBar from "./Components/NavBar/NavBar";


function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <CategoryContainer />
          {/* <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>error 404: Not found</h1>} />
          </Routes> */}
        </CartContextProvider>

      </BrowserRouter>

    </>
  );
}

export default App;
