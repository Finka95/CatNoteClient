import React, {useState} from 'react';
import '../taskElement/taskElement.scss'
import {TaskStatus} from "@/app/ts/enums/taskStatus";
import {Task} from "@/app/ts/interfaces/task";
import {NativeSelect} from "@mui/material";
import ButtonIcon from "@/app/components/ui-components/buttonIcon/buttonIcon";
import Input from "@mui/material/Input";

type Props = {
  defaultValue: TaskStatus,
  task: Task,
  onUpdateTaskTitleClick: any,
  onUpdateTaskStatusClick: any,
  onDeleteTaskClick: any
}

const TaskElement = (props: Props) => {
  const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(props.task.title || "")

  const updateTask = async () => {
    const task: Task = {
      id: props.task.id,
      title: newTitle,
      status: props.task.status,
      date: props.task.date,
      userId: props.task.userId
    };

    await props.onUpdateTaskTitleClick(task)
    setShowUpdateInput(false);
  }
  const deleteTask = async () => {
    await props.onDeleteTaskClick(props.task.id)
  }

  const closeUpdateInput = async() => {
    setShowUpdateInput(false);
    setNewTitle(props.task.title || "");
  }

  return(
    <>
      {!showUpdateInput &&
        <div className="taskElement">
          <div className="taskElement__title">
            {props.task.title}
          </div>

          <div className="taskElement__select">
            <NativeSelect
              defaultValue={props.defaultValue}
              onChange={(event) => props.onUpdateTaskStatusClick(props.task, event.target.value)}
            >
              <option className="taskElement__select__option" value={TaskStatus.ToDo}>Todo</option>
              <option className="taskElement__select__option" value={TaskStatus.InProgress}>InProgress</option>
              <option className="taskElement__select__option" value={TaskStatus.Done}>Done</option>
            </NativeSelect>
          </div>

          <div className="taskElement__edit">
            <ButtonIcon onClick={() => setShowUpdateInput(true)} type="edit"/>
          </div>

          <div className="taskElement__delete">
            <ButtonIcon onClick={deleteTask} type="close"/>
          </div>
        </div>}

      {showUpdateInput &&
        <div className="taskElement__input">
          <Input value={newTitle} onChange={(event) => setNewTitle(event.target.value)}/>
          <ButtonIcon onClick={() => updateTask()} type="done"/>
          <ButtonIcon onClick={() => closeUpdateInput()} type="close"/>
        </div>
      }
    </>
  )
}

export default TaskElement;
