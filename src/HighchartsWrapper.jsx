import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import _ from 'underscore';

function HighchartsWrapper(props) {
    const chart = useRef(null);

    useEffect(() => {
        // Set default chart theme
        if (!_.isEmpty(props.theme)) {
            props.highcharts.setOptions(props.theme);
        }

        // Create the chart
        chart.current = props.highcharts[props.constructorType](
            props.chartId,
            props.options,
            _.isFunction(props.chartLoadedCallback)
                ? props.chartLoadedCallback
                : undefined
        );

        // Add loading screen
        if (_.isEmpty(props.options.series)) {
            chart.current.showLoading('Fetching data...');
        }

        return function cleanup() {
            // Destroy the chart
            if (chart.current) {
                chart.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (props.allowToUpdate) {
            // https://api.highcharts.com/class-reference/Highcharts.Chart.html#update
            chart.current.update(props.options, true, true, true);

            if (_.isEmpty(props.options.series)) {
                chart.current.showLoading('Fetching data...');
            } else {
                chart.current.hideLoading();
            }
        }
    }, [props.options]);

    // Create a div for the chart
    const { height, chartId } = props;

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
