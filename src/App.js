import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Loading_Screen from './Components/Loading_Screen/Loading_Screen.js';
import './index.css';
import Navbar from './Components/Navbar/Navbar.js';
import SplashCursor from './Components/Cursor/SplashCursor.js';
const App = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 7500);
        return () => clearTimeout(timer);
    }, []);
    return (_jsx(_Fragment, { children: loading ? (_jsx(Loading_Screen, {})) : (_jsxs(_Fragment, { children: [_jsx(SplashCursor, {}), _jsx(Navbar, {})] })) }));
};
export default App;
