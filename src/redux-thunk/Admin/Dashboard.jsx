import React, { useEffect } from 'react'
import '../../App.css'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import CounterVote from '../../components/CounterVote';


const Dashboard = () => {

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2 border-end">
          <Sidebar />
        </div>

        <div className="col-10">
          <h1 className='mt-3' style={{textAlign: "center"}}>Welcome To Our Dashboard</h1>
          <CounterVote />
        </div>

      </div>
    </>

  )
}

export default Dashboard;
