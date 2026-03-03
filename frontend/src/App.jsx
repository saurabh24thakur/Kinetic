import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Layout from "./component/Layout/Layout.jsx";
import LandingPage from "./pages/landingPage/landingPage.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import WorkSpace from "./pages/workspace/WorkSpace.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage mode="login" />} />
          <Route path="/signup" element={<LoginPage mode="register" />} />
          <Route path="/workspace" element={<WorkSpace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
