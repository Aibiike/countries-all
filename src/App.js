import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import HomePages from "./pages/HomePages";
import Countries from "./pages/Countries";
import CountryDetails from "./components/CountryDetails";
import Gallery from "./pages/Gallery";
import SearchList from "./components/SearchList";

function App() {
  return (
 <Router >
   <Route exact path='/' component={HomePages}/>
   <Route exact path='/countries' component={Countries}/>
   <Route exact path='/countries/:name' component={CountryDetails} />
   <Route exact path='/search/:name' component={SearchList} />
   <Route exact path='/galleries'  component={Gallery}/>
 </Router>
  );
}

export default App;
