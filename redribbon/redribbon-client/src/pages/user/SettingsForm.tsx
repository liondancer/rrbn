import React from "react";

const SettingsForm = () => {
  return (
    <form>
      <label>
        Password: <input name="password" placeholder="password"></input>
      </label>
      <label>
        Last Name:
        <input name="confirmPassword" placeholder="confirm password"></input>
      </label>
    </form>
  );
};

export default SettingsForm;
