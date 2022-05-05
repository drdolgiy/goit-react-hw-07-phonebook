import React from "react";
import propTypes from "prop-types";
import { ListItem, DeleteButton } from "./ContactList.styled";

export const ContactList = ({  deleteContact, filteredContact }) => {
    return (
        <ul>
            {filteredContact.map(item => {
                return (
                    <ListItem key={item.id}>{item.name}: {item.phone}
                        <DeleteButton type="button"
                            onClick={() => deleteContact(item.id)}>Delete</DeleteButton>
                    </ListItem>
                )
            })}
        </ul>
    )
};

ContactList.propTypes = {
    filteredContact: propTypes.array.isRequired,
    deleteContact: propTypes.func.isRequired
};
