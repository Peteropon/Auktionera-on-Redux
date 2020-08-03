import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import AuctionsPage from "./auctions/AuctionsPage";
import ManageAuctionPage from "./auctions/ManageAuctionPage";
import LoginPage from "./login/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/auctions" component={AuctionsPage} />
        <Route path="/auction:id" component={ManageAuctionPage} />
        <Route path="/auction" component={ManageAuctionPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={2500} hideProgressBar />
    </div>
  );
}

export default App;
