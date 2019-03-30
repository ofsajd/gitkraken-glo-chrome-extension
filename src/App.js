/* global chrome */

import React, { Component, Fragment } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './redux/reducers/index';
import MainContainer from './containers/Main';
import { ThemeProvider } from 'styled-components';
import { theme } from './constsants/theme';
import { GlobalStyle } from './styles/global' ;

const composeEnhancers = composeWithDevTools({ realtime: true });

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

store.subscribe(() => {
  localStorage.setItem('code', store.getState().code);
});

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Fragment>
            <MainContainer />
            <GlobalStyle />
          </Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;