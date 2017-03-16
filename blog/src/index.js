import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// react-router-dom replaces react-router in package.json dependencies.
// react-router 4.0.0 is a dependency of react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import reducers from './reducers';

// no longer using routes file
// import routes from './routes';

import promise from 'redux-promise';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
        <App>
          <Switch>
            <Route exact path="/" component={PostsIndex} />
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id" component={PostsShow} />
          </Switch>
        </App>
    </Router>
  </Provider>
  , document.querySelector('.container'));
