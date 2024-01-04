import React, {useEffect} from 'react';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './block.scss';

type Props = {
  text: string,
  id: number,
  label: string,
  checked: boolean,
  handleChange: any
}

const Block = (props : Props) => {
  useEffect(() => {

  }, [props.checked]);

  return (
    <Paper className='blockPaper' variant='outlined'>
      <div>{props.id} | {props.text}</div>

      <div className="blockPaper__checkbox">
        <FormControlLabel
          control={
            <Checkbox
              checked={props.checked}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChange(event, props.id)}
            />
        }
          label={props.label}
        />
      </div>
    </Paper>
  )
}

export default Block;
