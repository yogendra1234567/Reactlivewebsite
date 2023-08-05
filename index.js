   //import React from 'react';
  //import ReactDOM from 'react-dom';
  // import './index.css';
   //const fname='yogendra';
// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/202/300";
// const img3="https://picsum.photos/205/300";
// const img4="https://picsum.photos/208/300";
// const link="https://www.thapatechnical.com/2020/05/react-developer-tools-in-react-js-in.html"
// ReactDOM.render(
// <ToDoList>
//   <h1 className='heading'> Hello, My name is {fname} </h1>
//   <div className='div_img'>
//   <img src={img1} alt="randomIamges" />
//   <img src={img2} alt="randomIamges" />
//   <img src={img3} alt="randomIamges" />
//   <a href={link}>
//   <img src={img4} alt="randomIamges" />
//   </a>
//   </div>
  
// </>
//   ,document.getElementById('root')
// );
import React from "react";
import ReactDOM from "react-dom/client";
import'./index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </>,
    

);
