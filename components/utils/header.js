 "use client"
import { UtilContext } from "@/lib/context/utilContext";
import Switch from "./switch";
import { useContext } from "react";
import { AuthContext } from "@/lib/context/authContext";

export default function Header() {

    const { userSession, setLoggedOut } = useContext(AuthContext);
    const { setIsCustomerActive } = useContext(UtilContext);

    const handleToggle = (value) => {
        setIsCustomerActive(value);
    }

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="w-auto flex-center">
                    {/* <div className="w-[2rem] h-2[rem] flex-col-center bg-indigo-500 bg-blend-color">
                        <img src="/sky-logo.png" className="w-full h-full mix-blend-screen" />
                    </div> */}
                    <span className="text-2xl font-bold text-white font-serif ml-2">Sky Studio</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
            </div>
            <div className="navbar-end">
            </div>
        </div>
    )
}