// import "./styles.css";
import React, { FunctionComponent, useEffect, useMemo } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
    Legend,
    Label
} from "recharts";

const CustomizedLabel = (props) => {
    const { x, y, stroke, value } = props;

    return (
        <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
            {value}
        </text>
    );
};

const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={16}
                textAnchor="end"
                fill="#666"
                transform="rotate(-35)"
            >
                {payload.value}
            </text>
        </g>
    );
};




const AreaChartEx1 = (props) => {
    const data = props.data;
    const chartTitle = props.title;
    const subTitle = props.subTitle;

    console.log(data);

    useEffect(() => {
        // minMax();
    })

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label}`}</p>
                    <p className="label">{`${subTitle} : ${payload[0].value}`}</p>
                </div>
            );
        }

        return null;
    };

    const customizedGroupTick = (props) => {
        const { index, x, y, payload } = props;

        console.log(payload);
        return (
            <g>
                <g>
                    <text x={x} y={y}>
                        {y}
                    </text>
                    <text x={x} y={y}>
                        {y}
                    </text>
                </g>
            </g>
        );
    };

    // const minMax = () => {
    //     const dataCopy = data;
    //     // data.sort(function(a, b) { return a[y]-[b]});
    //     // console.log(data);

    //     const sorted =  dataCopy.sort((a, b) => {
    //         return a['y'] - (b['y'])
    //     }); 
    //     console.log(sorted);
    //     return sorted;
    // }


    return (

        <>

            <h4>CHCGILDT - past 30 Days</h4>
            <h5> {chartTitle} <span className="ml-5">Max: {Math.max(...data.map(d => d.y))}</span> <span className="ml-3">Min: {Math.min(...data.map(d => d.y))}</span></h5>

            <ResponsiveContainer width="95%" height={400}>
                <AreaChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10
                    }}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" height={60} interval={1} tick={<CustomizedAxisTick />} />
                    <YAxis type="number" allowDecimals={true} axisLine={true} interval={0} domain={['dataMin', 'auto']} tickCount={6} tickFormatter={tick => {
                        return tick.toLocaleString();
                    }}>
                        <Label
                            value="Past 30 Days"
                            position="insideLeft"
                            angle={-90}
                            style={{ textAnchor: 'middle' }}
                        />
                    </YAxis>

                    {/* <Tooltip content={<CustomTooltip />} /> */}
                    <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                    <Area dataKey="y" stroke="rgb(51, 102, 204)" strokeWidth="2" fillOpacity="0.3"
                        fill="rgb(51, 102, 204)">
                        {/* <LabelList content={<CustomizedLabel />} /> */}
                    </Area>
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}

export default AreaChartEx1;