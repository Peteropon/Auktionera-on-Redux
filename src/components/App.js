import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import AuctionsPage from "./auctions/AuctionsPage";
import ManageAuctionPage from "./auctions/ManageAuctionPage";
import LoginPage from "./login/LoginPage";
import SignupPage from "./signup/SignupPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth } from "aws-amplify";
import { AppContext } from "../libs/contextLib";
import NewAuction from "./auctions/NewAuction";
import EditAuction from "./auctions/EditAuction";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut().then(toast.info("You have logged out."));
    userHasAuthenticated(false);
  }

  return (
    !isAuthenticating && (
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Header onClick={handleLogout} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/auctions" component={AuctionsPage} />
          <Route path="/auction:id" component={ManageAuctionPage} />
          <Route path="/auction" component={ManageAuctionPage} />
          <Route path="/new" component={NewAuction} />
          <Route exact path="/myauctions/:id" component={EditAuction} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={2500} hideProgressBar />
      </AppContext.Provider>
    )
  );
}

export default App;
