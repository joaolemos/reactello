var React = require('react');
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('./MainContainer');
var Dashboard = require('../components/Dashboard');

function Home () {
  return (
    <MainContainer>
      <h1>Reactello</h1>
      <Dashboard />
    </MainContainer>
  )
}

module.exports = Home;
