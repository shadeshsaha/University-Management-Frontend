// local storage a 2 ta jinish set korte hoy, key & value. key hocche jei name a set korbo, r value hocche jei jinish ta set korbo.

export const setToLocalStorage = (key: string, token: string) => {
  // validate access token otherwise server will crash
  if (!key || typeof window === "undefined") {
    return "";
  }

  // access token thakle
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  // validate access token otherwise server will crash
  if (!key || typeof window === "undefined") {
    return "";
  }

  // access token thakle
  return localStorage.getItem(key);
};
