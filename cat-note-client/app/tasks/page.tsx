'use client'

import React from 'react';
import ReactFlow, { Controls, Background, useNodesState } from 'reactflow';
import InitialNodes from './initialElements';
import 'reactflow/dist/style.css';
import './page.scss';

function TasksPage() {
  const[nodes, setNodes, onNodesChange] = useNodesState(InitialNodes);

  return (
    <div className='tasksPage'>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        fitView
        nodesDraggable
      >
        <Background className='tasksPage__background'/>
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default TasksPage;
