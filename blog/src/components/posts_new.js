import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';

import {createPost} from '../actions/index';

const Fields = {
    title: {
        type: 'input',
        label: 'Post Title'
    },
    categories: {
        type: 'input',
        label: 'Post Categories'
    },
    content: {
        type: 'textarea',
        label: 'Post Contents'
    }
};

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit(props) {
        this.props.createPost(props)
        .then(() => {
            // blogpost has been created, navigate to index
            // call this.context.router.push to send user back to index
            this.context.router.push('/');
        });
    }

    renderField(fieldConfig, field) {
        const fieldHelper = this.props.fields[field];
        return (
            <div key={fieldHelper}
                 className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}
                 >
                <label>{fieldConfig.label}</label>
                <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error : ''}
                </div>
            </div>
        );
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                <h3>Create a New Post</h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    {_.map(Fields, this.renderField.bind(this))}
                    <button type="submit" className="btn btn-info">Submit</button>
                    <Link to="/" className="btn btn-warning">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    _.each(Fields, (type, field) => {
        if (!values[field]) {
            errors[field] = `Enter a ${field}`;
        }
    });
    return errors;
}

// reduxForm: 1st arg is config, 2nd arg is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'PostsNew',
    fields: _.keys(Fields),
    validate
}, null, {createPost})(PostsNew);
