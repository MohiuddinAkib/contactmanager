import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
    );
    const { name, email, phone } = data;
    this.setState({ name, email, phone });
  }

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });
  onSubmitHandler = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === '') {
      this.setState({
        errors: { name: 'Name is required' }
      });
    } else if (email === '') {
      this.setState({
        errors: { email: 'Email is required' }
      });
    } else if (phone == '') {
      this.setState({
        errors: { phone: 'Phone is required' }
      });
    } else {
      const newContact = {
        name,
        email,
        phone
      };

      // axios
      //   .post('https://jsonplaceholder.typicode.com/users', newContact)
      //   .then(({ data }) => dispatch({ type: 'ADD_CONTACT', payload: data }));

      const { data } = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${
          this.props.match.params.id
        }`,
        newContact
      );

      dispatch({ type: 'EDIT_CONTACT', payload: data });

      this.setState({
        name: '',
        email: '',
        phone: '',
        errors: {}
      });

      this.props.history.push('/');
    }
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmitHandler.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    placeholder="Enter name.."
                    name="name"
                    value={name}
                    onChange={this.onChangeHandler}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter email..."
                    value={email}
                    onChange={this.onChangeHandler}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone..."
                    value={phone}
                    onChange={this.onChangeHandler}
                    error={errors.phone}
                  />
                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-primary">
                      Edit contact
                    </button>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
