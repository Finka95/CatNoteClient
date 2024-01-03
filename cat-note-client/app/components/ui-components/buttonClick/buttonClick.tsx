'use client'

import React from 'react';
import Button from '@mui/material/Button';
import '../buttonClick/buttonClick.scss'

type Props = {
  onClick: any,
  text: string
}

const ButtonClick = (props: Props) => {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div className="buttonClick">
      <Button onClick={() => handleClick()}>{props.text}</Button>
    </div>
  )
}

export default ButtonClick;
