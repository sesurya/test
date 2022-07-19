import './App.css';
import Home from './customer_support_components/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './customer_support_components/Navbar';
import ChatPage from './customer_support_components/ChatPage';




function App() {
  return (

 
    <Router>
      <div className="App">
        
        <Navbar/>
        <Switch>
            <Route exact path="/">
              <div className="content">
                <Home />
              </div>
            </Route>
       
            <Route exact path="/create/:id">
                
                <ChatPage/>
            </Route>
        </Switch>
        
      </div>
    </Router>
  
  );
}

export default App;
