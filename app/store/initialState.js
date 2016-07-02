/*
  This is the initial state of the Redux Store.
*/
var C = require("../constants/statesActions");

module.exports = {
	auth: {
		currently: C.ANONYMOUS,
		username: null,
		uid: null
	}
};
