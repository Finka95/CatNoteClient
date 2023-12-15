'use client'

import React from 'react';
import ReactFlow, { Controls, Background, addEdge, useEdgesState, useNodesState } from 'reactflow';
import InitialNodes from './initialElements';
import 'reactflow/dist/style.css';
import './page.scss';

function TasksPage() {
  const nodeStyle = {
    color: '#0041d0',
    borderColor: '#0041d0',
  };

  const[nodes, setNodes, onNodesChange] = useNodesState(InitialNodes);

  return (
    <div className='tasksPage'>
      <ReactFlow
        className='tasksPage__reactFlow'
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
