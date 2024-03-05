import React from 'react';
import logo from './logo.svg';
import './App.css';
// import SourceForms from './components/SourceForms';
import MainRoutes from './routes/MainRoutes';
import SideNavbar from './components/SideNavbar';
import Layout from './components/Layout';

function App() {
  return (
    <div style={{ display:'flex' }}>
      
      {/* <SourceForms /> */}
      <SideNavbar />
      {/* <Layout/> */}
      <MainRoutes />
      
    </div>
  );
}

export default App;
