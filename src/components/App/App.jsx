import {Form} from '../Form/Form';
import {Filter} from '../Filter/Filter';
import {ContactList} from '../ContactList/ContactList';
import {Container} from './App.styled'
import { filteredContacts } from 'redux/filterSlice';
import { useSelector,useDispatch } from 'react-redux';
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contactsApi';
import { Audio } from 'react-loader-spinner';

export default function App() {
    const { data, isFetching } = useFetchContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    console.log(data);
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.value);
    console.log(filter);

    const filteredContact = () => {
        const normalizedFilter = filter.toLowerCase();
        return data.filter(contact =>
             (contact.name.toLowerCase().includes(normalizedFilter)));
    };

    const changeFilter = event => {
        const inputValue = event.currentTarget.value;
        dispatch(filteredContacts(inputValue));
    };

    return (
        <Container>        
            <h1>Phonebook</h1>        
            <Form/>
            <Filter value={filter} onChange={changeFilter} />
            {/* <Filter /> */}
            <h2>Contacts</h2>
            {isFetching && <Audio/>}
            {data && <ContactList filteredContact={filteredContact()} deleteContact={deleteContact}/>}
            {/* {data && <ContactList items={data} filteredContact={filteredContact} deleteContact={deleteContact}/>} */}
        </Container>
    );    
};