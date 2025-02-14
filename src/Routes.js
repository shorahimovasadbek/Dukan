import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter, Redirect } from "react-router-dom/cjs/react-router-dom";
import Blogs from "./components/Blogs";
import Error from "./components/Error";
import Loader from "./components/Helper/Loader";
import ScrollToTop from "./components/Helper/ScrollToTop";
import HomeDark from "./components/HomeDark";
import Blog from "./components/SingleBlog/Blog";
import ChooseRoute from "./components/ChooseRoute";
import ChooseOne from "./components/ChooseOne";
import Prices from "./components/Prices";
import PricesPage from "./components/PricePage";
import PricesPageend from "./components/Priceend";
import TeamHomeOne from "./components/HomeOne/TeamHomeOne";
import TanksPage from "./components/TanksPage";

function Routes() {
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "uz");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setLang(localStorage.getItem("i18nextLng"));
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading && (
        <div className={`appie-loader ${loading ? "active" : ""}`}>
          <Loader />
        </div>
      )}
      <div className={`appie-visible ${loading === false ? "active" : ""}`}>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <Redirect to={`/${lang}`} />
              </Route>
              <Route
                exact
                path={`/${lang}`}
                component={HomeDark}
              />
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/blogs/blog/:id" component={Blog} />
              <Route exact path="/categories" component={ChooseRoute} />
              <Route exact path="/theme/:id" component={ChooseOne} />
              <Route exact path="/prices" component={Prices} />
              <Route exact path="/pricepage/:id" component={PricesPage} />
              <Route exact path="/pricepageend/:id" component={PricesPageend} />
              <Route exact path="/team" component={TeamHomeOne} />
              <Route exact path="/thanks" component={TanksPage} />
              <Route component={Error} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Routes;
