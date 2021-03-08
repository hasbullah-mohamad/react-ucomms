/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../layouts/Full';
import Home from './Home';
import Services from './Services';
import About from './About';
import Teams from './Team';

class Main extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route component={Teams} path="/team" />
          <Route component={Services} path="/services" />
          <Route component={About} path="/about" />
          <Route component={Home} path="/" />
        </Switch>
      </Layout>
    );
  }
}

export default Main;
