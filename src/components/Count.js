import React from 'react'

function Count() {
  return (
    <div className="w-full flex justify-between mt-8">
      <div className="bg-blue-700 w-80 py-4 px-3 text-white font-semibold text-lg rounded-lg drop-shadow-xl">
        <h3 className="pb-4">COLLECTED TODAY</h3>
        <h1 className="grid justify-items-end text-3xl">0</h1>
      </div>

      <div className="bg-red-600 w-80 py-4 px-3 text-white font-semibold text-lg rounded-lg drop-shadow-xl">
        <h3 className="pb-4">FAILED LAB TRANSFER TODAY</h3>
        <h1 className="grid justify-items-end text-3xl">0</h1>
      </div>

      <div className="bg-green-600 w-80 py-4 px-3 text-white font-semibold text-lg rounded-lg drop-shadow-xl">
        <h3 className="pb-4">TRANSFERED TO LAB TODAY</h3>
        <h1 className="grid justify-items-end text-3xl">0</h1>
      </div>
    </div>
  );
}

export default Count