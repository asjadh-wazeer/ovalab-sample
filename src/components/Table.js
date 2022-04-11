import React from "react";
import { useState } from "react";
import Bar from "./Bar";
import Count from "./Count";

function Table() {
  const [datas, setDatas] = useState([
    {
      location: "Colombo",
      created: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      collected: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      received: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      resulted: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      pecimenID: "OEDFVVBHGG",
      fullName: "Chamara Silva",
      dob: "2/09/1990",
      state: "NJ",
      status: "Registered",
      specimenStatus: "Negative",
    },

    {
      location: "Kandy",
      created: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      collected: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      received: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      resulted: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      pecimenID: "OEDFVVBHGG",
      fullName: "Kumar Darmasena",
      dob: "2/09/1990",
      state: "NJ",
      status: "Collected",
      specimenStatus: "Negative",
    },

    {
      location: "Colombo",
      created: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      collected: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      received: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      resulted: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      pecimenID: "OEDFVVBHGG",
      fullName: "Chamara Silva",
      dob: "2/09/1990",
      state: "NJ",
      status: "Registered",
      specimenStatus: "Negative",
    },

    {
      location: "Kandy",
      created: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      collected: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      received: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      resulted: {
        date: "21 Apr 2020",
        time: "11:00 am",
      },
      pecimenID: "OEDFVVBHGG",
      fullName: "Kumar Darmasena",
      dob: "2/09/1990",
      state: "NJ",
      status: "Collected",
      specimenStatus: "Negative",
    },
   
  ]);
  return (
    <div className="w-full">
      <Count />
      <div className="w-11/12 my-16 mx-auto bg-white border-gray-100 border-4 drop-shadow-2xl rounded-lg border-b-0 ">
        <Bar />
        <table className="table-fixed w-full ">
          <thead className="w-full border-b-4 p-44 m-44 border-slate-600 rounded-4xl">
            <tr className="w-full p-44 m-44 ">
              <th>Location</th>
              <th>Created</th>
              <th>Collected</th>
              <th>Received</th>
              <th>Resulted</th>
              <th>Specimen ID</th>
              <th>Full Name</th>
              <th>DOB</th>
              <th>State</th>
              <th>Status</th>
              <th>Specimen Status</th>
            </tr>
          </thead>
          {datas.map((data) => (
            <tbody className="w-full ">
              <tr className="w-full border-b-4 ">
                <td className="pl-5 text-gray-600 font-medium ">
                  {" "}
                  {data.location}
                </td>
                <td className="text-center">
                  <h6 className="text-sm font-semibold mb-1">
                    {data.created.date}
                  </h6>
                  <p className="text-xs font-medium">{data.created.time}</p>
                </td>
                <td className="text-center">
                  <h6 className="text-sm font-semibold mb-1">
                    {data.collected.date}
                  </h6>
                  <p className="text-xs font-medium">{data.collected.time}</p>
                </td>
                <td className="text-center">
                  <h6 className="text-sm font-semibold mb-1">
                    {data.received.date}
                  </h6>
                  <p className="text-xs font-medium">{data.received.time}</p>
                </td>
                <td className="text-center">
                  <h6 className="text-sm font-semibold mb-1">
                    {data.resulted.date}
                  </h6>
                  <p className="text-xs font-medium">{data.resulted.time}</p>
                </td>
                <td className="text-center text-sm font-medium">
                  {data.pecimenID}
                </td>
                <td className="text-center w-1 font-medium">{data.fullName}</td>
                <td className="text-center font-medium">{data.dob}</td>
                <td className="text-center font-medium">{data.state}</td>
                <td className="text-center py-4">
                  <h4
                    className=" py-2 text-white rounded-lg  text-center border-2"
                    style={{
                      backgroundColor:
                        data.status === "Collected"
                          ? "blue"
                          : data.status === "Registered"
                          ? "black"
                          : "red",
                    }}
                  >
                    {data.status}
                  </h4>
                </td>
                <td className="text-center text-sm font-medium">
                  {data.specimenStatus}
                </td>
              </tr>
            </tbody>
          ))}
          {}
        </table>
      </div>
    </div>
  );
}

export default Table;
