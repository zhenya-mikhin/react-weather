import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MonthStatistics } from './pages/MonthStatistics/components/MonthStatistics';
import { Header } from './shared/Header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/month-statistics" exact component={MonthStatistics} />
      </Switch>
    </div>
  );
}

export default App;
