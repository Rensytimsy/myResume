import react, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const handleNav = () => {
        setOpen(!open);
    }
    return (
        <nav className="bg-white-600 text-black px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold"><a href="/">Timothy Dev</a></div>
            <button
                onClick={handleNav}
                id="menu-toggle" className="block md:hidden text-2xl">
                ☰
            </button>
            <ul
                id="menu"
                className="hidden md:flex space-x-6 md:space-x-8 text-sm font-medium items-center"
            >
                <li>
                    <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li>
                    <Link to="/projects" className="hover:underline">Projects</Link>
                </li>
                {/* <li>
                    <Link to="/cv" className="hover:underline">CV</Link>
                </li> */}
            </ul>
        </div>

        <ul
            className={`${open ? "block" : "hidden"
                } fixed top-0 right-0 h-screen w-[60%] bg-white text-black border-l px-8 py-3 flex flex-col space-y-4 z-50 transition-transform duration-300`}
        >
            <li className="flex justify-between items-center">
                    <span></span>
                    <ClearIcon
                    onClick={handleNav}
                    className="text-gray-500 hover:text-black-800 cursor-pointer" />
            </li>
            <li>
                <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
                <Link to="/projects" className="hover:underline">Projects</Link>
            </li>
            {/* <li>
                <Link to="/cv" className="hover:underline">CV</Link>
            </li> */}
        </ul>
    </nav>
    )
}