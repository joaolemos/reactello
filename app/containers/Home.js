var React = require('react');
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('./MainContainer');
var Dashboard = require('../components/Dashboard');

function Home () {
  return (
    <MainContainer>
      <Dashboard />
    </MainContainer>
  )
}

module.exports = Home;
