import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>HomePage</div>} />
          <Route path="catalog" element={<div>Catalog</div>} />
          <Route path="favorites" element={<div>Favorites</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
