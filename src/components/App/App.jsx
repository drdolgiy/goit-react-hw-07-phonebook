import {Form} from '../Form/Form';
// import {Filter} from '../Filter/Filter';
import {ContactList} from '../ContactList/ContactList';
import {Container} from './App.styled'
// import { useSelector, useDispatch } from 'react-redux';
// import { removeContact } from 'redux/contactsSlice';
// import { filteredContacts } from 'redux/filterSlice';
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contactsApi';
// import {Contacts} from '../Contacts/Contacts'
// import { useState } from 'react';
import { Audio } from 'react-loader-spinner';

export default function App() {
    const { data, isFetching } = useFetchContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    console.log(data);
    // const dispatch = useDispatch();
    // const contacts = useSelector(state => state.contacts.items);
    // console.log(contacts);
    // const filter = useSelector(state => state.filter.value);

    // const filteredContact = () => {
    //     const normalizedFilter = filter.toLowerCase();
    //     return data.filter(contact =>
    //          (contact.name.toLowerCase().includes(normalizedFilter)));
    // };

    // const changeFilter = event => {
    //     const inputValue = event.currentTarget.value;
    //     dispatch(filteredContacts(inputValue));
    // };

    // const deleteContact = id => {
    //     dispatch(removeContact(id));
    // };

    return (
        <Container>
            
            <h1>Phonebook</h1>
            
            <Form/>

            {/* <Filter value={filter} onChange={changeFilter} /> */}

            <h2>Contacts</h2>
            {isFetching && <Audio/>}
            {data && <ContactList items={data} deleteContact={deleteContact}/>}
            {/* <ContactList items={data}/> */}
            {/* <ContactList items={data}
                filteredContact={filteredContact()}
                 deleteContact={deleteContact}
            /> */}
            {/* <h1>Phonebook</h1> */}
        </Container>
    );    
};