import React from 'react'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'

import initialData from './initialData'
import Column from './Column'

const Container = styled.div`
  display:flex;
`

class Home extends React.Component {
  state = initialData

  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const startColumn = this.state.columns[source.droppableId]
    const finishColumn = this.state.columns[destination.droppableId]

    if (startColumn === finishColumn) { // el elemento se movio en la misma columna
      const newTaskIds = Array.from(startColumn.taskIds)
      newTaskIds.splice(source.index, 1) // eliminar
      newTaskIds.splice(destination.index, 0, draggableId) // insertar

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }

      console.log("TCL: Home -> newState", newState)
      this.setState(newState)
      return
    }

    // Moving from one list to another
    const startTaskIds = Array.from(startColumn.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...startColumn,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finishColumn.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finishColumn,
      taskIds: finishTaskIds
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }
    this.setState(newState)
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(
              taskId => this.state.tasks[taskId]
            )

            return (
              <Column key={column.id} column={column} tasks={tasks} />
            )
          })}
        </Container>
      </DragDropContext>
    )
  }
}


export default Home