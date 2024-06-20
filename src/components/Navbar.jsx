import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <nav className="bg-[#34495e]">

            <div className="flex justify-between w-[90vw] mx-auto py-[10px]">

                <img src={Logo} alt="logo" className="w-[100px] h-[50px]" />

                <ul className="list-none flex justify-center items-center gap-x-7 text-white text-[20px]">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar
