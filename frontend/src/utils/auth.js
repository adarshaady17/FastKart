export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("user");
};

export const removeUser = () => {
  localStorage.removeItem("user");
};
