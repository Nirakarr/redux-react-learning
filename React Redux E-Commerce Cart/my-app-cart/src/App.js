import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Cards />}></Route>
        <Route path="/cart/:id" element={<CardsDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
