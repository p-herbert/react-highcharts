const theme = {
    chart: {
        margin: [75, 75, 75, 75],
        spacing: [25, 25, 25, 25],
        boost: {
            allowForce: true,
            seriesThreshold: 200,
            useGPUTranslations: true,
            usePreAllocated: true,
        },
    },
    navigator: {
        enabled: false,
        yAxis: {
            enabled: false,
        },
    },
    rangeSelector: {
        enabled: false,
    },
    title: {
        style: {
            fontFamily: 'Quicksand',
            fontSize: '18px',
            color: '#002060',
            textDecoration: 'underline',
            fontWeight: 'bold',
        },
    },
    legend: {
        align: 'right',
        style: {
            fontFamily: 'Quicksand',
            fontSize: '12px',
        },
        title: {
            style: {
                fontFamily: 'Quicksand',
                fontSize: '12px',
                color: '#002060',
                fontWeight: 'none',
            },
        },
        itemStyle: {
            fontFamily: 'Quicksand',
            fontSize: '12px',
            fontWeight: 'none',
            cursor: 'pointer',
            color: '#002060',
        },
    },
    tooltip: {
        style: {
            fontFamily: 'Quicksand',
            fontSize: '12px',
            color: '#002060',
            fontWeight: 'none',
        },
        useHTML: true,
    },
    xAxis: {
        title: {
            style: {
                fontFamily: 'Quicksand',
                fontSize: '12px',
            },
        },
        labels: {
            style: {
                fontFamily: 'Quicksand',
                fontSize: '12px',
            },
        },
    },
    yAxis: {
        title: {
            style: {
                fontFamily: 'Quicksand',
                fontSize: '12px',
            },
        },
        labels: {
            style: {
                fontFamily: 'Quicksand',
                fontSize: '12px',
            },
        },
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            dataLabels: {
                style: {
                    fontFamily: 'Quicksand',
                    fontSize: '12px',
                    textOutline: false,
                },
                color: '#002060',
            },
            turboThreshold: 0,
            showInNavigator: true,
        },
    },
};

export default theme;
