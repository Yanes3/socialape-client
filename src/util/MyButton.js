import React from 'react' ;
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

export default({ children, OnClick , tip , btnClassName , tipClassName }) => (
    <Tooltip title={tip} className={tipClassName} placement="top">
        <IconButton onClick={OnClick} className={btnClassName} >
            {children}
        </IconButton>
     </Tooltip>   
)
