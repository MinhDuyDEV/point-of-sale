import axios from "axios";

export const API = axios.create({
  baseURL: "https://localhost:3000",
  headers: {
    "Content-Type": "Application/json",
  },
});

export const APIPrivate = axios.create({
  baseURL: "https://localhost:3000",
  headers: {
    "Content-Type": "Application/json",
  },
});
