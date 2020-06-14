import React from "react";

const LoginForm = ({
  onSubmit,
  onChange,
}: {
  onSubmit: any;
  onChange: any;
}): JSX.Element => (
  <form onSubmit={onSubmit} onChange={onChange}>
    <input name="email" type="email" placeholder="Email"></input>
    <input name="password" type="password" placeholder="Password"></input>
    <input name="isRemembered" type="checkbox" defaultChecked></input>
    <button type="submit">Login</button>
  </form>
);

export default LoginForm;
