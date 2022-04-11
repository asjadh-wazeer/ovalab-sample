import React from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

function Bar() {
  return (
    <div>
      <div className="flex w-full  justify-between my-8">
        <div className="w-1/5 mt-1 ml-4 text-slate-800 text-xl font-bold">
          Submissions
        </div>
        <div className="flex items-start w-4/5  ">
          <h5 className="text-md py-1 px-2 rounded-lg mr-3 bg-slate-800 text-white">
            Today
          </h5>
          <h5 className="text-3xl text-slate-800 mr-3">
            <BsFillCloudArrowUpFill />
          </h5>
          <h5 className="text-3xl text-slate-800 mr-3">
            <MdOutlineLocalPostOffice />
          </h5>
          <label className=" flex-col  grid justify-items-end mr-1 ">
            <input
              type="text"
              name="name"
              className="border-slate-300 border-2 pl-2 rounded-md"
              placeholder="Status..."
            />
            <p className="text-sm font-semibold mr-1">129</p>
          </label>
          <label className=" flex-col  grid justify-items-end mr-1 ">
            <input
              type="text"
              name="name"
              className="border-slate-300 border-2 pl-2 rounded-md"
              placeholder="Facility/Location..."
            />
          </label>
          <label className=" flex-col  grid justify-items-end ">
            <input
              type="text"
              name="name"
              className="border-slate-300 border-2 pl-2 rounded-md"
              placeholder="Search Patient..."
            />
            <p className="text-sm font-semibold text-red-600">Search by...</p>
          </label>
          <h5 className="text-3xl text-slate-800 mr-3">
            <FaRegCalendarAlt />
          </h5>
          <h5 className="text-3xl text-slate-800 mr-3">
            <FaRegCalendarAlt />
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Bar;
