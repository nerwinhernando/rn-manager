import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends React.Component {
    componentWillMount() {
        var config = {
            apiKey: 'AIzaSyBbLXCUZJUhH2Nw6_knEoekGQF0YDLMuZ0',
            authDomain: 'manager-ab850.firebaseapp.com',
            databaseURL: 'https://manager-ab850.firebaseio.com',
            projectId: 'manager-ab850',
            storageBucket: 'manager-ab850.appspot.com',
            messagingSenderId: '145422229395'
        };
        firebase.initializeApp(config);
    }

    render() {
        return(
            <Provider store={createStore(reducers,  {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;