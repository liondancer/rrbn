import React from "react";

const LostPasswordForm = ({
  onSubmit,
  onChange,
}: {
  onSubmit: any;
  onChange: any;
}): JSX.Element => (
  <form onSubmit={onSubmit}>
    <input name="email" type="email"></input>
    <input name="password" type="password"></input>{" "}
  </form>
);

export default LostPasswordForm;
