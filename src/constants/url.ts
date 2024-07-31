const API_PREFIX = '/v1';
const BASE_NAME_USER = `/users${API_PREFIX}`;

export const URL_PATH = {
  // MARK: USER SERVICES
  userSignup: `${BASE_NAME_USER}/signup`,
  userLogin: `${BASE_NAME_USER}/login`,
  guestLogin: `${BASE_NAME_USER}/guest-login`,
  getUserProfile: `${BASE_NAME_USER}/profile`,
};
