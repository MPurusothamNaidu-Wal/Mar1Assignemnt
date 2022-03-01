import logo from './logo.svg';
import './App.css';

import TodoApp from './TodoApp';
import TodoObContext from './TodoObContext'

function App() {
  const todoOb=[{ item: "Cricket" }]
  return (
    <div className="App">
      <h1>TODO App</h1>
      
      <TodoObContext.Provider value={todoOb}>
        <TodoApp/>
      </TodoObContext.Provider>
    </div>
  );
}

export default App;
