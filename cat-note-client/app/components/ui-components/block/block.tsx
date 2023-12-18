import React from 'react';
import Paper from '@mui/material/Paper';
import './block.scss';

type Props = {
  text: string
}

const Block = (props : Props) => {
  return (
    <Paper className='blockPaper' variant='outlined'>
      {props.text}
    </Paper>
  )
}

export default Block;
