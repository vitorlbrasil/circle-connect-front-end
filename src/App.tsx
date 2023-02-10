import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import MainRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
