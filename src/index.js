// Set up your application entry point here...
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <p>Hello World</p>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);