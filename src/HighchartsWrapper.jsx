import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import _ from 'underscore';

class HighchartsWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.chart = null;
    }

    componentDidMount() {
        const {
            chartId,
            constructorType,
            options,
            chartLoadedCallback,
            theme,
            highcharts,
        } = this.props;

        // Disable license
        options['credits'] = {
            enabled: false,
        };

        // Set default chart theme
        if (!_.isEmpty(theme)) {
            highcharts.setOptions(theme);
        }

        // Create the chart
        this.chart = highcharts[constructorType](
            chartId,
            options,
            _.isFunction(chartLoadedCallback) ? chartLoadedCallback : undefined
        );
    }

    componentWillUnmount() {
        // Destroy the chart
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }

    componentDidUpdate(prevProps) {
        if (
            this.chart &&
            this.props.allowToUpdate &&
            !_.isEqual(this.props, prevProps)
        ) {
            // https://api.highcharts.com/class-reference/Highcharts.Chart.html#update
            this.chart.update(this.props.options, true, true, true);
        }
    }

    render() {
        const { chartId, height } = this.props;

        // Create a div for the chart
        return (
            <div style={{ position: 'relative', height }}>
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}
                    id={chartId}
                />
            </div>
        );
    }
}

HighchartsWrapper.propTypes = {
    chartId: PropTypes.string.isRequired,
    constructorType: PropTypes.string,
    options: PropTypes.object,
    allowToUpdate: PropTypes.bool,
    chartLoadedCallback: PropTypes.func,
    height: PropTypes.string,
    theme: PropTypes.object,
    highcharts: PropTypes.object,
};

HighchartsWrapper.defaultProps = {
    constructorType: 'chart',
    allowToUpdate: true,
    height: '600px',
    options: {},
    highcharts: Highcharts,
};

export default HighchartsWrapper;
