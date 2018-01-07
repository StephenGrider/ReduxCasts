import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";
const iterm = "surfboards";

class App extends Component {
  constructor(props) {
    super(props);

    
      
    this.state = {
      videos: [],
      selectedVideo: null 
    };
    
    //this.iterm = "surfboards";

    this.videoSearch(iterm);
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
    
    /* setTimeout attempt (work differtly coz waits but then execute the function for every typing)
    delayedVideoSearch = term => setTimeout(() => this.videoSearch(term), 5000);*/
    //my debouced version [debounce (Lodash library method) does the trick, waits and then executes the function just once]
    debouncedVideoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 500);

  render() {
    /* Original version [not clear having the same name and I don't know why to put it in the render function (maybe just to take the same name)]
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 500);*/
      
    

    return (
      <div>
        <SearchBar 
        onSearchTermChange={this.debouncedVideoSearch} 
        itermp={iterm} 
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
