import { processServerResponse } from "./utils";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.pantech.vn"
    : "http://localhost:3001";
const baseHeaders = { "Content-Type": "application/json" };

export function login({ email, password }) {
    return fetch(`${baseUrl}/signin`, {
      method: "POST",
      headers: baseHeaders,
      body: JSON.stringify({ email, password }),
    }).then(processServerResponse);
  }
  
  export function update({ name, avatar }, token) {
    return fetch(`${baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, avatar }),
    }).then(processServerResponse);
  }
  
  export function register({ name, avatar, email, password }) {
    return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: baseHeaders,
      body: JSON.stringify({ name, avatar, email, password }),
    }).then(processServerResponse);
  }
  
  export function checkToken(token) {
    return fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(processServerResponse);
  }