import React from 'react'
import Paper from '@mui/material/Paper';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const SideNavbar = () => {
    const navigate = useNavigate();
  return (
    

<>
<Paper elevation={4} sx={{display:'flex',flexDirection:'column',marginLeft:'18px',marginRight:'18px',backgroundColor:'#f5f5f5',marginBottom:'10px'}}>
  <div className='leftpanel' >
    <Sidebar>
      <Menu
      menuItemStyles={{
        button: {
          // the active class will be added automatically by react router
          // so we can use it to style the active menu item
          [`&.active`]: {
            backgroundColor: 'blue',
            color: '#b6c8d9',
          },
        },
      }}
      >
        <MenuItem component={<Link to="/basicsettings" />}> Basic Settings </MenuItem>
        <MenuItem component={<Link to="/sourceforms" />}> Source Forms </MenuItem>
        <MenuItem component={<Link to="/calculatedcolumns" />}> Calculated Columns </MenuItem>
        <MenuItem component={<Link to="/aggregation" />}> Aggregation </MenuItem>
        <MenuItem component={<Link to="/columns" />}>  Columns </MenuItem>
        <MenuItem component={<Link to="/controlpanel" />}>  Control Panel </MenuItem>
      
      </Menu>
    </Sidebar>    
  </div>
  <div >

  {/* <button onClick={() => navigate(-1)} variant='success'>Previous</button>
      <button onClick={() => navigate(1)}>Next</button> */}
      {/* <Button variant="success" onClick={() => navigate(1)}>Next</Button>
      <Button variant="info" onClick={() => navigate(-1)}>Previous</Button> */}
  </div>
  </Paper>

</>

  )
}

export default SideNavbar