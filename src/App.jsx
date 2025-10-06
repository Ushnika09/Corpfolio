import { Outlet } from "react-router-dom";
import "./App.css";
import { CompanyProvider } from "./Context/CompanyContext";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <CompanyProvider>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-50 to-white">
        <Header/>
        <Outlet />
      </div>
      <Footer/>
    </CompanyProvider>
  );
}

export default App;
