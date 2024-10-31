
import { LineChart, Line, Tooltip } from 'recharts';
const Charts = () => {

   

    const data = [
        { name: 'Student 1', marks: 75 },
        { name: 'Student 2', marks: 88 },
        { name: 'Student 3', marks: 92 },
        { name: 'Student 4', marks: 60 },
        { name: 'Student 5', marks: 85 },
        { name: 'Student 6', marks: 70 },
        { name: 'Student 7', marks: 95 },
        { name: 'Student 8', marks: 78 },
    ];
    return (
        <div>
            <LineChart width={500} height={300} data={data}>
               <Line dataKey="marks"></Line>
               <Tooltip></Tooltip>
            </LineChart>

        </div>
    );
};

export default Charts;