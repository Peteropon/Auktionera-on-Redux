import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";
import { authenticateUser } from "../../redux/actions/authActions";
import { useAppContext } from "../../libs/contextLib";

function LoginPage({ history, authenticateUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { userHasAuthenticated } = useAppContext();

  function formIsValid() {
    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Seriously? No password, buddy?";
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
    setLoading(true);
    authenticateUser({ email, password })
      .then(() => {
        userHasAuthenticated(true);
        toast.success("You have successfully logged in");
        history.push("/");
      })
      .catch((error) => {
        toast.error("Login failed " + error.message);
        console.info(error.message);
        setLoading(false);
      });
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <LoginForm
          email={email}
          password={password}
          onChange={handleChange}
          onSave={handleSubmit}
          errors={errors}
          loading={loading}
        />
      )}
    </>
  );
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired,
  authenticateUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
    userHasAuthenticated: state.userHasAuthenticated,
  };
}

const mapDispatchToProps = {
  authenticateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
