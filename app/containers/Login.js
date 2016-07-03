var React = require('react');
var MainContainer = require('./MainContainer');
var LoginForm = require('../components/LoginForm');

function Login() {
  return (
    <MainContainer>
      <LoginForm />
    </MainContainer>
  )
}

module.exports = Login;
