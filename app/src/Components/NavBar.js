import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header className="flex justify-between block h-20 items-center bg-white">
            <h1 className="text-left flex pl-6">
                <div className="text-black text-xl not-italic font-bold">Khayr</div><div className="text-blue-800 text-xl not-italic font-bold">Connect</div>
            </h1>
            <NavLink to="/login" className="w-40 text-right border-black rounded-full border-2 mr-4 bg-blue-800 border-blue-800 px-6">
                <div className="text-base not-italic font-normal text-white">
                    Nous Rejoindre
                </div>
            </NavLink>
        </header>
    );
}

export default NavBar;