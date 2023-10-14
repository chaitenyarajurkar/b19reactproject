import axios from "axios";
import { isExpired, decodeToken } from "react-jwt";
axios.interceptors.request.use(function (config) {
  // Do something before request is sent

  //here we check that token is there 
  const token = localStorage.getItem("access_token");
  console.log(decodeToken(token));
  if (token !== null) {
    // then we check that token is  exp or not 
    const isMyTokenExpired = isExpired(token);
    if (!isMyTokenExpired) {
      // hit add to cart api
      return config;
    }
    else {
      // if token expire then show login page
      window.location.reload("/")

    }

  }






  console.log("heelo before requset to api");



}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log("heelo after respnse recieve");
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axios;