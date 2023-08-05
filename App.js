// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Switch,Route,Redirect} from "react-router-dom";
const App=()=>{
  return(
   <>
   <Navbar/>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/contact" component={Contact}/>
   <Route exact path="/service" component={Service}/>
    <Redirect to="/"/>
    </Switch>
</>
  );
};
export default App;
