import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homecomponente } from "./pages/home/home.component";
import { SearchDebounceComponent } from "./pages/search/searchDebounce.component";
import { SearchBasicComponente } from "./pages/search/searchBasic.component";
import { SearchDerivedComponent } from "./pages/search/searchDerived.component";
import { SearchComponent } from "./pages/search/search.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homecomponente />} />
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/search/debounce" element={<SearchDebounceComponent />} />
        <Route path="/search/derived" element={<SearchDerivedComponent />} />
        <Route path="/search/basic" element={<SearchBasicComponente />} />
      </Routes>
    </>
  );
}

export default App;
