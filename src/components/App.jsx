import { Component } from "react";
import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { element } from "prop-types";
import { Wrapper } from "./App.styled";


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter:'',
  }

  addNewContact = data => {
    if (this.checkContact(data.name)) {
      return alert(`${data.name} is already in contacts`)
    }

    this.setState(({contacts}) => {
      return {
        contacts: [...contacts, {id:nanoid(), ...data}]
      };
    });
  };

  checkContact = contact => {
    return this.state.contacts.find(
      element => element.name.toLowerCase() === contact.toLowerCase()
    );
  };

  changeFilter = (event) => {
    this.setState ({filter: event.currentTarget.value})
  };

  filteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  handleDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => {
          return contact.id !== id;
        }
      )
    });
  };

  render () {
    const {id, name, contacts, number, filter} = this.state;

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form onSubmit={this.addNewContact}></Form>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter}/>

      <ContactsList contacts={this.filteredContacts()} handleDelete={this.handleDelete}/>
    </Wrapper>
  )}

};
