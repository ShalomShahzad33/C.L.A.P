import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cabinet from "./pages/Cabinet";
import CabinetMember from "./pages/CabinetMember";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cabinet" element={<Cabinet />}>
            <Route path=":id" element={<CabinetMember />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
