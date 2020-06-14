import { User } from "./users";

const host = "http://localhost";
const port = 3001;

export async function isUserLoggedIn() {
  const endpoint = "logged_in";
  const url = `${host}:${port}/${endpoint}`;
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();
  console.log("isUserLoggedIn request", data);
  return data;
}

export async function loginUser(
  email: string,
  password: string,
  isRemembered: boolean
) {
  const endpoint = "login";
  const url = `${host}:${port}/${endpoint}`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ email, password, isRemembered }),
  });
  const data = await response.json();
  console.log("Login request", data);
  return data;
}

export async function logoutUser() {
  const endpoint = "logout";
  const url = `${host}:${port}/${endpoint}`;
  const response = await fetch(url, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log("Logout request", data);
  return data;
}
