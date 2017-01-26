import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h3>React component 1</h3>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
