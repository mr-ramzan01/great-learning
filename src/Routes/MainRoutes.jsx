import { Route, Routes } from "react-router-dom";
import { Deshboard } from "../Pages/Deshboard";
import Privacy from "../Pages/Policy/Privacy";
import { Header } from "../Components/Header";
import Footer from "../Components/Footer";
import RefundPolicy from "../Pages/Policy/RefundPolicy";
import Term_condition from "../Pages/Policy/Term_condition";
import Datascience from "../Pages/Course/data.science";
import Cybercourse from "../Pages/Course/cuber.course";
import Aimachine from "../Pages/Course/ai.machine";
import About from "../Pages/About/About";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Deshboard />} />
        <Route
          path="/privacy-policy"
          element={
            <>
              <Header />
              <Privacy />
              <Footer />
            </>
          }
        />

        <Route
          path="refund-policy"
          element={
            <>
              <Header />
              <RefundPolicy />
              <Footer />
            </>
          }
        />
        <Route
          path="term-conditions"
          element={
            <>
              <Header />
              <Term_condition />
              <Footer />
            </>
          }
        />

        <Route
          path="/data-science"
          element={
            <>
              <Header />
              <Datascience />
              <Footer />
            </>
          }
        />
        <Route
          path="/cyber-security"
          element={
            <>
              <Header />
              <Cybercourse />
              <Footer />
            </>
          }
        />
        <Route
          path="/ai-machine"
          element={
            <>
              <Header />
              <Aimachine />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};
