'use client'

import React, {useEffect, useState} from 'react';
import './tasksNode.scss';
import {Task} from "@/app/ts/interfaces/task";
import ButtonClick from "@/app/components/ui-components/buttonClick/buttonClick";
import Input from '@mui/material/Input';
import {TaskStatus} from "@/app/ts/enums/taskStatus";
import ButtonIcon from "@/app/components/ui-components/buttonIcon/buttonIcon";
import TaskElement from "@/app/components/ui-components/taskElement/taskElement";

type Props = {
  tasks: Task[],
  onTaskCreate: any,
  onTaskUpdate: any,
  onTaskDelete: any
}

const TasksNode = (props: Props) => {
  const [newTask, setNewTask] = useState<Task>();
  const [userTasks, setUserTasks] = useState<Task[]>();

  useEffect(() => {
    setUserTasks(props.tasks)
  }, []);

  function openInputCreateTaskClick() {
    const today = new Date

    setNewTask({
      title: "",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      status: TaskStatus.ToDo,
      userId: Number(localStorage.getItem("targetUserId" || 0))
    });
  }

  const createTaskClick = async () => {
    await props.onTaskCreate(newTask);
    setNewTask(undefined);
  }

  const updateTaskStatusClick = async (task: Task, value: string) => {
    const updateTask: Task = {
      id: task.id,
      title: task.title,
      status: value === "2"
        ? TaskStatus.InProgress
        : value === "3"
          ? TaskStatus.Done
          : TaskStatus.ToDo,
      date: task.date,
      userId: task.userId
    }
    await props.onTaskUpdate(updateTask);
  }

  const deleteTaskClick = async (taskId: number) => {
    await props.onTaskDelete(taskId);
  }

  function closeUpdateTaskClick() {
    setNewTask(undefined);
  }

  return (
    <div className="tasksNode">
      <div className="tasksNode__header">
        <div className="tasksNode__header__leftCircle"></div>
        <div className="tasksNode__header__title">Tasks</div>
        <div className="tasksNode__header__rightCircle"></div>
      </div>
      <div className="tasksNode__createTask">
      <div className="tasksNode__createTask__button">
          <ButtonClick onClick={() => openInputCreateTaskClick()} text="Create task"/>
        </div>

        {newTask &&
          <div className="tasksNode__createTask__input">
            <Input value={newTask.title} onChange={(event) => setNewTask(prevState => ({
              ...prevState,
              title: event.target.value
            } as Task))}/>
            <ButtonIcon onClick={() => createTaskClick()} type="done"/>
            <ButtonIcon onClick={() => closeUpdateTaskClick()} type="close"/>
          </div>
        }
      </div>

      <div className="tasksNode__userTasks">
        <div className="tasksNode__userTasks__toDo">
          {props.tasks.filter(task => task.status === TaskStatus.ToDo).map(task =>
            <TaskElement
              key={task.id}
              defaultValue={TaskStatus.ToDo}
              task={task}
              onUpdateTaskTitleClick={(task : Task) => props.onTaskUpdate(task)}
              onUpdateTaskStatusClick={updateTaskStatusClick}
              onDeleteTaskClick={deleteTaskClick}
            />
          )}
        </div>

        <div className="tasksNode__userTasks__inProgress">
          {props.tasks.filter(task => task.status === TaskStatus.InProgress).map(task =>
            <TaskElement
              key={task.id}
              defaultValue={TaskStatus.InProgress}
              task={task}
              onUpdateTaskTitleClick={(task : Task) => props.onTaskUpdate(task)}
              onUpdateTaskStatusClick={updateTaskStatusClick}
              onDeleteTaskClick={deleteTaskClick}
            />
          )}
        </div>

        <div className="tasksNode__userTasks__done">
          {props.tasks.filter(task => task.status === TaskStatus.Done).map(task =>
            <TaskElement
              key={task.id}
              defaultValue={TaskStatus.Done}
              task={task}
              onUpdateTaskTitleClick={(task : Task) => props.onTaskUpdate(task)}
              onUpdateTaskStatusClick={updateTaskStatusClick}
              onDeleteTaskClick={deleteTaskClick}
            />
          )}
        </div>
      </div>
    </div>
  )
}
export default TasksNode;
