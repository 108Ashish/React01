/* 
* HMR: Hot Module Reloding
* File watcher algorithum -c++
* Buiding
* MINIFY
* cleaning our code
* Dev and production
* Super fast buliding algorithm
* Image Optimization
*Caching while developent 
* Compresion
* Compatable with older version of browser
* add polifill

*/
import React from "react";
import ReactDOM from "react-dom/client"; 


const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Life is full of React"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "My life, my decision"
);

const container = React.createElement(
  'div',
  {
    id: "container",
  },
  [heading, heading2]
);

console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
