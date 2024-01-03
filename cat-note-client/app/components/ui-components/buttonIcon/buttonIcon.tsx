import React from 'react';
import Button from '@mui/material/Button';
import '../buttonIcon/buttonIcon.scss'
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

type Props = {
  onClick: any,
  type: string
}

const ButtonIcon = (props: Props) => {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div className="buttonIcon">
      <button onClick={() => handleClick()}>
        {
          props.type === "close"
            ? <CloseIcon/>
            : props.type === "edit"
              ? <EditIcon/>
              : <DoneIcon/>
        }
      </button>
    </div>
  )
}

export default ButtonIcon;
