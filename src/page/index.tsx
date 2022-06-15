import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from '../style/GlobalStyle'

import { Home } from './Home'
import { NotFound } from './NotFound'

export function App(): JSX.Element {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Helmet titleTemplate="React Starter - %s" defaultTitle="React" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </React.Fragment>
  )
}
