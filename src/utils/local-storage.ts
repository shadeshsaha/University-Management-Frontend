// local storage a 2 ta jinish set korte hoy, key & value. key hocche jei name a set korbo, r value hocche jei jinish ta set korbo.

export const setToLocalStorage = (key: string, token: string) => {
  // validate access token otherwise server will crash
  if (!key || typeof window === "undefined") {
    return "";
  }

  // access token thakle
  localStorage.setItem(key, token);
};
