import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
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

function Routes() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
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
            {/* <HashRouter> */}
            <Switch>
              {/* <Route exact path="/" component={HomeOne} />
                                    <Route exact path="/home-two" component={Hometwo} />
                                    <Route exact path="/home-three" component={HomeThree} />
                                    <Route exact path="/home-four" component={HomeFour} />
                                    <Route exact path="/home-five" component={HomeFive} />
                                    <Route exact path="/home-six" component={HomeSix} />
                                    <Route exact path="/home-seven" component={HomeSeven} />
                                    <Route exact path="/home-eight" component={HomeEight} /> */}
              <Route exact path="/" component={HomeDark} />
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/blogs/blog/:id" component={Blog} />
              <Route exact path="/thems" component={ChooseRoute} />
              <Route exact path="/theme/:id" component={ChooseOne} />
              <Route exact path="/prices" component={Prices} />
              <Route exact path="/pricepage/:id" component={PricesPage} />
              <Route exact path="/pricepageend/:id" component={PricesPageend} />
              {/* <Route exact path="/news/single-news" component={SingleNews} />
                                    <Route exact path="/service" component={Service} />
                                    <Route exact path="/about-us" component={AboutUs} />
                                    <Route exact path="/contact" component={Contact} /> */}
              <Route exact path="/error" component={Error} />
              {/* <Route exact path="/about-us-another" component={AboutUsTwo} />
                                    <Route exact path="/shops" component={Shops} />
                                    <Route exact path="/shops/shop-details" component={ShopDetails} /> */}
              <Route component={Error} />
            </Switch>
            {/* </HashRouter> */}
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Routes;
