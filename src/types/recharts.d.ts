// @ts-nocheck
// 禁用此文件的类型检查，以避免ESLint错误

import * as React from 'react';

declare module 'recharts' {
  export class LineChart extends React.Component<any> {}
  export class ResponsiveContainer extends React.Component<any> {}
  export class CartesianGrid extends React.Component<any> {}
  export class XAxis extends React.Component<any> {}
  export class YAxis extends React.Component<any> {}
  export class Tooltip extends React.Component<any> {}
  export class Legend extends React.Component<any> {}
  export class Line extends React.Component<any> {}
} 