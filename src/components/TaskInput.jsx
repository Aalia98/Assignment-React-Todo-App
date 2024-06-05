import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, updateTodo } from '../redux/features/todo/todoSlice'

function TaskInput() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const todoToEdit = useSelector(state => state.todoToEdit)

    const addTodoHandler = (e) => {
        e.preventDefault();
        todoToEdit ? dispatch(updateTodo(input)) : dispatch(addTodo(input))
        setInput('')
    }

    useEffect(() => {
      todoToEdit && setInput(todoToEdit.text)
    } ,[todoToEdit])

  return (
    // add todo
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-slate-200 text-black rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {todoToEdit? "Update Todo" : "Add Todo"}
      </button>
    </form>
  )
}

export default TaskInput