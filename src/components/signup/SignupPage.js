import React, { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { useAppContext } from "../../libs/contextLib";
import SignupForm from "./SignupForm";

function SignupPage() {
  const [newUser, setNewUser] = useState({});
  const { userHasAuthenticated } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setNewUser((prevNewUser) => ({
      ...prevNewUser,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
  }

  function formIsValid() {
    const { email, password, confirmPassword } = newUser;
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
        newUser={newUser}
        onChange={handleChange}
        onSave={handleSubmit}
        errors={errors}
        loading={loading}
      />
    );
  }

  return <>{loading ? <Spinner /> : renderForm()}</>;
}

export default SignupPage;
