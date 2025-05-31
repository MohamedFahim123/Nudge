

interface authEndPointsInterface {
  login: string;
  logout: string;
  register: string;
  resetPassword: string;
  forgetPassword: string;
}

export const authEndPoints: authEndPointsInterface = {
  login: `login`,
  logout: `logout`,
  register: `register`,
  resetPassword: `reset-password`,
  forgetPassword: `forget-password`,
};
