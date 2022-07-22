const isUserLogin = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  isUserLogin,
  getUser,
  getIsFetchingCurrent,
};
export default authSelectors;
