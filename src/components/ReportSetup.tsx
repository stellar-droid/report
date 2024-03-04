import React from 'react'
import Paper from '@mui/material/Paper';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InfoIcon from '@mui/icons-material/Info';
import '../App.css'
import { Box, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ReportSetup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };
  return (
    <>
      <h1 style={{fontFamily:'TimesNewroman'}}>
      Source Form(s)
      </h1>


      <Paper elevation={4} sx={{display:'flex',marginLeft:'18px',marginRight:'18px',backgroundColor:'#f5f5f5',marginBottom:'10px'}}>
  <div className='leftpanel'>
    <Sidebar>
      <Menu>
        <MenuItem> Basic Settings </MenuItem>
        <MenuItem> Source Forms </MenuItem>
        <MenuItem> Calculated Columns </MenuItem>
      </Menu>
    </Sidebar>    
  </div>
           
 <div className='middlepanel'> 
  <h3 style={{marginTop:'20px',marginLeft:'20px',fontFamily:'TimesNewroman'}}>
    Report Setup - Source Form(s)
  </h3>
  <h5 style={{fontWeight:'lighter',marginLeft:'20px',fontFamily:'TimesNewroman'}}>
  A report can aggregate Submission Data submitted against one or more Forms. Many times, Reports aggregate data from multiple Forms which allow a singular Report UI to visualize connected data stemming from multiple Form Sources.
  </h5>
  <h4 style={{fontWeight:'normal',marginTop:'20px',left:'18px',position:'relative',fontFamily:'TimesNewroman'}}>Choose from the Forms within this Project:
  <Tooltip title="Add" placement="right-start">
              <HelpOutlineIcon fontSize='small'/>
            </Tooltip>  
            <span style={{color:'red'}}>*</span>
  </h4>
        <TextField
          id="outlined-multiline-flexible"
           multiline
          maxRows={4}
          sx={{width:'90%',borderRadius:'5px',border:'1px solid #000',backgroundColor: 'white',marginLeft:'18px',marginBottom:'20px'}}
        />


 <Box>
     <h4 style={{fontWeight:'normal',marginLeft:'18px',fontFamily:'TimesNewroman'}}>Form Connections:
            <Tooltip title="Add" placement="right-start">
              <HelpOutlineIcon fontSize='small'/>
            </Tooltip>  
            </h4>
          <Paper elevation={4} style={{marginLeft:'18px',marginRight:'18px',marginBottom:'18px'}}>
            <Grid container>
                <Grid item xs={6} sx={{position:'relative'}}>
                <h4 style={{fontWeight:'bold',position:'absolute',left:'160px',fontFamily:'TimesNewroman'}}>Base Form </h4>
                </Grid>
                <Grid item xs={6} sx={{position:'relative'}}>
                <h4 style={{fontWeight:'bold',position:'absolute',left:'160px',fontFamily:'TimesNewroman'}}>Joining Form</h4>
                </Grid>
            </Grid>
            <Divider  style={{ top:'50px',position:'relative',backgroundColor:'black'}}/>
            <div>
                 
                      <form >
                      {/* <Col>
      <Row style={{width:'50%',margin:'13px',fontSize:'20px'}}>
      <Form.Label>Base Form</Form.Label><Form.Control placeholder="First name" />
       <Form.Label>Connecting fields of base Form</Form.Label><Form.Control placeholder="First namess" />
        <Form.Label >Base form path to connecting value</Form.Label><Form.Control placeholder="First namess" />
      </Row>
      <Col style={{width:'50%',margin:'13px',fontSize:'20px'}}>
      <Form.Label>Base Form</Form.Label><Form.Control placeholder="First name" />
       <Form.Label>Connecting fields of base Form</Form.Label><Form.Control placeholder="First namess" />
        <Form.Label >Base form path to connecting value</Form.Label><Form.Control placeholder="First namess" />
      </Col>
           </Col> */}
      <Row style={{
        marginTop:'70px'
      }}>
       
      <Col style={{width:'50%',fontSize:'20px',fontFamily:'TimesNewroman'}}>
      <Tooltip title="This is the base form used for the report." placement="right" >
                      <Form.Label as="legend" style={{marginLeft:'10px',fontFamily:'TimesNewroman'}}>
                        Base Form
                        {/* Add the InfoIcon next to the label */}
                        <InfoIcon style={{ marginLeft: '5px' }} fontSize="small" />
                      </Form.Label>
                    </Tooltip><Form.Control placeholder="First name" style={{marginLeft:'10px',width:'90%'}}/>
       <Form.Label style={{marginLeft:'10px',fontFamily:'TimesNewroman'}}>Connecting fields of base Form</Form.Label><Form.Control  style={{marginLeft:'10px',width:'90%'}} placeholder="First namess" />
        <Form.Label style={{marginLeft:'10px' ,fontFamily:'TimesNewroman'}} >Base form path to connecting value</Form.Label><Form.Control  style={{marginLeft:'10px',width:'90%'}} placeholder="First namess" />
      </Col>
      <Col style={{width:'50%',fontSize:'20px',marginTop:'7px'}}>
      <Form.Label style={{marginLeft:'10px',fontFamily:'TimesNewroman'}}>Joining Form</Form.Label><Form.Control  style={{marginLeft:'10px',width:'90%'}} placeholder="First name" />
       <Form.Label style={{marginLeft:'10px',fontFamily:'TimesNewroman'}}>Connecting fields of Joining Form</Form.Label><Form.Control  style={{marginLeft:'10px',width:'90%'}} placeholder="First namess" />
        <Form.Label style={{marginLeft:'10px',fontFamily:'TimesNewroman'}}>Joining form path to connecting value</Form.Label><Form.Control  style={{marginLeft:'10px',width:'90%'}} placeholder="First namess" />
      </Col>
        </Row>     
        <Button variant="success" type="submit" style={{margin:'10px',fontFamily:'TimesNewroman'}}>
        Save
      </Button>
      <Button variant="danger" type="submit" style={{margin:'10px',fontFamily:'TimesNewroman'}}>
        Cancel
      </Button>
           </form> 
            </div>
          </Paper>
      
   </Box>
 </div>

      </Paper>

    </>
  )
}

export default ReportSetup