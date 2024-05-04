import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import ElectionTable from '../../components/ElectionTable'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Election = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2 border-end">
          <Sidebar />
        </div>

        <div className="col-10">
          <ElectionTable />
        </div>

      </div>
    </>

  )
}

export default Election
