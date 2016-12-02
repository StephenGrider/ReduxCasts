import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchPost, deletePost} from '../actions/index';

class PostShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
        .then(() => {
            this.context.router.push('/');
        });
    }

    render() {
        const {post} = this.props;

        if (!this.props.post) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Link to="/" className="btn btn-info">Back to Index</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <button className="btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick.bind(this)}
                        >
                    Delete Post
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);
