import axios from 'axios';

const API_URL = '/api/v1'; // Adjust this to your backend URL

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example function to get candle data
export const getCandles = async (symbol, timeframe) => {
  try {
    // This is a placeholder. In a real app, you'd fetch from an endpoint like:
    // const response = await apiClient.get(`/candles/${symbol}/${timeframe}`);
    // return response.data;
    console.log(`Fetching candles for ${symbol} with timeframe ${timeframe}`);
    return []; // Return empty array for now
  } catch (error) {
    console.error('Error fetching candles:', error);
    return [];
  }
};

// Example function for backtesting
export const runBacktest = async (strategy) => {
  try {
    // const response = await apiClient.post('/backtesting', strategy);
    // return response.data;
    console.log('Running backtest with strategy:', strategy);
    return {
      pnl: 1234.56,
      sharpe_ratio: 1.5,
      max_drawdown: 0.1,
      trades: [],
    };
  } catch (error) {
    console.error('Error running backtest:', error);
    return null;
  }
};

// Example function to get active bots
export const getActiveBots = async () => {
  try {
    // const response = await apiClient.get('/bots');
    // return response.data;
    console.log('Fetching active bots');
    return [
      { id: 1, name: 'EMA Cross Bot', status: 'running', pnl: 567.89 },
      { id: 2, name: 'RSI Bot', status: 'paused', pnl: -123.45 },
    ];
  } catch (error) {
    console.error('Error fetching bots:', error);
    return [];
  }
};
