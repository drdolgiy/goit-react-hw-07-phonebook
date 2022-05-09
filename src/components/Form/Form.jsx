import { ContactForm, ContactLabel, TelLabel, InputName } from "./Form.styled";
import { useCreateContactMutation } from 'redux/contactsApi';

export const Form = () => {
    const [createContact] = useCreateContactMutation();
  
    const handleSubmit = e => {       
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const contacts = { name: name, phone: number };
        createContact(contacts);
        form.reset();
    };

    return (
        <ContactForm autoComplete="off" onSubmit={handleSubmit}>
            <ContactLabel htmlFor='this.nameInputId'>
                Name
                <InputName
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. 
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </ContactLabel>

            <TelLabel>
                    Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, 
                    parentheses and can start with +"
                    required
                    />
            </TelLabel>
            <button type='submit'>Add contact</button>
        </ContactForm>
    )   
};
