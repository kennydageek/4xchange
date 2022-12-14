import axios from 'axios';
const API_KEY = 'T0VN4EEVBYI4WB1P';

export const curClient = axios.create({
  baseURL: 'https://www.alphavantage.co/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getExchangeRate(from, to) {
    return curClient.get(
      `query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${API_KEY}`
    );
  },

  getDailyPrice(from, to) {
    return curClient.get(
      `query?function=FX_DAILY&from_symbol=${from}&to_symbol=${to}&apikey=${API_KEY}`
    );
  },
};
