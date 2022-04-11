import React from 'react'
import Sidebar from './Sidebar';
import Table from './Table';

function Home() {
  return (
    <div className="w-full flex">
      <div className="w-1/12 ">
        <Sidebar />
      </div>
      <div className="w-10/12 bg-slate-50 my-6 rounded-lg ">
        <Table />
      </div>
    </div>
  );
}

export default Home