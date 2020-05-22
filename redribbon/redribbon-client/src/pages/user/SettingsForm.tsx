import React from "react";

const SettingsForm = () => {
  return (
    <form>
      <label>
        Email: <input name="email" placeholder="email"></input>
      </label>
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
