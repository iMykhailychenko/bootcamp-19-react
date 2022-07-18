import React from 'react';

import ReactDOM from 'react-dom/client';

import images from './assets/images.json';

// React без JSX
// const img = (src) => React.createElement('img', { src, width: "200px" });
// const wrp = React.createElement('div', null, [img(images[1]), img(images[2])]);

// Рендер за умовою
// true && 'hello world' -> 'hello world'
// false && 'hello world' -> false
// true || 'hello world' -> true
// false || 'hello world' -> 'hello world'
// true ? 'hello world' : 'bye world' -> 'hello world'
// false ? 'hello world' : 'bye world' -> 'bye world'

// React компоненти
const Img = ({ src, alt }) => {
  return src ? <img width="200px" src={src} alt={alt} /> : 'немає картинки';
};

const App = () => (
  <>
    <Img src={images[0]} alt="image" />
    <Img alt="image" />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// import React from 'react';
//
// import ReactDOM from 'react-dom/client';
//
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
