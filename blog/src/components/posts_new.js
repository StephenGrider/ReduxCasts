import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

  onSubmit(props) {
    this.props.createPost(props, () => {
      // blog post has been created, navigate the user to the index
      // We navigate by calling this.props.history.push with the
      // new path to navigate to.
      this.props.history.push('/')
    });
  }

  renderField(field) {
    return (
      <div className={`form-group ${field.meta.touched && field.meta.invalid ? 'has-danger' : ''}`}>
        <label>{field.label}</label>
        <input
          {...field.input}
          type="text" className="form-control"
         />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        <Field
          label="Title" // this is a custom prop
          name="title" component={this.renderField}
         />
        <Field
          label="Categories" // this is a custom prop
          name="categories"  component={this.renderField}
         />
        <Field
          label="Content" // this is a custom prop
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  if(!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

// reduxForm: 1st is form config
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  validate
})(
  connect(null, { createPost })(PostsNew)
);
