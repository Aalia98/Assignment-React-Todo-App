import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  
  return (
    <div>
      {/* Add todo in input tag */}
      <TaskInput/>
      {/* show todo */}
      <TaskList/>
    </div>
  )
}

export default App
