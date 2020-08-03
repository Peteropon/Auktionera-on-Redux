import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Auth } from "aws-amplify";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";

function LoginPage({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  function formIsValid() {
    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "What about your password buddy?";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    try {
      await Auth.signIn(email, password);
      toast.success("You have successfully logged in");
      history.push("/auctions");
    } catch (e) {
      toast.error("Login failed " + e.message);
      console.info(e.message);
      setSaving(false);
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      {saving ? (
        <Spinner />
      ) : (
        <LoginForm
          email={email}
          password={password}
          onChange={handleChange}
          onSave={handleSubmit}
          errors={errors}
          saving={saving}
        />
      )}
    </>
  );
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired,
};
export default LoginPage;
