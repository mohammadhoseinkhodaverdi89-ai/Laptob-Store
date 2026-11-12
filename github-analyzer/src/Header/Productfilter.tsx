import { laptops } from "../dataBase";
type Laptobs = typeof laptops
interface propsFilter {
    Allfilter : () => Laptobs[]
}

function Filter({Allfilter}:propsFilter) {
    return(
        <div>
            {laptops.map((item,index) => (
                <div key={index}>
                    <p>{item.model}</p>
                </div>
            ))}
        </div>
    )
}
export default Filter