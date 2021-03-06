import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Vote from './pages/Vote'
import Create from './pages/Create'
import Settings from './pages/Settings'
// import CreateResult from './pages/CreateResult'
import CountCreator from './pages/CountCreator'
import CountVoter from './pages/CountVoter'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/Vote" component={Vote} />
      <Route exact path="/Create" component={Create} />
      <Route exact path="/Settings" component={Settings} />
      {/* <Route exact path="/Create/Result" component={CreateResult} /> */}
      <Route exact path="/Count/Creator" component={CountCreator} />
      <Route exact path="/Count/Voter" component={CountVoter} />
      <Route exact path="/" component={Vote} />
    </Switch>
  </BrowserRouter>
)

export default Router
