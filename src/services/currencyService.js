import { apiClient } from './authService';

export default {
  exchangeRates(from, to) {
    return apiClient.get();
  },
};
