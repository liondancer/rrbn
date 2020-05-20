import React from "react";

const ProfileForm = ({
  firstname,
  lastname,
}: {
  firstname: string;
  lastname: string;
}) => {
  return (
    <form>
      <label>
        First Name: <input name="firstname" placeholder={firstname}></input>
      </label>
      <label>
        Last Name: <input name="lastname" placeholder={lastname}></input>
      </label>
    </form>
  );
};

export default ProfileForm;
