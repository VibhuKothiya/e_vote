import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import ConnectionTable from '../../components/ConnectionTable'

const Connection = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2 border-end">
          <Sidebar />
        </div>

        <div className="col-10">
          <ConnectionTable/>
        </div>

      </div>
    </>
  )
}

export default Connection
