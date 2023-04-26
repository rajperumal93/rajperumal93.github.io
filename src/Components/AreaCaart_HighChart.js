import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AreaCaart_HighChart = () => {

    const areaSpline = {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'CHCGILDT - past 30 Days',
            align: 'center'
        },
        subtitle: {
            text: 'OSNR (dB)             Max: 24    Min: 21.1',
            align: 'center'
        },
        legend: {
            // layout: 'vertical',
            // align: 'left',
            // verticalAlign: 'top',
            // x: 120,
            // y: 70,
            // floating: true,
            // borderWidth: 1,
            // backgroundColor:
            //     Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
        },
        xAxis: {
            // plotBands: [{ // Highlight the two last years
            //     from: 1,
            //     to: 25,
            //     color: 'rgba(68, 170, 213, .2)'
            // }]

            categories: ['Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2020', 'Q2 2020',
                'Q3 2020', 'Q4 2020', 'Q1 2021', 'Q2 2021', 'Q3 2021']
        },
        yAxis: {
            title: {
                text: 'Past 30 Days'
            }
        },
        tooltip: {
            shared: true,
            headerFormat: '<b>OSNR (dB) {point.x}</b><br>'
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Total production',
            data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7
            ]
        }],
        plotOptions: {
            // series: {
            //     pointStart: 2000
            // },
            areaspline: {
                fillOpacity: 0.5
            }
        },

    };

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={areaSpline}
            containerProps={{
                style: {
                    height: "100%",
                    width: "100%",
                    margin: "auto",
                },
            }}
        />
    )

}

export default AreaCaart_HighChart;