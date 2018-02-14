import Home from './components/Home';
import ToDoList from './components/ToDoList';
import ToDoHeader from './components/ToDoHeader';

export default [
  {
    exact: true, path: '/', key: 'home', component: Home,
  },
  {
    path: '/todo', key: 'toDo', component: ToDoList, header: ToDoHeader,
  },
];
