import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  static defaultProps = {
    name: 'Fred jackson',
    email: 'fred@yahoo.com',
    phone: '777-777-7777'
  };

  onSubmitHandler = e => {
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter name.."
                name="name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                placeholder="Enter email..."
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                placeholder="Enter phone..."
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-block btn-primary">
                Add contact
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
