import Home from "./pages/Home";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectRoute from "./components/ProtectRoute";
import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectRoute>
                <Account />
              </ProtectRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
