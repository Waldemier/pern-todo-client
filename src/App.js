import { Fragment } from 'react';
import './App.css';
//components
import { Input } from './Components';

function App() {
  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <div style={{ width: 500 }}>
          <h1>Todo react app</h1>
          <Input />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
