import React from 'react'
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

function Alerts(props) {
  return (
    props.alert &&
    <div>
       <Alert severity={props.alert.type}>

        <AlertTitle>{props.alert.type}</AlertTitle>
        <strong>{props.alert.message}</strong>
      </Alert>
    </div>
  )
}

export default Alerts
