import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// React без JSX
// const img = (src) => React.createElement('img', { src, width: "200px" });
// const wrp = React.createElement('div', null, [img(images[1]), img(images[2])]);

// Рендер за умовою
// true && 'hello world' -> 'hello world'
// true && false -> false

// false && 'hello world' -> false
// false && false -> false

// true || 'hello world' -> true
// false || 'hello world' -> 'hello world'
// false || null -> null

// true ? 'hello world' : 'bye world' -> 'hello world'
// false ? 'hello world' : 'bye world' -> 'bye world'

// const defaultImage = images[2];

// React компоненти
// const Img = ({ src = defaultImage, alt }) => {
//   return <img width="200px" src={src} alt={alt || 'Product image'} />;
// };

// const App = () => (
//   <>
//     <Img src={images[0]} />
//     <Img alt="image" />
//   </>
// );

// import React from 'react';
//
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
