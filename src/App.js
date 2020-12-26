import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home/Home';
import NewTask from './Components/NewTask/NewTask';
import CurrentTasks from './Components/CurrentTasks/CurrentTasks';
import CompletedTasks from './Components/CompletedTasks/CompletedTasks';

import {
  Route,
  Switch
} from 'react-router-dom'


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/newTask" component={NewTask}></Route>
      <Route path="/currentTasks" component={CurrentTasks}></Route>
      <Route path="/completedTasks" component={CompletedTasks}></Route>
    </Switch>
  );
}

export default App;
