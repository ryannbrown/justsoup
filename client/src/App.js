import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navigation from "./components/Navigation/index"
// import Homepage from "./pages/Homepage/index"
import Homepage from "./pages/Homepage/index"
import WorksDetails from "./pages/WorksDetails/index"
import Admin from "./pages/Admin/index.js"
import About from "./pages/About/index.js"
import Pricing from "./pages/Pricing/index.js"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      worksObject: []
    };
    // this.handler = this.handler.bind(this);
  }


  fetchPosts() {
    fetch(`/api/getWorks/`)
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        this.setState({
          worksObject: json.data,
        });
      });
  }
  
componentDidMount() {
// this.fetchPosts();


  // const history = createHistory({
  //   basename: process.env.PUBLIC_URL,
  // });

}
 
  render() {

    const {worksObject} = this.state;

  return (
    <div className="App">
      {/* <Navigation /> */}
      <Router
      //  history={history}
       >
        <Switch>
        <Route  path="/pricing" render={(props) => <Pricing {...props} btnLink="" btnText="Home" />} />
          <Route path="/admin" component={Admin}/>
          <Route path="/about" component={About}/>
          <Route path="/works/:id" render={(props) => <WorksDetails {...props} worksObject={worksObject} title={`Props through render`} />} />
          <Route exact path="/" render={(props) => <Homepage {...props} worksObject={worksObject} btnLink="pricing" btnText="Pricing" />} />
        </Switch>
      </Router>
      

    </div>
  );
}
}


export default App;
