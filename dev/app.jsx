import React from 'react';
import ReactDOM from 'react-dom';
import HighchartsWrapper from '../src/HighchartsWrapper';
import _ from 'underscore';
import theme from './assets/theme';
import options from './__chart__/heatmap';
import './assets/index.css';

const highcharts = require('highcharts/highstock');

// Extend with modules
_.each([require('highcharts/modules/heatmap')], module => module(highcharts));

ReactDOM.render(
    <HighchartsWrapper
        chartId={'sample-chart'}
        options={options}
        theme={theme}
        highcharts={highcharts}
    />,
    document.getElementById('app')
);
