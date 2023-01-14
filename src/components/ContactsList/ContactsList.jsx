import { ContactItem } from "components/ContactItem/ContactItem"
import { nanoid } from "nanoid";
import React from "react";
const generateId = nanoid();

export const ContactsList = ({ contacts, handleDelete }) => {
    return (
        <div>
        
        <ul>
          {contacts.map(({name, number, id}) => {
            return (
                
        <ContactItem 
          key={nanoid()} 
          id={id} 
          name={name} 
          number={number}
          handleDelete={handleDelete}
          ></ContactItem>
          )}
          )}
        </ul>
      </div>
    )
}