import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
      if(!this.props.post){//if the post doesn't already exist [save something and be lighter] could be also in the post_index but it changes often
        const { id } = this.props.match.params;// props from React-Router
        this.props.fetchPost(id);
      }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p className="pre-content">{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { // ownProps retrieve the componet props, so in this case we have access to React-Router id props from here
  return { post: posts[ownProps.match.params.id] };
}
/*function mapStateToProps(state) {
  return { post : state.posts. };
} din't work coz the state return an obj that as a id as key and the request obj as a param, [he setted like that]*/

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
