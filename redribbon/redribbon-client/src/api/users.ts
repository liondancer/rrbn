export interface User {
  firstname: string;
  lastname: string;
  email: string;
}

const host = "http://0.0.0.0";
const port = 3001;

export interface Profile extends User {}

export async function signUpUser(
  first_name: string,
  last_name: string,
  email: string,
  password: string
) {
  const endpoint = "users";
  const url = `${host}:${port}/${endpoint}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: { first_name, last_name, email, password } }),
  });
  console.log("debug", response);
  const data = await response.json();
  console.log("SignUp request", data);
  return data;
}
export async function editProfile() {}
