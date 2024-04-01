import React from "react";
import { useState } from "react";

const Section = ({title , description , isVisible , setIsVisible}) => {


    return (

        <div className="border border-black p-2 m-2 ">
            <h3 className="font-bold text-xl">{title}</h3>

            <button
             className="cursor-pointer underline"
             onClick={() =>{ 

                isVisible?setIsVisible(false) : setIsVisible(true)
            }}
            >Show </button>

         {isVisible && <p>{description}</p>}
        </div>

    )

}


const Instamart = () => {

    const [ visibleSection , setVisibleSection] = useState("team");

    return (

       <>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart </h1>
            <Section 
              title = {"About Instamart"}
              description = {"Food is mainly composed of water, lipids, proteins, and carbohydrates. Minerals (e.g., salts) and organic substances (e.g., vitamins) can also be found in food."}

              isVisible={visibleSection === "about"}
              setIsVisible={() => setVisibleSection("about")}
            />

            <Section
               
               title={"Team Instamart"}
               description={"Animals, specifically humans, typically have five different types of tastes: sweet, sour, salty, bitter, and umami. The differing tastes are important for distinguishing between foods that are nutritionally beneficial and those which may contain harmful toxins. As animals have evolved, the tastes that provide the most energy are the most pleasant to eat while others are not enjoyable,[66] although humans in particular can acquire a preference for some substances which are initially unenjoyable Water, while important for survival, has no taste."}

               isVisible={visibleSection === "teams"}
               setIsVisible={() => setVisibleSection("teams")}

            />

            <Section
            
              title={"Careers"}
              description={"Sweetness is almost always caused by a type of simple sugar such as glucose or fructose, or disaccharides such as sucrose, a molecule combining glucose and fructose.[68] Sourness is caused by acids, such as vinegar in alcoholic beverages. Sour foods include citrus, specifically lemons and limes. Sour is evolutionarily significant as it can signal a food that may have gone rancid due to bacteria.[69] Saltiness is the taste of alkali metal ions such as sodium and potassium. It is found in almost every food in low to moderate proportions to enhance flavor. Bitter taste is a sensation considered unpleasant characterised by having a sharp, pungent taste. Unsweetened dark chocolate, caffeine, lemon rind, and some types of fruit are known to be bitter. Umami, commonly described as savory, is a marker of proteins and characteristic of broths and cooked meats.[70] Foods that have a strong umami flavor include cheese, meat and mushrooms."}

                isVisible={visibleSection === "careers"}
               setIsVisible={() => setVisibleSection("careers")}

            />
       </>
    );
};

export default Instamart;