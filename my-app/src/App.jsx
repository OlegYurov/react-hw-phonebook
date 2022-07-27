import React, { Component } from 'react'
import Form from './components/Form/Form'
import Title from './components/Title/Title'
import RenderUsersList from './components/RenderUsersList/RenderUsersList'
import Filter from './components/Filter/Filter'


// import RenderUsersList from './components/RenderUsersList/RenderUsersList'


class App extends Component {
state = {
    contacts: [
       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    }

      setForm = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value})
  }

    addContact = (newContact) => {
        this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase() )
        ? alert (`${newContact.name}  is already in contacts`) :
        this.setState(prev => ({
        contacts: [...prev.contacts, newContact]
    }))
}
          
    filterContacts = () => {
        const { contacts, filter } = this.state;
        const filterLowerCase = filter.toLowerCase();
        if (filter.length) {
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(filterLowerCase)
            );
        } else {
            return contacts;
              }
            
        
    }  
    
    deliteContact = (id) => {
        
        const { contacts } = this.state;
        this.setState({
            contacts: contacts.filter((contact) => contact.id !== id)
        }
            
        )
    }

    render() {
        return (
        
            <div>
                <Title title={"Phonebook"} />
                
                <Form addContact={this.addContact}
                />
                <h2>Contacts</h2>
                <Filter onChange={this.setForm} filter={this.state.filter} />
                <RenderUsersList contacts={this.filterContacts()} deliteBtn={this.deliteContact} />
            </div>

        );

    }
    
}

export default App
