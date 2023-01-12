import { Component } from "react";
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
  }

  handleChange = (event) => {
    this.setState({name: event.currentTarget.value})
  };

  reset = () => {
    this.setState({name :''})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {name} = this.state;
    this.setState(prevState => ({
      contacts : [ {name}, ... prevState.contacts]
    }))
    this.reset();
  }

  render () {
    const {name, contacts} = this.state;
    const Id = nanoid();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h2>Phonebook</h2>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          <input type="text" 
            name="name" 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange} />
        </label>
        <button>Add contact</button>
      </form>

      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({name}) => (
            <li key={Id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  )}

};
