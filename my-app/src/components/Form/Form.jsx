import  { Component } from 'react';
import FormBtn from '../FormBtn/FormBtn'
import Input from '../Input/Input'
import { v4 as uuidv4 } from 'uuid';
import css from './Form.module.css';
import PropTypes from 'prop-types';


class Form extends Component {
  state = { 
    name: '',
    number: '',
  }
  
    setForm = e => {
        console.log(e.target.value);
        console.log(e.target.name)
        const { value, name } = e.target;
        this.setState({ [name]: value})
  }
  
      submitForm = e => {
        e.preventDefault();
        console.log(this.state);      
        const createContact = {
          name: this.state.name,
          number: this.state.number,
          id: uuidv4(),
        };
        this.props.addContact(createContact);
        this.setState({ 
    name: '',
    number: '',
  })
        
           };

  render() { 
    
    return ( 
       <form className={css.form} onSubmit={this.submitForm}>
        <Input contact={this.state.number} nameUser={this.state.name} handleInputValue={this.setForm} />
        <FormBtn textBtn={"Add contact"} />
          
      </form>
      
     );
  }
}

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
}
 
export default Form;

