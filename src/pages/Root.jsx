import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbvar from '../components/Navbvar'

export default function Root() {
  return (
    <div>
        <Navbvar />
        <Outlet />
    </div>
  )
}
