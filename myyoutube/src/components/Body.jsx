import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className="flex  max-h-screen">
        <SideBar />
        <MainContainer />
    </div>
  )
}

export default Body