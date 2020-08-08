import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const SignupConfirmationForm = ({
  confirmationCode,
  onSubmit,
  onChange,
  saving = false,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        name="confirmationCode"
        label="Confirmation Code"
        type="tel"
        value={confirmationCode}
        onChange={onChange}
        autoFocus={true}
      />
      <div className="text-muted">Please check your email for the code</div>
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Verifying..." : "Verify"}
      </button>
    </form>
  );
};

SignupConfirmationForm.propTypes = {
  confirmationCode: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default SignupConfirmationForm;
