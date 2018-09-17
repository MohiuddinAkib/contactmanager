import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  constructor(props) {
    super(props);
  }

  static propTypes = {
    // profile: PropTypes.shape({
    //   id: PropTypes.number,
    //   name: PropTypes.string,
    //   email: PropTypes.string,
    //   phone: PropTypes.string
    // })
    profile: PropTypes.object.isRequired
  };

  static defaultProps = {
    profile: {
      id: 0,
      name: 'brad',
      email: 'brad@gmail.com',
      phone: '555-555-5555'
    }
  };

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  // onDeleteClick = (id, dispatch) =>
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(() => dispatch({ type: 'DELETE_CONTACT', payload: id }));

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.profile;
    const { showContactInfo } = this.state;
    const caretClass = showContactInfo ? 'fa-sort-up' : 'fa-sort-down';
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4 className="card-title">
                {name}
                <i
                  onClick={this.onShowClick}
                  className={`fas ${caretClass}`}
                  style={{ cursor: 'pointer' }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                />
                <Link to={'/contact/edit/' + id}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : (
                ''
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// Contact.defaultProps = {
//   profile: {
//     name: 'brad',
//     email: 'brad@gmail.com',
//     phone: '555-555-5555'
//   }
// };

// Contact.propTypes = {
//   profile: PropTypes.objectOf(PropTypes.string)
// };

export default Contact;
