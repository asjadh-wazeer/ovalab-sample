import React from 'react'

function Sidebar() {
  return (
    <div>
      <img
        src="https://ovalab.com/assets/img/new-ova-lab-logo.png"
        alt="logo"
        className="w-32 ml-2 mt-4"
      />
      <ul className="font-extrabold font-sans text-xl text-slate-800 mt-4 ml-2 cursor-pointer">
        <li className="pb-3 hover:text-sky-400">Intake</li>
        <li className="pb-3 hover:text-sky-400">Date</li>
        <li className="pb-3 hover:text-sky-400">Users</li>
        <li className="pb-3 hover:text-sky-400">Locations</li>
        <li className="pb-3 hover:text-sky-400">Scheduler</li>
        <li className="pb-3 hover:text-sky-400">Report</li>
        <li className="pb-3 hover:text-sky-400">Antigen</li>
        <li className="pb-3 hover:text-sky-400">Billing</li>
        <li className="pb-3 hover:text-sky-400">Pull Results</li>
        <li className="pb-3 hover:text-orange-400 text-orange-500">Log out</li>
        <li className="pb-3 hover:text-sky-400">DB</li>
        <li className="pb-3 hover:text-sky-400">Logs</li>
      </ul>
    </div>
  );
}

export default Sidebar