import {useState} from 'react';

const ThemeChange = () => {

    const [theme, setTheme] = useState('lightTheme');
    const themeChange = () => {
        setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
    }

    return (
        <div className={`dashboard ${theme}`}>
            <div className="container">
                <h1>Dashboard</h1>
                <button onClick={themeChange}>Dark</button>
            </div>
        </div>
    )
}

export default ThemeChange;