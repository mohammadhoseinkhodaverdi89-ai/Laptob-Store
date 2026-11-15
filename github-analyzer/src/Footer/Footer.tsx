
import { LayoutGrid, ShoppingCart, Heart, House } from "lucide-react";

const items = [
    { id: 1, icon: House, title: "خانه" },
    { id: 2, icon: LayoutGrid, title: "دسته بندی" },
    { id: 3, icon: ShoppingCart, title: "سبد خرید" },
    { id: 4, icon: Heart, title: "علاقه مندی ها" }
]

function Footer() {
    return (
        <footer className="w-full fixed bottom-0 flex justify-between border border-gray-200 rounded-t-2xl py-3 px-4 shadow-[0_-5px_4px_rgba(0,0,0,0.15)] backdrop-blur-md">
            {items.map((item) => {
                const Icon = item.icon
                return (
                    <div className="group flex flex-col items-center" key={item.id}>
                        <p className="transition-all duration-300 group-hover:text-blue-600"><Icon className="transition-all duration-100 group-hover:fill-blue-600"/></p>
                        <p className="text-xs text-gray-800 flex flex-col items-center transition-colors duration-300 group-hover:text-blue-600">{item.title}</p>
                    </div>
                )
            })}
        </footer>
    );
}

export default Footer;
