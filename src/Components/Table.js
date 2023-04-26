import { useEffect, useState } from "react";
import Sorting from "./Sorting";

const Table = () => {
    const data = [
        {
            id: 3,
            name: 'Raj'
        },
        {
            id: 1,
            name: 'Lokesh'
        },
        {
            id: 2,
            name: 'Rajesh'
        },
        {
            id: 4,
            name: 'Mukesh'
        },
    ];

    const [arr, setArrData] = useState(data);

    const [sorted, setSorted] = useState([]);

    const sortingAction = (sortName) => {
        const arrCopy = [...arr];

        const sorted = arrCopy.sort((a, b) => {
            return a[sortName] - (b[sortName])
        });
        setArrData(arrCopy);
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th><button onClick={() => { sortingAction('id') }}>ID</button></th>
                        <th><button onClick={() => { sortingAction('name') }}>Name</button></th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </>
    )
}

export default Table;