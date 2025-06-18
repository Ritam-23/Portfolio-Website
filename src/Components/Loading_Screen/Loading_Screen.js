import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Spline from '@splinetool/react-spline';
import Loader from './Loader.js';
const Loading_Screen = () => {
    return (_jsxs("div", { className: "relative w-screen h-screen overflow-hidden flex items-center justify-center", style: {
            backgroundImage: 'radial-gradient(circle at center, #ffffff10,rgb(24, 21, 21) 60%, #000000 100%)',
        }, children: [_jsxs(_Fragment, { children: [_jsx("div", { className: " z-10 w-[30rem] h-[30rem] md:hidden rounded-full", children: _jsx(Spline, { scene: "https://prod.spline.design/FAYva7ouHU3dnKkk/scene.splinecode" }) }), _jsx("div", { className: " z-10 hidden md:flex lg:hidden w-[35rem] h-[35rem] rounded-full", children: _jsx(Spline, { scene: "https://prod.spline.design/bTd7a7uwXV7oNLeP/scene.splinecode" }) }), _jsx("div", { className: " z-10 hidden lg:flex w-[40rem] h-[40rem] rounded-full", children: _jsx(Spline, { scene: "https://prod.spline.design/fJq3EtxCTkPxTmlN/scene.splinecode" }) })] }), _jsx("div", { className: "absolute z-20 mt-[28rem] md:mt-[38rem]", children: _jsx(Loader, {}) })] }));
};
export default Loading_Screen;
