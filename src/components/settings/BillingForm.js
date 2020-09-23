import React, { useState } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

function BillingForm({ isLoading, onSubmit, ...props }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);
  const [billingInfo, setBillingInfo] = useState({});
  const [errors, setErrors] = useState({});

  isLoading = isProcessing || isLoading;

  function handleFormChange(event) {
    const { name, value } = event.target;
    setBillingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function formIsValid() {
    const { storage, name } = billingInfo;
    const errors = {};
    if (!storage) errors.storage = "is required";
    if (!name) errors.name = "A name is required";
    if (!isCardComplete) errors.cardComplete = "Error";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    setIsProcessing(true);

    const { token, error } = await props.stripe.createToken({
      name: billingInfo.name,
    });
    setIsProcessing(false);

    onSubmit(parseInt(billingInfo.storage, 10), { token, error });
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="storage"
        label="Storage"
        type="number"
        value={billingInfo.storage || "1"}
        onChange={handleFormChange}
        error={errors.storage}
        autoFocus={true}
      />

      <TextInput
        name="name"
        label="Name"
        type="text"
        value={billingInfo.name || ""}
        onChange={handleFormChange}
        error={errors.name}
      />

      <label>Credit Card Info</label>
      <CardElement
        className="card-field"
        onChange={(e) => setIsCardComplete(e.complete)}
        style={{
          base: { fontSize: "18px", fontFamily: '"Open Sans", sans-serif' },
        }}
      />
      <button type="submit" disabled={isProcessing} className="btn btn-primary">
        {isProcessing ? "Processing..." : "Purchase"}
      </button>
    </form>
  );
}

BillingForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default injectStripe(BillingForm);
