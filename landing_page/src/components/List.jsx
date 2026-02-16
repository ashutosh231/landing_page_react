import React from 'react';
import { useState } from 'react';

const List = () => {
    const [contacts, setContacts] = useState([]);

    function addContact(){
        const newContact = {
            id:Date.now(),
            name: "John Doe",
            email: " "
        };
        setContacts(prev => [...prev, newContact]);

    }
    
  return (
    <div>
        
    </div>
  );
};

export default List;