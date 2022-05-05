import { useFetchContactsQuery } from 'redux/contactsApi';

export const Contacts = () => {
    console.log(useFetchContactsQuery())
    const { data, isLoading } = useFetchContactsQuery();

    return (<h3>{data.name}</h3>)
    // return (<h3>name</h3>)
}   