import './App.css';
import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

const initialState = {
  authenticated: false,
  loading: true,
};

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { authenticated } = state;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={Home} />
        <PublicRoute
          path="/signup"
          authenticated={authenticated}
          element={SignUp}
        />
        <PublicRoute
          path="/login"
          authenticated={authenticated}
          element={Login}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
