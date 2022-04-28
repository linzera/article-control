import api from './api';

type LoginResponse = {
  accessToken: string;
};

const login = (email: string, password: string) => {
  return api.post<LoginResponse>('/authenticate', { email, password });
};

const authentication = {
  login,
};

export default authentication;
