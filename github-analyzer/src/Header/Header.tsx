import { UserRound } from "lucide-react";
import { Menu } from "lucide-react"
import { Logs } from "lucide-react"
import { Laptop } from "lucide-react";
function Header() {
    return (
               <header className="w-full h-full flex items-center justify-between">
            <div>
                <UserRound size={26} className="sm:w-8 sm:h-8"/>
            </div>
            <div className="flex">
                <h1 className="font-semibold text-xl">Laptob<span className="text-blue-600">Store</span></h1>
                <p className="text-blue-600"><Laptop size={26} className="sm:w-8 sm:h-8"/></p>
            </div>
            <div>
                <Menu size={26} className="sm:w-8 sm:h-8"/>
            </div>
        </header>
    )
}
export default Header