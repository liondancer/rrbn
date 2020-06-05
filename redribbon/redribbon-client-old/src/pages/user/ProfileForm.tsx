import React from "react";

const ProfileForm = ({
  firstname,
  lastname,
  onSubmit,
  onChange,
}: {
  firstname: string;
  lastname: string;
  onSubmit: any;
  onChange: any;
}) => {
  return (
    <form onSubmit={onSubmit} onChange={onChange}>
      <label>
        First Name: <input name="firstname" placeholder={firstname}></input>
      </label>
      <label>
        Last Name: <input name="lastname" placeholder={lastname}></input>
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default ProfileForm;
