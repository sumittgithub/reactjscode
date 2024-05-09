import React from 'react';
import ReactDOM from 'react-dom';
import Goal from './App';
import Car from './propsexample';

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

const rootElement = document.getElementById('root');

const renderApp = () => {
  ReactDOM.render(
    <React.Fragment>
      <Goal isGoal={false} />
      <Car brand="Ford" />
      <Football />
    </React.Fragment>,
    rootElement
  );
};

renderApp(); // Initial rendering

// Example: Re-render the app after 5 seconds
setTimeout(() => {
  ReactDOM.unmountComponentAtNode(rootElement); // Clear previous rendering
  renderApp(); // Re-render with different props or components
}, 5000);
