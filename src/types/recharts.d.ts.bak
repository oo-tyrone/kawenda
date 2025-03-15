import * as React from 'react';

declare module 'recharts' {
  export interface LineChartProps {
    width?: number;
    height?: number;
    data?: any[];
    margin?: {
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    };
    children?: React.ReactNode;
    [key: string]: any;
  }

  export class LineChart extends React.Component<LineChartProps> {}
  
  export interface ResponsiveContainerProps {
    width?: number | string;
    height?: number | string;
    children?: React.ReactNode;
    [key: string]: any;
  }
  
  export class ResponsiveContainer extends React.Component<ResponsiveContainerProps> {}
  
  export interface CartesianGridProps {
    strokeDasharray?: string;
    [key: string]: any;
  }
  
  export class CartesianGrid extends React.Component<CartesianGridProps> {}
  
  export interface XAxisProps {
    dataKey?: string;
    label?: any;
    [key: string]: any;
  }
  
  export class XAxis extends React.Component<XAxisProps> {}
  
  export interface YAxisProps {
    label?: any;
    [key: string]: any;
  }
  
  export class YAxis extends React.Component<YAxisProps> {}
  
  export interface TooltipProps {
    [key: string]: any;
  }
  
  export class Tooltip extends React.Component<TooltipProps> {}
  
  export interface LegendProps {
    [key: string]: any;
  }
  
  export class Legend extends React.Component<LegendProps> {}
  
  export interface LineProps {
    type?: string;
    dataKey?: string;
    name?: string;
    stroke?: string;
    activeDot?: any;
    [key: string]: any;
  }
  
  export class Line extends React.Component<LineProps> {}
} 