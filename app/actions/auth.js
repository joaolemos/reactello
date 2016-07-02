/*
  This module contains action creators dealing with `appState.auth`
*/
var C = require("../constants/statesActions"),
	firebase = require("firebase"),
	fireRef = firebase.initializeApp(C.FIREBASE),
	authRef = fireRef.auth()

module.exports = {
	// called at app start
	startListeningToAuth: function(){
		return function(dispatch,getState){
			authRef.onAuthStateChanged(function(authData){
				if (authData){
					dispatch({
						type: C.LOGIN_USER,
						uid: authData.uid,
						username: authData.github.displayName || authData.github.username
					});
				} else {
					if (getState().auth.currently !== C.ANONYMOUS){ // log out if not already logged out
						dispatch({type:C.LOGOUT});
					}
				}
			});
		}
	},

	attemptLogin: function() {
		return function(dispatch,getState) {
			dispatch({type:C.ATTEMPTING_LOGIN});
			var provider = new fireRef.auth.GithubAuthProvider();
			authRef.signInWithPopup(provider).then(function(result) {
				// no need to do anything here, startListeningToAuth have already made sure that we update on changes
			}).catch(function (error) {
					dispatch({type:C.DISPLAY_ERROR,error:"Login failed! "+error});
					dispatch({type:C.LOGOUT});
			})
		}
	},

	logoutUser: function(){
		return function(dispatch,getState){
			dispatch({type:C.LOGOUT}); // don't really need to do this, but nice to get immediate feedback
			fireRef.signOut();
		}
	}
};
