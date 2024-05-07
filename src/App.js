import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from "wowjs";
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import Service from "./pages/Service";
import ArborManagement from "./pages/ArborManagement";
import GardenManagement from "./pages/GardenManagement";
import NurseryTreeFarm from "./pages/NurseryTreeFarm";
import TrimmingPruning from "./pages/TrimmingPruning";
import PestsWeedsControl from "./pages/PestsWeedsControl";
import FruitsFlowersGarden from "./pages/FruitsFlowersGarden";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
// import PortfolioOne from "./pages/PortfolioOne";
import PortfolioTwo from "./pages/PortfolioTwo";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import BlogGrid from "./pages/BlogGrid";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import ScrollToTopRoute from "./components/scroll-to-top-route/ScrollToTopRoute";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./components/contact/styless.css";
import ProductDetails from "./components/Produits/ProductDetails";
import ProduitDetails from "./pages/ProduitDetails";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./components/Produits/ProductDetails";
import Panier from "./components/Panier/CartPage";
import Payment from "./components/Payments/Payment";
function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Router>
      <ScrollToTopRoute />
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          exact
          element={<HomeTwo />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/about`}
          exact
          element={<About />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/services`}
          exact
          element={<Service />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/arbor-management`}
          exact
          element={<ArborManagement />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/garden-management`}
          exact
          element={<GardenManagement />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/nursery`}
          exact
          element={<NurseryTreeFarm />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/trimming`}
          exact
          element={<TrimmingPruning />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/weeds-control`}
          exact
          element={<PestsWeedsControl />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/flowers-garden`}
          exact
          element={<FruitsFlowersGarden />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/team`}
          exact
          element={<Team />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/team-details`}
          exact
          element={<TeamDetails />}
        />
        <Route path="/product-details/:id" exact element={<ProduitDetails />} />
        <Route
          path={`${process.env.PUBLIC_URL}/portfolio-2`}
          exact
          element={<PortfolioTwo />}
        />
        <Route path={`${process.env.PUBLIC_URL}/faq`} exact element={<Faq />} />
        <Route
          path={`${process.env.PUBLIC_URL}/blog`}
          exact
          element={<Blog />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/blog-grid`}
          exact
          element={<BlogGrid />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/blog-details`}
          exact
          element={<BlogDetails />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/contact`}
          exact
          element={<Contact />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/dashboard`}
          exact
          element={<Dashboard />}
        />

        <Route
          path={`${process.env.PUBLIC_URL}/produit`}
          exact
          element={<ProductDetails />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/produitpage`}
          exact
          element={<ProductPage />}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/panier`}
          element={<Panier />}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/payment`}
          element={<Payment />}
        />
      </Routes>
      <ScrollToTop
        className="scrollUp"
        smooth
        top="1500"
        component={<FaAngleUp />}
      />
    </Router>
  );
}

export default App;
