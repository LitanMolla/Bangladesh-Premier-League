import Container from "../Container/Container"
import logo from '../../assets/logo.png'
import { LuCircleDollarSign } from "react-icons/lu"
import { HiCurrencyDollar } from "react-icons/hi"
import { HiMiniCurrencyDollar } from "react-icons/hi2"
const Navbar = ({blance}) => {
  return (
    <>
        <header className="py-5">
            <Container>
                <nav className="flex justify-between items-center flex-col md:flex-row">
                    <div>
                        <img className="w-18" src={logo} alt="Logo" />
                    </div>
                    <div className="">
                        <ul className="flex gap-5 items-center flex-col md:flex-row">
                            <li className="text-black/70 duration-300 hover:text-black cursor-pointer">Home</li>
                            <li className="text-black/70 duration-300 hover:text-black cursor-pointer">Fixture</li>
                            <li className="text-black/70 duration-300 hover:text-black cursor-pointer">Teams</li>
                            <li className="text-black/70 duration-300 hover:text-black cursor-pointer">Schedules</li>
                            <button className="flex items-center px-5 py-2 border border-gray-300 rounded-xl gap-2"><span className=" font-bold"> {blance} Coin</span> <HiMiniCurrencyDollar className="text-[#a37d00]" /> </button>
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    </>
  )
}

export default Navbar