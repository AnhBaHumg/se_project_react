//json-server --watch db.json --id _id --port 3001

import { processServerResponse } from "./utils";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr.pantech.vn"
    : "http://localhost:3001";

export const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(processServerResponse);
};

export const postItems = ({ name, imageUrl, weather }) => {
  const jwt = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(processServerResponse);
};

export const likeClothingItem = (_id) => {
  const jwt = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  }).then(processServerResponse);
};

export const dislikeClothingItem = (_id) => {
  const jwt = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  }).then(processServerResponse);
};

export const deleteItems = (_id) => {
  const jwt = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  }).then(processServerResponse);
};
