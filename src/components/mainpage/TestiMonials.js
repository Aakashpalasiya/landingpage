import React from 'react'

const TestiMonials = () => {
  return (
    <>
      <div className="bg-white py-16">

       <div className='flex justify-center items-center flex-col gap-2'>
       <h1 className='text-center text-2xl'>TESTMONIALS</h1>
        <div className="border border-b-2 flex justify-center items-center border-yellow-500 w-10 mt-4 h-1 bg-yellow-500 "/>

       </div>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 mt-3">What People are Saying</h2>

        <div className="grid text-start grid-cols-4 gap-8">
          <div className="bg-white rounded-lg  p-6">
            <div className="text-yellow-500 text-2xl mb-4">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="text-gray-700">"A Great Find"</p>
            <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu ante eu lectus ornare porta."</p>
            <p className="mt-4">- Divi</p>
          </div>

          <div className="bg-white text-start rounded-lg  p-6">
            <div className="text-yellow-500 text-2xl mb-4">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="text-gray-700">"Wonderful Experience"</p>
            <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <p className="mt-4">- Jane</p>
          </div>

          <div className="bg-white text-start rounded-lg  p-6">
            <div className="text-yellow-500 text-2xl mb-4">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="text-gray-700">"Highly Recommended"</p>
            <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
            <p className="mt-4">- John</p>
          </div>

          <div className="bg-white text-start rounded-lg  p-6">
            <div className="text-yellow-500 text-2xl mb-4">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="text-gray-700">"Excellent Service"</p>
            <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <p className="mt-4">- Sarah</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TestiMonials