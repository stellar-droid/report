import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import 'font-awesome/css/font-awesome.min.css';
import AddRemoveComponenet from './AddRemoveComponenet';
const Columns = () => {
  const renderTooltip = (props:any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  return (
    
    <>
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <div className="heading">
        <h1>
          Report Setup - Columns
        </h1>
        <p >
        Use the UI below to choose which columns are available to the end user of the Report. Then. select which columns the end user has available by default.
The end user will start out with the default columns shown visually, with an option to choose which of the available columns they wish to see based on
their requirements at runtime.
        </p>

        <h4 style={{fontWeight:'lighter'}}>
        Available Columns 
        <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >

<i className="fa fa-question-circle" aria-hidden="true"></i>
    </OverlayTrigger>

        </h4>
        <AddRemoveComponenet/>
          </div>
        
        </div>
    </>
  )
}

export default Columns


