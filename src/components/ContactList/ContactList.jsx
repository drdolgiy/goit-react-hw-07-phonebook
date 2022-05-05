import React from "react";
import propTypes from "prop-types";
import { ListItem, DeleteButton } from "./ContactList.styled";

export const ContactList = ({ items, deleteContact }) => {
    return (
        <ul>
            {items.map(item => {
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
