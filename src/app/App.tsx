import "../styles/App.scss";

import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
