import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        x: "02-14 13:00:00",
        y: 20

    },
    {
        x: "02-17 13:00:00",
        y: 22.5
    },
    {
        x: "02-20 13:00:00",
        y: 23
    },
    {
        x: "02-23 13:00:00",
        y: 10
    },
    {
        x: "02-26 13:00:00",
        y: 10.5
    },
    {
        x: "03-01 13:00:00",
        y: 15
    },
    {
        x: "03-04 13:00:00",
        y: 25.5
    },
    {
        x: "03-07 13:00:00",
        y: 24
    },
    {
        x: "03-10 13:00:00",
        y: 23.5
    },
    {
        x: "03-13 13:00:00",
        y: 15.5
    }
];

const AreaChartEx1 = () => {

    

    return (
        <div>
            <h4>CHCGILDT - past 30 Days</h4>
            <h5>OSNR (dB)             Max: 24    Min: 21.1</h5>
            <ResponsiveContainer width="95%" height={400}>
            <AreaChart
                width={1000}
                height={200}
                data={data}
                syncId="anyId"
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x"  axisLine={true} domain = {['auto', 'auto']}  tickFormatter = {(x) => x} interval={0} tick={<CustomizedAxisTick />}/>
                <YAxis dataKey="y"  allowDecimals={true} axisLine={false} domain = {['auto', 'auto']}/>
                <Tooltip />
                <Area  dataKey="y"  stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            </ResponsiveContainer>
            {/* <AreaChart
                width={500}
                height={200}
                data={data}
                syncId="anyId"
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart> */}
        </div>
    );
}

export default AreaChartEx1;