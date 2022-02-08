import React, { useState } from 'react';
import './App.css';
import JSONdata from './data';
import './components/Dialog.js'

const App = () => {
  const [data, setData] = useState(JSONdata);

  return (
    <div className='comments-column'>
      {data.comments.map((comment) => {
        return (
          {/* Comment Component */}
        )
      })}
      {/* New Comment Component */}
    </div>
  );
}

export default App;
