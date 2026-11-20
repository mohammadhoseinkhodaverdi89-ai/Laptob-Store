import { laptops } from "../dataBase";
function Product() {
    const result = laptops.slice(0, 10)
    return (
        <div className="overflow-hidden w-full">
            <div className="flex gap-7">
                {result.map((item) => (
                    <div key={item.id} className="w-[180px] shrink-0">
                        <img src={item.photo} alt="" className="w-full"/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Product