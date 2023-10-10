import { authKey } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

// this function receive user's access token
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
  //   return setToLocalStorage("accessToken", accessToken as string);
};

// To get user's info, get access token then decode it.
export const getUserInfo = () => {
  // getUserInfo get korbe ekta data from local storage and return it.
  const authToken = getFromLocalStorage(authKey);
  // const authToken = getFromLocalStorage("accessToken")
  // console.log("authToken: ", authToken); // it gives encoded data

  // check authLocalStorageData is exist or not.
  if (authToken) {
    // exist korle decode kora hobe. get howa token ta decodedToken() function k pass kora hobe, shei function ta access token k decode kore dibe and user er information ta pass kore dibe.
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

// User ta ache kina token a seta check
export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

// authKey = accessToken
