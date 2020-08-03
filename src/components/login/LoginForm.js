import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const LoginForm = ({
  email,
  password,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>Login</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="email"
        label="Email"
        type="email"
        value={email || ""}
        onChange={onChange}
        error={errors.email}
        autoFocus={true}
      />
      <TextInput
        name="password"
        label="Password"
        type="password"
        value={password || ""}
        onChange={onChange}
        error={errors.password}
      />
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default LoginForm;
