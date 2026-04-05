import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    AST analyzer for Plagiarism Detection
                </h1>
                <div className="flex gap-8 text-lg font-medium">
                    <NavLink to="/" className={({ isActive }) => `tranisition duration-300 hover:text-cyan-400 ${isActive ? "text-cyan-400" : ""}`}>
                        Home
                    </NavLink>
                    <NavLink to="/compare" className={({ isActive }) => `tranisition duration-300 hover:text-purple-400 ${isActive ? "text-purple-400" : ""}`}>
                        Compare
                    </NavLink>
                    <NavLink to="/report" className={({ isActive }) => `tranisition duration-300 hover:text-pink-400 ${isActive ? "text-pink-400" : ""}`}>
                        Report
                    </NavLink>
                    <NavLink to="/history" className={({ isActive }) => `tranisition duration-300 hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`}>
                        History
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;