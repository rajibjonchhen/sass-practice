import {GiFingernail, GiGoldBar} from "react-icons/gi";
import {MdOutlineHotelClass, MdFolderSpecial} from "react-icons/md";
import {VscSymbolColor} from "react-icons/vsc";

const ServicePricesData=[
 {title:"Simple Services", icon: <GiFingernail/>, img:"https://res.cloudinary.com/dai5duzoj/image/upload/v1659357898/hanna/Screenshot_2022-08-01_at_13.43.30_b8hp2e.png",
services:[
 {service:"Polish colour change on hands", price:"200"},
 {service:"Polish French change on hands", price:"250"},
 {service:"Manicure polish colour", price:"300"},
 {service:"Manicure Polish French", price:"350"},
 {service:"Manicure Shellac colour", price:"430"},
 {service:"Manicure shellac French", price:"480"},
]},
 {title:"Classic Services", icon: <MdOutlineHotelClass/>, img:"https://res.cloudinary.com/dai5duzoj/image/upload/v1659357898/hanna/Screenshot_2022-08-01_at_13.43.39_gfjau0.png",
services:[
{service:"Polish colour change on feet", price:"250"},
{service:"Polish French change on feet", price:"300"},
{service:"Classic pedicure & polish colour", price:"430"},
{service:"Classic pedicure & shellac", price:"530"},
{service:"Classic pedicure & manicure (Polish Combo)", price:"650"},
{service:"Classic pedicure & Manicure (Shellac Combo", price:")790"},
]},
{title:"Luxuary Services", icon: <GiGoldBar/>, img:"https://res.cloudinary.com/dai5duzoj/image/upload/v1659357899/hanna/Screenshot_2022-08-01_at_13.43.59_quhqbr.png",
services:[
{service:"Luxury pedicure & polish colour", price:"530"},
{service:"Luxury pedicure & shellac colour", price:"630"},
{service:"Luxury & French shellac colour", price:"690"},
{service:"Luxury pedicure & manicure (Polish Combo)", price:"750"},
{service:"Luxury pedicure & Manicure (Shellac Combo)", price:"930"},
]},
{title:"Shellac Services", icon: <VscSymbolColor/>, img:"https://res.cloudinary.com/dai5duzoj/image/upload/v1659357898/hanna/Screenshot_2022-08-01_at_13.44.11_jj83fh.png",
services:[
 {service:"Shellac colour on hands", price:"320"},
 {service:"Shellac Frenchon hands", price:"390"},
 {service:"Shellac colour on toenails", price:"350"},
 {service:"Shellac French on toenails", price:"430"},
 {service:"Removed Shellac only", price:"100"},
 {service:"Removed shellac from our salon", price:"30"},
 {service:"Removed shellac from other clinic", price:"60"},
]},
{title:"Special Services", icon: <MdFolderSpecial/>, img:"https://res.cloudinary.com/dai5duzoj/image/upload/v1659357899/hanna/Screenshot_2022-08-01_at_13.44.18_jcqllv.png",
services:[
{service:"Natural new set", price:"530"},
{service:"Refil Natural Acrylic", price:"450"},
{service:"Shellac plus after Acrylic", price:"200"},
{service:"Shellac French after Acrylic", price:"250"},
{service:"Removed Acrylic for service again", price:"150"},
{service:"Removed Acrylic Only", price:"200"},
{service:"Each finger Acrylic repair", price:"50"},
{service:"Each big toenails Acrylic repair", price:"100"},
]},
]

export default ServicePricesData