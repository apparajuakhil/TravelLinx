import axios from "axios";

export const baseURL = process.env.REACT_APP_BACKEND_URL;


export default (history=null) => {
  //const baseURL = "https://b0a4-2600-1700-65aa-d910-c745-6851-1ffa-3cac.ngrok.io/"
  // const baseURL = "http://myhotelbalancer-31160494.us-east-1.elb.amazonaws.com";
  // const baseURL = "http://localhost:3001";
  let headers = {};

  if (localStorage.token) {
    headers.Authorization = `${localStorage.token}`;
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
    //validateStatus: () => true
  });

  // axiosInstance().interceptors.response.use(
  //   (response) =>
  //     new Promise((resolve, reject) => {
  //       resolve(response);
  //     }),
  //   (error) => {
  //     if (!error.response) {
  //       return new Promise((resolve, reject) => {
  //         reject(error);
  //       });
  //     }
  //     if (error.response.status === 403) {
  //       localStorage.removeItem("token");
  //       if (history) {
  //         history.push("/login");
  //       } else {
  //         window.location = "/login";
  //       }
  //     } else {
  //       return new Promise((resolve, reject) => {
  //         reject(error);
  //       });
  //     }
  //   }
  // );

  return axiosInstance;
};
