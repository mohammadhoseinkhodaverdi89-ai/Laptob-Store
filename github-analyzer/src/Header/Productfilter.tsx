import { laptops } from "../dataBase";

type Laptobs = typeof laptops
interface propsFilter {
    Allfilter : () => propsFilter[]
}

function Filter({Allfilter}) {

}