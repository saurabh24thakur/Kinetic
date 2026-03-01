import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/landingPage/landingPage.jsx";
import WorkSpace from "./pages/workspace/WorkSpace.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/workspace" element={<WorkSpace/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
