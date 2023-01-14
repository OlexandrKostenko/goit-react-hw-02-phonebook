import { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Label, SubmitButton, FormWrapper, Input } from "./Form.styled";

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
    <FormWrapper onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          <Label>Name</Label>
          <Input type="text"
            id='name' 
            name="name" 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange} />
        </label>
        <label htmlFor="number">
          <Label>Number</Label>
        <Input
            type="tel"
            id='number'
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
/>
        </label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormWrapper>
    )}};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};