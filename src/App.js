import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExemploPage from "./pages/ExemploPage/ExemploPage";
import ExemploPage2 from "./pages/ExemploPage2/ExemploPage2";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Page2" element={<ExemploPage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
