import React from "react";
import bakery from "../../utils/bakery.jpeg";
import generator from "../../utils/generator.jpeg";
import florist from "../../utils/florist.jpeg";

const NewsLetter = () => {
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center flex-col">
          <p className="text-base text-center font-normal text-gray-400 "> OUR STORY</p>
          <div className="border border-b-2 border-yellow-500 w-10 mt-4 h-1 bg-yellow-500 "/>
          </div>
          <p className="text-gray-600 text-5xl">Our News And Events</p>
          <p className="text-gray-600 mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg ">
              <img
                src={bakery}
                alt="News 1"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 text-start">
                <p className="text-xl  font-semibold">Nunc Volutpat Venenatis</p>
                <p className="text-red-900 ">CATEGORY</p>{" "}
                <p className="text-gray-700">
                  Nulla a odio sed magna congue condimentum. Pellentesque
                  convallis enim nec libero vulputate, et rhoncus urna placerat.
                  Phasellus mattis, diam vel vehicula facilisis, erat leo
                  dapibus augue, at mollis tellus ex non nisi. Ut faucibus
                  fringilla semper. Aenean nunc ex.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg ">
              <img
                src={generator}
                alt="News 2"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 text-start">
                <p className="text-xl font-semibold">Another News Title</p>
                <p className="text-red-900 ">CATEGORY</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus ac turpis quis augue vulputate lobortis. Fusce
                  iaculis, neque at dictum efficitur, nunc velit ullamcorper
                  eros, non volutpat.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg ">
              <img
                src={florist}
                alt="News 3"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4 text-start">
                <p className="text-xl font-semibold">Yet Another News Title</p>
                <p className="text-red-900 ">CATEGORY</p>{" "}
                <p className="text-gray-700">
                  Cras vehicula eros ac felis bibendum, in iaculis nunc egestas.
                  Nullam eu mauris quis justo lacinia sollicitudin. Donec id
                  elit in ex rhoncus volutpat.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-8 bg-red-500 hover:bg-blue-600 text-white font-semibold py-2 px-4">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
