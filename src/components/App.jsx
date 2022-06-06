import React, { Component} from 'react';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

handleChange = event => { 
  const {name, value} = event.target
  this.setState({[name]: value})}

handleSubmit = event => {
  event.preventDefault();
  const {name, number} = this.state;
  console.log(`name: ${name} number: ${number}`);
    this.onSubmit({ ...this.state });
}

  render() {
    const { contacts, name, number } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
                        Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
                        Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h3>Contacts</h3>
        <p>Find contacts by name</p>
        <input type='text'></input>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <span>{contact.name}:</span>
              <span> {contact.number} </span>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
