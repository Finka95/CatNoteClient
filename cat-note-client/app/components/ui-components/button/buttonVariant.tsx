import React from 'react';
import Button from '@mui/material/Button';
import './buttonVariant.scss';

type Props = {
  route: string,
  variant:string,
  text: string
}

const ButtonVariant = (props : Props) => {
  return (
    <div className={props.variant == "outlined" ? "buttonVariant": ""}>
      <Button href={`${props.route}`} variant={props.variant == "outlined" ? "outlined": "contained"}>{props.text}</Button>
    </div>
  );
};

export default ButtonVariant;
