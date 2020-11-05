import React from "react"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Nav from "./Components/Navbar/Navbar";



function App() {
  return (
   <Router> 
     <div> 
       <Nav /> 
       <Switch> 
         <Route exact path="/" component={About} />
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/portfolio" component={Portfolio} />
         <Route  component={NoMatch} />
       </Switch>
     </div>
   </Router>
  );
}

export default App;
