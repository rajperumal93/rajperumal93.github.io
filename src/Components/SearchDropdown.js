import { useState, useMemo } from "react";

const SearchDropdown = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    const [selectedColor, setSelectedColor] = useState('');

    const filterColors = (e) => {
        const { value } = e.target;
        setSelectedColor(value);
    }
    
    const filterList = colors.filter(c => {
        return c.toLowerCase().includes(selectedColor.toLowerCase());
    })

    return (
        <div>
            <h5>Search</h5>
            <input type='text' value={selectedColor} onChange={(e) => { filterColors(e) }} />
            <ul>
                {
                    filterList.map(c =>
                        <li key={c}>{c}</li>
                    )
                }
            </ul>

        </div >
    )

}

export default SearchDropdown;