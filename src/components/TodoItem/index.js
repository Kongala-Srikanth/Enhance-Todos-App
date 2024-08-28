// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, onDeleteClick, onStrick, onEditButton, onSaveButton} = props
  const {id, title, checked, editBtn} = todo

  const onDeleteButton = () => onDeleteClick(id)
  // console.log(checked)
  const titleStyle = checked ? 'title strick' : 'title'

  return (
    <li className="listItem">
      <div className="todo-list-container">
        <input
          type="checkbox"
          className="checked"
          checked={checked}
          id={id}
          onClick={() => onStrick(id)}
        />
        <p className={titleStyle}>{title}</p>
      </div>
      <div>
        {editBtn ? (
          <button className="del-btn" onClick={() => onEditButton(id)}>
            Edit
          </button>
        ) : (
          <button className="del-btn" onClick={() => onSaveButton(id)}>
            Save
          </button>
        )}

        <button className="del-btn" onClick={onDeleteButton}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
