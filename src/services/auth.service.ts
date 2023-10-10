import { setToLocalStorage } from "@/utils/local-storage";

// this function receive user's access token
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  setToLocalStorage("accessToken", accessToken as string);
};
