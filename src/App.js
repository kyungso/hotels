import 'react-input-range/lib/css/index.css'

import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from './pages/home/HomePage'
import HotelListPage from './pages/list/HotelListPage'

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/web" exact component={HomePage} />
        <Route path="/web/hotels" exact component={HotelListPage} />
        <Redirect from="*" to="/web" />
      </Switch>
    </>
  )
}
