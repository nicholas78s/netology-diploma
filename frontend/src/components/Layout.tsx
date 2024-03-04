import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;