export const isLoggedIn = () => {
    return localStorage.getItem("user") !== null;
  };
  
  export const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  
  export const removeUser = () => {
    localStorage.removeItem("user");
  };
  
  export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };
  