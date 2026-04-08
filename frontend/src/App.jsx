import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Layout from "./component/Layout/Layout.jsx";
import LandingPage from "./pages/landingPage/landingPage.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import SignUpPage from "./pages/SignUP/SignUpPage.jsx";
import WorkSpace from "./pages/workspace/WorkSpace.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/workspace" element={<WorkSpace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
