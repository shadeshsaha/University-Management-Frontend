import jwtDecode from "jwt-decode";

// will receive the access token and this function will decode the token
export const decodedToken = (token: string) => {
  return jwtDecode(token); // decode kore decoded info ta return kore dibe.
};
