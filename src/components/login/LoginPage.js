import React, { useState } from "react";
import LoginForm from "./LoginForm";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  function formIsValid() {
    return email.length > 0 && password.length > 0;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.info(email, password);
  }

  return (
    <LoginForm
      email={email}
      password={password}
      onChange={handleChange}
      onSave={handleSubmit}
      errors={errors}
      saving={saving}
    />
  );
}
export default LoginPage;
