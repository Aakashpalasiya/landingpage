import React from "react";
import fish from '../../utils/fish.jpeg'
import fullfish from '../../utils/fullfish.jpeg'
import bakra from '../../utils/bakra.jpeg'
import crab from '../../utils/crab.jpeg'
import lemon from '../../utils/lemon.jpeg'
import goat from '../../utils/goat.jpeg'
const FoodImageSection = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-black ">
        <div className="w-[80%]  bg-white">
          <div className="grid  grid-cols-3">
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className="text-red-500 font-semibold text-center">$26.90</h1>
              <h3 className="text-center font-semibold">Grilled Fillet</h3>
              <p className="text-center text-gray-500 w-full px-10 ">
             
                Sed ut perspiciatis unde omnis iste error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt
              </p>
            </div>
            <img
            src={fish}
            alt="Dish 3"
            className="w-full h-full object-cover rounded-t-lg"
          />
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className="text-red-500 font-semibold text-center">$53.3</h1>
              <h3 className="text-center font-semibold">Chicken Breast</h3>
              <p className="text-center text-gray-500 w-full px-10 ">
             
                Sed ut perspiciatis unde omnis iste error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt
              </p>
            </div>
          </div>


          <div className="grid  grid-cols-3">
          <img
            src={lemon}
            alt="Dish 3"
            className="w-full h-full object-cover rounded-t-lg"
          />
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className="text-red-500 font-semibold text-center">$26.90</h1>
              <h3 className="text-center font-semibold">Grilled Fillet</h3>
              <p className="text-center text-gray-500 w-full px-10 ">
             
                Sed ut perspiciatis unde omnis iste error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt
              </p>
            </div>
         
            <img
            src={goat}
            alt="Dish 3"
            className="w-full h-full object-cover rounded-t-lg"
          />
          </div>






          <div className="grid  grid-cols-3">
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className="text-red-500 font-semibold text-center">$26.90</h1>
              <h3 className="text-center font-semibold">Grilled Fillet</h3>
              <p className="text-center text-gray-500 w-full px-10 ">
             
                Sed ut perspiciatis unde omnis iste error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt
              </p>
            </div>
            <img
            src={crab}
            alt="Dish 3"
            className="w-full h-full object-cover rounded-t-lg"
          />
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className="text-red-500 font-semibold text-center">$53.3</h1>
              <h3 className="text-center font-semibold">Chicken Breast</h3>
              <p className="text-center text-gray-500 w-full px-10 ">
             
                Sed ut perspiciatis unde omnis iste error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt
              </p>
            </div>
          </div>







           <div className="grid  grid-cols-3">

           <img
            src={fullfish}
            alt="Dish 3"
            className="w-full h-full object-cover rounded-t-lg"
          />
            <div className="flex flex-col justify-center items-center gap-3">
              <h1 className="text-red-500 font-semibold text-center">$26.90</h1>
              <h3 className="text-center font-semibold">Grilled Fillet</h3>
              <p className="text-center text-gray-500 w-full px-10 ">
             
                Sed ut perspiciatis unde omnis iste error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt
              </p>
            </div>
          
            <img
            src={bakra}
            alt="Dish 3"
            className="w-full h-full object-cover rounded-t-lg"
          />
          </div>

          
        </div>
      </div>
    </>
  );
};

export default FoodImageSection;
