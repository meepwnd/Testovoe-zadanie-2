localStorage.setItem("isAutentificated", false);

export const login = () => {
  localStorage.getItem("isAutentificated", true);
};

export const logout = () => {
  localStorage.getItem("isAutentificated", false);
};
