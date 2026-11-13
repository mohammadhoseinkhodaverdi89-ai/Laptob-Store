import { laptops } from "../dataBase";
type Laptobs = typeof laptops
interface propsFilter {
    filtered : Laptobs
}

function Filter({filtered}):propsFilter {
    return(
        <div>
            {filtered.map((item) => (
                <div key={item.id}>
                    <p>{item.model}</p>
                </div>
            ))}
        </div>
    )
}
export default Filter