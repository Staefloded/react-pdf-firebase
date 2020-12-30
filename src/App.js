import { Fragment, useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import PdfInput from "./PdfInput";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Pdf from "./Pdf";

function App() {
  useEffect(() => {
    // Initialize materialise javascript
    M.AutoInit();
  }, []);

  return (
    <Router>
      <Fragment>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/pdf" component={Pdf} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={PdfInput} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
