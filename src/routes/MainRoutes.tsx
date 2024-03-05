import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Aggregation from '../components/Aggregation'
import BasicSettings from '../components/BasicSettings'
import CalculatedColumns from '../components/CalculatedColumns'
import Columns from '../components/Columns'
import ControlPanel from '../components/ControlPanel'
import SourceForms from '../components/SourceForms'
import Layout from '../components/Layout'
const MainRoutes = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout/>}
    >

        <Route path="/aggregation" element={<Aggregation />} />
        <Route path="/basicsettings" element={<BasicSettings />} />
        <Route path="/calculatedcolumns" element={<CalculatedColumns />} />
        <Route path="/columns" element={<Columns />} />
        <Route path="/controlpanel" element={<ControlPanel />} />
        <Route path="/sourceforms" element={<SourceForms />} />
    </Route>

    </Routes>
    
    </>
  )
}

export default MainRoutes