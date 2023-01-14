import { Component } from "react";
import { nanoid } from 'nanoid';

export class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = (event) => {
        const {value, name} = event.currentTarget;
        this.setState({[name]: value})
      };

    reset = () => {
        this.setState({name :'', number:''})
      };
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {name, number} = this.state;
        this.props.onSubmit({...this.state})
        this.reset();
      }

    render() {
        const {name, number} = this.state;
    return (
    <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          <p>Name</p>
          <input type="text" 
            name="name" 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange} />
        </label>
        <label htmlFor="">
          <p>Number</p>
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
/>
        </label>
        <button type="submit">Add contact</button>
      </form>
    )}}