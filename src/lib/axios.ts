import axios from "axios";

export const Request = axios.create({
  baseURL: "https://shrawantravels.com/fusion/api/v1",
  headers: {
    Accept: "application/json",
   "Content-Type": "application/json",
  },
  withCredentials: true,
});
