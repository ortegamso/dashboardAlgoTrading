import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { getCandles } from '../../services/api';

const TradingChart = () => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        backgroundColor: '#ffffff',
        textColor: 'rgba(33, 56, 77, 1)',
      },
      grid: {
        vertLines: {
          color: 'rgba(197, 203, 206, 0.5)',
        },
        horzLines: {
          color: 'rgba(197, 203, 206, 0.5)',
        },
      },
      crosshair: {
        mode: 'normal',
      },
      rightPriceScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
      },
      timeScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: '#4bffb5',
      downColor: '#ff4976',
      borderDownColor: '#ff4976',
      borderUpColor: '#4bffb5',
      wickDownColor: '#ff4976',
      wickUpColor: '#4bffb5',
    });

    const fetchCandles = async () => {
      // In a real implementation, you would fetch data from the API
      // const data = await getCandles('BTCUSDT', '1h');
      // For now, we use sample data
      const data = [
        { time: '2019-04-11', open: 80.01, high: 80.32, low: 79.89, close: 80.04 },
        { time: '2019-04-12', open: 80.04, high: 80.33, low: 79.99, close: 80.08 },
        { time: '2019-04-13', open: 80.08, high: 80.47, low: 80.02, close: 80.32 },
        { time: '2019-04-14', open: 80.32, high: 80.53, low: 80.08, close: 80.42 },
        { time: '2019-04-15', open: 80.42, high: 80.56, low: 80.25, close: 80.51 },
        { time: '2019-04-16', open: 80.51, high: 80.62, low: 80.32, close: 80.54 },
      ];
      candleSeries.setData(data);
    };

    fetchCandles();

    return () => {
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef} />;
};

export default TradingChart;
