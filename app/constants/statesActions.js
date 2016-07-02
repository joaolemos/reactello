/*
  String contants for states and actions used across the application
*/

module.exports = {
	// MISC
	FIREBASE: {
		apiKey: "AIzaSyCPBF5WCebtVidMnsiH-8TMVdXNYBe4L0g",
    authDomain: "reactello-b16d6.firebaseapp.com",
    databaseURL: "https://reactello-b16d6.firebaseio.com",
    storageBucket: "reactello-b16d6.appspot.com",
	},

	// UI FEEDBACK ACTIONS
	DISPLAY_ERROR: "DISPLAY_ERROR",
	DISPLAY_MESSAGE: "DISPLAY_MESSAGE",
	DISMISS_FEEDBACK: "DISMISS_FEEDBACK",

	// AUTH ACTIONS
	ATTEMPTING_LOGIN: "ATTEMPTING_LOGIN",
	LOGIN_USER: "LOGIN_USER",
	LOGOUT: "LOGOUT",

	// AUTH STATES
	LOGGED_IN: "LOGGED_IN",
	ANONYMOUS: "ANONYMOUS",
	AWAITING_AUTH_RESPONSE: "AWAITING_AUTH_RESPONSE"

};
