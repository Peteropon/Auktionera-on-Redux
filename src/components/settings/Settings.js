import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import config from "../../config";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "./BillingForm";

export default function Settings({ history }) {
  const [isLoading, setIsLoading] = useState(false);
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    setStripe(window.Stripe(config.STRIPE_KEY));
  }, []);

  function billUser(details) {
    return API.post("auctions", "/billing", {
      body: details,
    });
  }

  async function handleFormSubmit(storage, { token, error }) {
    if (error) {
      console.info(error);
      return;
    }
    setIsLoading(true);

    console.info(storage);
    console.info(token.id);
    try {
      await billUser({
        storage,
        source: token.id,
      });
      alert("Your card has been charged successfully!");
      history.push("/");
    } catch (e) {
      console.info(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="Settings">
      <StripeProvider stripe={stripe}>
        <Elements>
          <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
        </Elements>
      </StripeProvider>
    </div>
  );
}
