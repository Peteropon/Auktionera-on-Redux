import React, { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../common/Spinner";
import { useAppContext } from "../../libs/contextLib";
import SignupForm from "./SignupForm";
import { Auth } from "aws-amplify";
import SignupConfirmationForm from "./SignupConfirmationForm";
import PropTypes from "prop-types";

function SignupPage({ history }) {
  const [newUser, setNewUser] = useState(null);
  const [newSignup, setNewSignup] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [confirmationCode, setConfirmationCode] = useState("");
  const { userHasAuthenticated } = useAppContext();

  function handleFormChange(event) {
    const { name, value } = event.target;
    setNewSignup((prevSignup) => ({
      ...prevSignup,
      [name]: value,
    }));
  }

  function handleConfirmationChange(event) {
    setConfirmationCode(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setLoading(true);
    try {
      const newUser = Auth.signUp({
        username: newSignup.email,
        password: newSignup.password,
      });
      setNewUser(newUser);
      setLoading(false);
    } catch (error) {
      console.info(error);
      setLoading(false);
    }
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      await Auth.confirmSignUp(newSignup.email, confirmationCode);
      await Auth.signIn(newSignup.email, newSignup.password);

      userHasAuthenticated(true);
      toast.success("Signup complete.");
      history.push("/");
    } catch (e) {
      setLoading(false);
    }
  }

  function formIsValid() {
    const { email, password, confirmPassword } = newSignup;
    const errors = {};
    if (!email) errors.email = "Title is required";
    if (!password) errors.password = "User is required";
    if (!confirmPassword) errors.confirmPassword = "Category is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function renderForm() {
    return (
      <SignupForm
        newSignup={newSignup}
        onChange={handleFormChange}
        onSave={handleSubmit}
        errors={errors}
        saving={loading}
      />
    );
  }

  function renderConfirmationForm() {
    return (
      <SignupConfirmationForm
        confirmationCode={confirmationCode}
        onChange={handleConfirmationChange}
        saving={loading}
        onSubmit={handleConfirmationSubmit}
      />
    );
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="Signup">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}

SignupPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SignupPage;
