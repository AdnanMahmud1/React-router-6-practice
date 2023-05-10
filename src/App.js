import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Dashboard from './pages/Dashboard';
import SharedLayout from "./pages/SharedLayout";


function App() {
  return (
    <BrowserRouter>
      {/* <nav>Our Nav</nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/* <footer>Our Footer</footer> */}
    </BrowserRouter>
  );
}

export default App;
