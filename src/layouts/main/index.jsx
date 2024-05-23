import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftAside from "@/components/LeftAside";
import RightAside from "@/components/RightAside";

function MainLayout() {
  return (
    <>
      <Header />
      <section className="main mt-14">
        <LeftAside />
        <div className="outlet-container">
          <Outlet />
        </div>
        <RightAside />
      </section>
      <Footer />
    </>
  );
}

export default MainLayout;
