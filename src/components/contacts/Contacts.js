import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  eachContact = contact => <Contact key={contact.id} profile={contact} />;

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          const output = contacts.map(this.eachContact);
          return (
            <React.Fragment>
              <h1 className="display-4 mb-3">
                <span className="text-primary">Contact</span> list
              </h1>
              {output}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
