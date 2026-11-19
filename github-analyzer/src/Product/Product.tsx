import { laptops } from "../dataBase";
function Product(){
    return(
        <div>
            {laptops.map((item) => (
                <div key={item.id}>
                    <img src={item.photo} alt="" />
                </div>
            ))}
        </div>
    )
}
export default Product