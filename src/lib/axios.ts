import axios from "axios";

export const Request = axios.create({
  baseURL: "http://193.203.161.214:8000/api/v1",
  headers: {
    Accept: "application/json",
   "Content-Type": "application/json",
  },
  withCredentials: true,
});
