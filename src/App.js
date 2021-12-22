import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Appointment from './Pages/Appointment/Appointment';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
// import Navigation from './Pages/Shared/Navigation/Navigation';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Navigation /> */}
          <Switch>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>

              <PrivateRoute path="/appointment">
                <Appointment />
              </PrivateRoute>
              <PrivateRoute path="/Dashboard" >
                <Dashboard />
              </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
