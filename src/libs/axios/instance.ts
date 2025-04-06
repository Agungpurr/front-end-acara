import environment from "@/config/environment";
import { SessionExtended } from "@/types/Auth";
import axios from "axios";

import { getSession } from "next-auth/react";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  async (request) => {
    const Session: SessionExtended | null = await getSession();
    if (Session && Session.accessToken) {
      request.headers.Authorization = `Bearer ${Session.accessToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
