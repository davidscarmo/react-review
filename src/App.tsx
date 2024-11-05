import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homecomponente } from "./pages/home/home.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homecomponente />} />
    </Routes>
  );
}

export default App;
