import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';

import Events from './Events';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

console.log(AppContext)

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={"This is Provider."}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}></EventForm>
        <Events state={state} dispatch={dispatch}></Events>
      </div>
    </AppContext.Provider>
  );
}

export default App;
