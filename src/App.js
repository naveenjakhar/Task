import logo from './logo.svg';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
   <TodoInput />
   <TodoList />
    </div>
  );
}

export default App;
