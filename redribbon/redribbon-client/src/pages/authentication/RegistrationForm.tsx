import React from "react";

const RegistrationForm = ({
  onSubmit,
  onChange,
}: {
  onSubmit: any;
  onChange: any;
}): JSX.Element => (
  <form onSubmit={onSubmit} onChange={onChange}>
    <input name="email" type="email" placeholder="Email"></input>
    <input name="password" type="password" placeholder="Password"></input>
    <input
      name="passwordConfirmation"
      type="password"
      placeholder="Confirm Password"
    ></input>
    <button type="submit">Register</button>
  </form>
);

export default RegistrationForm;
