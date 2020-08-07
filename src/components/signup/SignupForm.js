import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const SignupForm = ({
  newUser,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>Sign up</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="email"
        label="Email"
        type="email"
        value={newUser.email || ""}
        onChange={onChange}
        error={errors.email}
        autoFocus={true}
      />
      <TextInput
        name="password"
        label="Password"
        type="password"
        value={newUser.password || ""}
        onChange={onChange}
        error={errors.password}
      />
      <TextInput
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        value={newUser.confirmPassword || ""}
        onChange={onChange}
        error={errors.confirmPassword}
      />
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
};

SignupForm.propTypes = {
  newUser: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};
export default SignupForm;
