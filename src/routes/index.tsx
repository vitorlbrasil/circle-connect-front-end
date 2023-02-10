import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { AnimatePresence } from "framer-motion";
import MyProfile from "../pages/MyProfile";
import AddContact from "../pages/AddContact";
import ContactProfile from "../pages/ContactProfile";

const MainRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/contact-profile" element={<ContactProfile />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;
