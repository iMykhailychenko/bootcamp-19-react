import React from 'react';

import ReactDOM from 'react-dom/client';

import images from './assets/images.json';

//
const Img = ({ src, alt }) => {
  return src ? <img width="200px" src={src} alt={alt} /> : 'немає картинки';
};

// const wrp = React.createElement('div', null, [img(images[1]), img(images[2])]);
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
