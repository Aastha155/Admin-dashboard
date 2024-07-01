// src/pages/Kanban.js
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = {
  todo: [
    { id: 'task-1', content: 'Task 1' },
    { id: 'task-2', content: 'Task 2' }
  ],
  inProgress: [],
  done: []
};

const Kanban = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceTasks = Array.from(tasks[source.droppableId]);
    const [removed] = sourceTasks.splice(source.index, 1);
    const destinationTasks = Array.from(tasks[destination.droppableId]);
    destinationTasks.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceTasks,
      [destination.droppableId]: destinationTasks
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {Object.keys(tasks).map(columnId => (
        <Droppable droppableId={columnId} key={columnId}>
          {provided => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ margin: '8px', border: '1px solid lightgrey', borderRadius: '2px', padding: '8px', width: '220px' }}
            >
              <h4>{columnId}</h4>
              {tasks[columnId].map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{ padding: '8px', margin: '0 0 8px 0', border: '1px solid lightgrey', borderRadius: '2px', background: 'white' }}
                    >
                      {task.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

export default Kanban;
