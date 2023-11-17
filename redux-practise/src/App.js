import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Products_Containers/Header";
import ProductListing from "./Products_Containers/ProductListing";
import ProductDetails from "./Products_Containers/ProductDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            component={ProductDetails}
          ></Route>
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
