import React from "react";
//import { Component } from "react";

import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

/*export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}*/

// functional version component (why it uses class component since there's no state involved in the App component?)
 const App = () => {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }

export default App;