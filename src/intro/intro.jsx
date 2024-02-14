import  React from "react";

function Clock (props) {
   return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재시간 : { new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myElement = <h1>I Love JSX!</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

              