import React from "react";

const SettingsForm = ({
  onSubmit,
  onChange,
}: {
  onSubmit: any;
  onChange: any;
}) => {
  return (
    <form onSubmit={onSubmit} onChange={onChange}>
      <label>
        Email: <input name="email" placeholder="email"></input>
      </label>
      <label>
        Password: <input name="password" placeholder="password"></input>
      </label>
      <label>
        Confirm Password:
        <input name="confirmPassword" placeholder="confirm password"></input>
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default SettingsForm;
