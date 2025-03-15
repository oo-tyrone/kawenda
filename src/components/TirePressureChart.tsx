'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import useAppStore from '@/store/useAppStore';

// Mock data for the chart
const generateMockData = (days = 7) => {
  const data = [];
  const now = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toISOString().split('T')[0],
      frontLeft: 2.2 + Math.random() * 0.2,
      frontRight: 2.3 + Math.random() * 0.2,
      rearLeft: 2.4 + Math.random() * 0.2,
      rearRight: 2.4 + Math.random() * 0.2,
    });
  }
  
  return data;
};

interface TirePressureChartProps {
  vehicleId?: string;
  timeRange?: '7d' | '30d' | '90d';
}

const TirePressureChart = ({ 
  vehicleId = 'demo-vehicle',
  timeRange = '7d' 
}: TirePressureChartProps) => {
  const { locale } = useAppStore();
  const [data, setData] = useState(() => {
    const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
    return generateMockData(days);
  });
  
  const handleTimeRangeChange = (range: '7d' | '30d' | '90d') => {
    const days = range === '7d' ? 7 : range === '30d' ? 30 : 90;
    setData(generateMockData(days));
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">
          {locale === 'zh' ? '胎压监测数据' : 'Tire Pressure Monitoring Data'}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => handleTimeRangeChange('7d')}
            className={`px-3 py-1 text-sm rounded ${
              timeRange === '7d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {locale === 'zh' ? '7天' : '7 Days'}
          </button>
          <button
            onClick={() => handleTimeRangeChange('30d')}
            className={`px-3 py-1 text-sm rounded ${
              timeRange === '30d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {locale === 'zh' ? '30天' : '30 Days'}
          </button>
          <button
            onClick={() => handleTimeRangeChange('90d')}
            className={`px-3 py-1 text-sm rounded ${
              timeRange === '90d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {locale === 'zh' ? '90天' : '90 Days'}
          </button>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              label={{ 
                value: locale === 'zh' ? '日期' : 'Date', 
                position: 'insideBottomRight', 
                offset: -10 
              }} 
            />
            <YAxis 
              label={{ 
                value: locale === 'zh' ? '胎压 (bar)' : 'Pressure (bar)', 
                angle: -90, 
                position: 'insideLeft' 
              }} 
            />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="frontLeft" 
              name={locale === 'zh' ? '左前轮' : 'Front Left'} 
              stroke="#8884d8" 
              activeDot={{ r: 8 }} 
            />
            <Line 
              type="monotone" 
              dataKey="frontRight" 
              name={locale === 'zh' ? '右前轮' : 'Front Right'} 
              stroke="#82ca9d" 
            />
            <Line 
              type="monotone" 
              dataKey="rearLeft" 
              name={locale === 'zh' ? '左后轮' : 'Rear Left'} 
              stroke="#ffc658" 
            />
            <Line 
              type="monotone" 
              dataKey="rearRight" 
              name={locale === 'zh' ? '右后轮' : 'Rear Right'} 
              stroke="#ff8042" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TirePressureChart; 