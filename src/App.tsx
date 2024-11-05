import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homecomponente } from "./pages/home/home.component";
import { SearchComponente } from "./pages/search/search.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homecomponente />} />
        <Route path="/search" element={<SearchComponente />} />
      </Routes>
    </>
  );
}

export default App;
