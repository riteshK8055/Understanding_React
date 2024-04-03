import { IMG_CDN_URL } from "../config"

const FoodItems = ({name , imageId , description , price}) => {

    return (

         
         <div className="w-80 h-fit p-2 m-2 shadow-2xl bg-purple-50">
            <h1 className="font-bold text-lg">{name}</h1>
            <img className="h-80 w-80" src={IMG_CDN_URL + imageId}  />
            <h2>{description}</h2>
            <h3>₹-{price/100}</h3>
        </div>

    )
}

export default FoodItems;