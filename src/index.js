import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import tasksReducer, {initialState} from './reducer';
import TaskCreator from './TaskCreator';
import TasksList from './TasksList';
import { Provider } from 'react-redux';

const store = createStore(tasksReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
      <TaskCreator />
      <TasksList />
    </Provider>,
  document.getElementById('root')
);

