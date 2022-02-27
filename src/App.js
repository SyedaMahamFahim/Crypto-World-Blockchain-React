import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Merchants from "./pages/Merchants";
import Team from "./pages/Team";
import Wallet from "./pages/Wallet";
import LoginRegister from "./pages/LoginRegister";
import NotFound from "./pages/NotFound";
import AboutBitcoin from "./pages/AboutBitcoin";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
         
          <Route
          exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={HomeTwo}
          />
          
          <Route
            path={`${process.env.PUBLIC_URL + "/about-us"}`}
            component={About}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about-bitcoin"}`}
            component={AboutBitcoin}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={Blog}
          />
          
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-post"}`}
            component={BlogPost}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service"}`}
            component={Service}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service-details"}`}
            component={ServiceDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/merchants"}`}
            component={Merchants}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/wallet"}`}
            component={Wallet}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/login-register"}`}
            component={LoginRegister}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/not-found"}`}
            component={NotFound}
          />
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
