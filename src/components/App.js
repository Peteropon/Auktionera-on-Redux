import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import AuctionsPage from "./auctions/AuctionsPage";
import ManageAuctionPage from "./auctions/ManageAuctionPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/auctions" component={AuctionsPage} />
        <Route path="/auction" component={ManageAuctionPage} />
        <Route path="/auction:id" component={ManageAuctionPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
