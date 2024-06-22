import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../layout/Navbar";
import { Home } from "../pages/Home";


function AppRoute(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
