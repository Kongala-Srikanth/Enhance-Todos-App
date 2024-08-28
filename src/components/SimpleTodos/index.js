import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: []}

  componentDidMount() {
    this.setState({
      todoList: initialTodosList.map(each => ({
        id: each.id,
        title: each.title,
        checked: false,
        editBtn: true,
      })),
    })
  }

  onDelete = uniqueId => {
    const {todoList} = this.state
    const fileterTodoList = todoList.filter(each => each.id !== uniqueId)
    this.setState({todoList: fileterTodoList})
  }

  onInput = event => this.setState({inputVal: event.target.value})

  onAdd = () =>
    this.setState(prevState => ({
      todoList: [
        ...prevState.todoList,
        {
          id: uuidv4(),
          title: prevState.inputVal,
          checked: false,
          editBtn: true,
        },
      ],
      inputVal: '',
    }))

  onStrick = id =>
    this.setState(prevState => ({
      todoList: prevState.todoList.map(each => {
        if (id === each.id) {
          return {
            id: each.id,
            title: each.title,
            checked: !each.checked,
            editBtn: each.editBtn,
          }
        }
        return each
      }),
    }))

  onEditButton = id => {
    let val = ''
    this.setState(prevState => ({
      todoList: prevState.todoList.map(each => {
        if (id === each.id) {
          val = each.title
          return {
            id: each.id,
            title: each.title,
            checked: each.checked,
            editBtn: !each.editBtn,
          }
        }
        return each
      }),
      inputVal: val,
    }))
  }

  onSaveButton = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(each => {
        if (id === each.id) {
          return {
            id: each.id,
            title: prevState.inputVal,
            checked: each.checked,
            editBtn: !each.editBtn,
          }
        }
        return each
      }),
      inputVal: '',
    }))
  }

  render() {
    const {todoList, inputVal} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="main-heading">Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter the text"
              className="input-box"
              onChange={this.onInput}
              value={inputVal}
            />
            <button type="button" className="add-btn" onClick={this.onAdd}>
              Add
            </button>
          </div>
          <ul>
            {todoList.map(each => (
              <TodoItem
                key={each.id}
                todo={each}
                onStrick={this.onStrick}
                onDeleteClick={this.onDelete}
                onEditButton={this.onEditButton}
                onSaveButton={this.onSaveButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
