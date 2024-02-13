import React from "react";
import productimage from "../../utils/product.jpeg";
const WelcomeSection = () => {
  return (
    <>
      <div className="min-h-screen flex m-10 w-[100%] gap-20 justify-center ">
        <div className="w-[35%] bg-white p-8">
          <p className="text-base text-left font-normal text-gray-400 "> OUR STORY</p>
          <div className="border border-b-2 border-yellow-500 w-10 mt-4 h-1 bg-yellow-500 "/>
          <h1 className="text-5xl font-medium mb-4 mt-10 text-left">
            Welcome to Royal
          </h1>
          <p className="text-base text-gray-700 text-left leading-{12} mt-10">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit. doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit. Doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto. Sed ut perspiciatis unde omnis iste
           
          </p>
        </div>

        <div className="w-[35%]">
          <img
            src={productimage} 
            alt="Right Image"
            className="h-90 w-full object-cover"
            height={500}
            width={300}
          />
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
