import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Landing />
              <Footer />
            </Route>
            <Route exact path="/home">
              <Alert alert={alert} />
              <Home showAlert={showAlert} />
              <Footer />
            </Route>
            <Route exact path="/about">
              <Alert alert={alert} />
              <About />
            </Route>
            <Route exact path="/login">
              <Alert alert={alert} />
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <Alert alert={alert} />
              <Signup showAlert={showAlert} />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
};

export default App;
