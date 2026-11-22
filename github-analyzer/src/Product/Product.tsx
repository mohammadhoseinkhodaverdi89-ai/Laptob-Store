import { laptops } from "../dataBase";
import { useRef } from "react";
function Product() {
    const touchStart = useRef(0);
    const touchEnd = useRef(0);
    const containerRef = useRef(null);

    const handleTouchStart  = (e : React.TouchEvent<HTMLDivElement>) => {
        touchStart.current = e.touches[0].clientX
    }
    const handleTouchEnd = (e : React.TouchEvent<HTMLDivElement>) => {
        touchEnd.current = e.changedTouches[0].clientX
    }
    const distance = touchStart.current - touchEnd.current

    if(distance > 50) {
        containerRef.current?.scrollBy({
            left : 300,
            behavior : "smoth"
        })
    }else if(distance <-50){
        containerRef.current?.scrollBy({
            left : -300,
            behavior : "smoth"
        })
    }
    const result = laptops.slice(0, 10)
    return (
        <div className="overflow-hidden w-full">
            <div className="flex gap-7">
                {result.map((item) => (
                    <div key={item.id} className="w-[180px] shrink-0">
                        <img src={item.photo} alt="" className="w-full" />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Product