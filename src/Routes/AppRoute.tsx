import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../layout/Navbar";
import { Home } from "../pages/Home";
import { useMediaQuery } from "react-responsive";
import { Navbar_Res } from "../components/Res/NavBarRes";

function AppRoute(): JSX.Element {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); // Puedes ajustar el tamaño máximo según tus necesidades

  return (
    <BrowserRouter>
      {isMobile ? <Navbar_Res /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
