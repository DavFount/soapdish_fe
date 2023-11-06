import { api } from './index';

export const setup = (store) => {
  api.interceptors.request.use(
    (config) => {
      const authStore = store();
      const token = authStore.user.accessToken;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const authStore = store();
      const originalRequest = error.config;
      if (error.response.status == 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const results = await authStore.refreshToken();
          api.defaults.headers.common['Authorization'] = `Bearer ${results.data}`;
          return api(originalRequest);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
};
